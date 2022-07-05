import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, fontSizes, margins } from "../../theme/theme";
import heartIcon from "../../assets/icons/icon-heart-empty.svg";

const ItemWrapper = styled(Link)`
  position: relative;
  width: calc(50% - 0.75rem);
  color: ${colors.darkBlue};
  margin-bottom: ${margins.md};
  text-decoration: none;
  text-align: left;
  font-size: ${fontSizes.sm};
`;

const Thumb = styled.div<{ bg: string }>`
  height: 6rem;
  width: 100%;
  background: url(${(props) => props && props.bg}) center/cover no-repeat;
`;

const Price = styled.p`
  font-weight: 700;
`;

const HeartBtn = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: url(${heartIcon}) rgba(249, 247, 247, 0.5) center/contain
    no-repeat;
`;

const productExample = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  images: [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg",
    "https://dummyjson.com/image/i/products/1/3.jpg",
    "https://dummyjson.com/image/i/products/1/4.jpg",
    "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  ],
};

const Product: React.FC<{ product: typeof productExample }> = ({ product }) => {
  return (
    <ItemWrapper to={`/product/${product.id}`}>
      <Thumb bg={product.thumbnail} />
      <p>{product.title}</p>
      <Price>${product.price}</Price>
      <HeartBtn />
    </ItemWrapper>
  );
};

export default Product;
