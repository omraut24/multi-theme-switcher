import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext.jsx';
import { apiService } from '../services/api';
import {
  MainContent,
  ContentSection,
  Title,
  Subtitle,
  Paragraph,
  Button,
} from '../components/styled/Layout';
import {
  ProductGrid,
  LoadingSpinner,
  ErrorMessage,
  EmptyState,
} from '../components/styled/Cards';
import ProductCard from '../components/ProductCard.jsx';

const Home = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await apiService.getProducts(showAll ? undefined : 6);
        setProducts(data);
      } catch (err) {
        console.error('Error in fetchProducts:', err);
        
        // Handle specific error types
        let errorMessage = 'Failed to fetch products';
        
        if (err.status === 408) {
          errorMessage = 'Request timeout. Please check your internet connection and try again.';
        } else if (err.status === 404) {
          errorMessage = 'Products not found. Please try again later.';
        } else if (err.status >= 500) {
          errorMessage = 'Server error. Please try again later.';
        } else if (err.message) {
          errorMessage = err.message;
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [showAll]);

  const handleProductClick = (product) => {
    console.log('Product clicked:', product.title);
    // You can add navigation to product detail page here
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleRetry = () => {
    setError(null);
    setLoading(true);
    // The useEffect will trigger a new fetch
  };

  if (loading) {
    return (
      <MainContent theme={theme}>
        <LoadingSpinner theme={theme}>
          Loading products...
        </LoadingSpinner>
      </MainContent>
    );
  }

  if (error) {
    return (
      <MainContent theme={theme}>
        <ContentSection theme={theme}>
          <Title theme={theme}>Error Loading Products</Title>
          <ErrorMessage theme={theme}>
            {error}
          </ErrorMessage>
          <motion.div
            style={{ textAlign: 'center', marginTop: theme.spacing.md }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              theme={theme}
              onClick={handleRetry}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Retry
            </Button>
          </motion.div>
        </ContentSection>
      </MainContent>
    );
  }

  return (
    <MainContent
      theme={theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContentSection theme={theme}>
        <Title theme={theme}>Welcome to MultiTheme Store</Title>
        <Paragraph theme={theme}>
          Discover our amazing collection of products with dynamic theming. 
          Switch between different themes to see how the entire application transforms 
          its appearance, layout, and typography.
        </Paragraph>
        <Paragraph theme={theme}>
          Each theme offers a unique experience: Theme 1 provides a clean minimalist 
          design, Theme 2 features a dark sidebar layout, and Theme 3 brings a 
          colorful and playful interface with the Pacifico font.
        </Paragraph>
      </ContentSection>

      <ContentSection theme={theme}>
        <Subtitle theme={theme}>Featured Products</Subtitle>
        <Paragraph theme={theme}>
          Browse through our curated selection of products. Each product card 
          showcases different styling based on your selected theme.
        </Paragraph>
        
        {products.length === 0 ? (
          <EmptyState theme={theme}>
            No products available at the moment. Please try again later.
          </EmptyState>
        ) : (
          <>
            <ProductGrid
              theme={theme}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  theme={theme}
                  onClick={() => handleProductClick(product)}
                />
              ))}
            </ProductGrid>
            
            <motion.div
              style={{ textAlign: 'center', marginTop: theme.spacing.lg }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                theme={theme}
                onClick={handleToggleShowAll}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAll ? 'Show Less' : 'Show All Products'}
              </Button>
            </motion.div>
          </>
        )}
      </ContentSection>
    </MainContent>
  );
};

export default Home; 
