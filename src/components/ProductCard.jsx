import React from 'react';
import {
  ProductCard as StyledProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductRating,
  StarRating,
  ProductCategory,
} from './styled/Cards';

const ProductCard = ({ product, onClick, theme }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }

    if (hasHalfStar) {
      stars.push('☆');
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push('☆');
    }

    return stars.join('');
  };

  return (
    <StyledProductCard
      theme={theme}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ProductImage theme={theme}>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onError={(e) => {
            const target = e.target;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
          }}
        />
      </ProductImage>
      
      <ProductInfo theme={theme}>
        <ProductCategory theme={theme}>{product.category}</ProductCategory>
        <ProductTitle theme={theme}>{product.title}</ProductTitle>
        <ProductDescription theme={theme}>{product.description}</ProductDescription>
        <ProductPrice theme={theme}>${product.price.toFixed(2)}</ProductPrice>
        <ProductRating theme={theme}>
          <StarRating theme={theme}>{renderStars(product.rating.rate)}</StarRating>
          <span>({product.rating.count} reviews)</span>
        </ProductRating>
      </ProductInfo>
    </StyledProductCard>
  );
};

export default ProductCard; 