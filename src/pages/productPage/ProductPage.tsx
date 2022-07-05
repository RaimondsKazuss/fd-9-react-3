import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { productInterface } from "../../interfaces";
import { colors, paddings } from "../../theme/theme";

const ProductWrapper = styled.div`
  width: 100%;
  padding-top: ${paddings.md};
`;

const ProductImage = styled.div<{ bg: string }>`
  width: 100%;
  height: 20rem;
  background: url(${(props) => props && props.bg}) center/cover no-repeat;
`;

const ProductInfo = styled.div`
  width: 100%;
`;

const AddToCart = styled.button`
  width: 100%;
  height: 2rem;
  background-color: ${colors.darkBlue};
  color: ${colors.lightBlue};
`;

const Price = styled.p`
  font-weight: 700;
`;

const Description = styled.div`
  width: 100%;
`;

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState<productInterface | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, [productId]);

  return (
    <ProductWrapper>
      {productData ? (
        <>
          <ProductImage bg={productData.images[0]} />
          <ProductInfo>
            <p>{productData.title}</p>
            <Price>{productData.price}</Price>
            <AddToCart>Add to cart</AddToCart>
          </ProductInfo>
          <Description>{productData.description}</Description>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </ProductWrapper>
  );
};

export default ProductPage;
