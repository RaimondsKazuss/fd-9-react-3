import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, fontSizes, margins, devices } from "../../theme/theme";
import heartIcon from "../../assets/icons/icon-heart-empty.svg";
import { productInterface } from "../../interfaces";

const ItemWrapper = styled(Link)`
  position: relative;
  width: calc(50% - 0.75rem);
  color: ${colors.darkBlue};
  margin-bottom: ${margins.md};
  text-decoration: none;
  text-align: left;
  font-size: ${fontSizes.sm};
  line-height: 1.5rem;

  ${devices.tablet} {
    width: calc(33% - 0.5rem);
  }
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

const Product: React.FC<{ product: productInterface }> = ({ product }) => {
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
