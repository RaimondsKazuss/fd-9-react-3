import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Product from "../../components/Product/Product";
import { categoryData } from "../../interfaces";

const Category: React.FC = () => {
  const { categoryName } = useParams();
  const [productData, setProductData] = useState<categoryData | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, [categoryName]);

  return (
    <Categories>
      {productData ? (
        productData.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })
      ) : (
        <div>loading ...</div>
      )}
    </Categories>
  );
};

export default Category;
