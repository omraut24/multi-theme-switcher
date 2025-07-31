import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProductGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const ProductCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  overflow: hidden;
  transition: ${({ theme }) => theme.animation.transition};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${({ theme }) => theme.animation.transition};
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const ProductTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: ${({ theme }) => theme.animation.transition};
`;

export const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: ${({ theme }) => theme.animation.transition};
`;

export const ProductPrice = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: ${({ theme }) => theme.animation.transition};
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: ${({ theme }) => theme.animation.transition};
`;

export const StarRating = styled.span`
  color: #ffd700;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
`;

export const ProductCategory = styled.span`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.accent}20;
  color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: ${({ theme }) => theme.animation.transition};
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
`;

export const ErrorMessage = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: #ffebee;
  color: #c62828;
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const EmptyState = styled.div`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
`; 