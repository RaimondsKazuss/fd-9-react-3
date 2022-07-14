import { useQuery } from "react-query";
import styled from "styled-components";
import { paddings } from "../../theme/theme";
import CategoryItem from "./CategoryItem";

const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: ${paddings.md};
`;

const Categories: React.FC = () => {
  const { isLoading, data } = useQuery("categoryData", () =>
    fetch("https://dummyjson.com/products/categories").then((res) => res.json())
  );

  if (isLoading) return <div>loading...</div>;

  return (
    <CategoryWrapper>
      {data.map((category: string, index: number) => {
        return <CategoryItem key={index} category={category} />;
      })}
    </CategoryWrapper>
  );
};

export default Categories;
