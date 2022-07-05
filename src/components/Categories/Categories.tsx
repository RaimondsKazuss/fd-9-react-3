import styled from "styled-components";
import { margins } from "../../theme/theme";

const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: ${margins.md};
`;

const Categories: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CategoryWrapper>{children}</CategoryWrapper>;
};

export default Categories;
