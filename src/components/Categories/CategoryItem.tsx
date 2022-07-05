import styled from "styled-components";

import { Link } from "react-router-dom";
import { colors, margins } from "../../theme/theme";

const Item = styled(Link)`
  width: calc(50% - 0.75rem);
  height: 6rem;
  background: ${colors.lightBlue};
  color: ${colors.darkBlue};
  text-align: center;
  line-height: 6rem;
  margin-bottom: ${margins.md};
  text-decoration: none;
`;

const CategoryItem: React.FC = () => {
  return <Item to="/cateogry1">category title</Item>;
};

export default CategoryItem;
