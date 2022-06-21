import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, devices, zIndexes } from "../../theme/theme";

const NavWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  position: absolute;
  right: 0;
  top: 4rem;
  background: ${colors.bg};
  z-index: ${zIndexes.sideBar};
  box-shadow: -3px 3px 5px -5px ${colors.shadow};

  ${devices.mobile} {
    display: none;
  }
`;

const NavItem = styled(Link)`
  width: 100%;
  height: 4rem;
  background: ${colors.lightBlue};
`;

const SideBar: React.FC = () => {
  return (
    <NavWrapper>
      <NavItem to="">CATEGORY NAME</NavItem>
      <NavItem to="">CATEGORY NAME</NavItem>
      <NavItem to="">CATEGORY NAME</NavItem>
      <NavItem to="">CATEGORY NAME</NavItem>
      <NavItem to="">CATEGORY NAME</NavItem>
      <NavItem to="">CATEGORY NAME</NavItem>
      <NavItem to="">CATEGORY NAME</NavItem>
    </NavWrapper>
  );
};

export default SideBar;
