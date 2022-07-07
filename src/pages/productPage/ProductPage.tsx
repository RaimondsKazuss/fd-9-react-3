import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { productInterface } from "../../interfaces";
import { colors, devices, margins, paddings } from "../../theme/theme";
import leftIcon from "../../assets/icons/icon-arrow-l.svg";
import rightIcon from "../../assets/icons/icon-arrow-r.svg";

const ProductWrapper = styled.div`
  width: 100%;
  padding-top: ${paddings.md};
  color: ${colors.darkBlue};
  line-height: 1.5rem;
`;

const ProductImage = styled.div<{ bg: string }>`
  position: relative;
  width: 100%;
  height: 20rem;
  background: url(${(props) => props && props.bg}) center/cover no-repeat;

  ${devices.mobile} {
    display: inline-block;
    width: calc(50% - 0.75rem);
    max-width: 20rem;
    margin-right: ${margins.md};
  }
`;

const Arrow = styled.div<{ left?: boolean }>`
  position: absolute;
  top: 40%;
  right: 1rem;
  background: url(${rightIcon}) rgba(249, 247, 247, 0.5) center/contain
    no-repeat;
  width: 2rem;
  height: 2rem;

  ${(props) =>
    props &&
    props.left &&
    `
    left: 1rem;
    background: url(${leftIcon}) rgba(249, 247, 247, 0.5) center/contain no-repeat;
    right: unset;
  `}
`;

const ProductInfo = styled.div`
  width: 100%;

  ${devices.mobile} {
    display: inline-block;
    width: calc(50% - 0.75rem);
    max-width: 20rem;
  }
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
  margin-top: ${margins.md};
`;

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState<productInterface | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const prevHandler = () => {
    productData &&
      setCurrentImage(
        currentImage > 0 ? currentImage - 1 : productData.images.length - 1
      );
  };

  const nextHandler = () => {
    productData &&
      setCurrentImage(
        currentImage === productData.images.length - 1 ? 0 : currentImage + 1
      );
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, [productId]);

  return (
    <ProductWrapper>
      {productData ? (
        <>
          <ProductImage bg={productData.images[currentImage]}>
            <Arrow left onClick={prevHandler} />
            <Arrow onClick={nextHandler} />
          </ProductImage>
          <ProductInfo>
            <p>{productData.title}</p>
            <Price>${productData.price}</Price>
            <AddToCart>Add to cart</AddToCart>
          </ProductInfo>
          <Description>
            {productData.description} {productData.description}{" "}
            {productData.description} {productData.description}{" "}
          </Description>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </ProductWrapper>
  );
};

export default ProductPage;
