import styled from "styled-components";
import { devices, paddings } from "../../theme/theme";

const PageContentContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  padding: 0 ${paddings.sm};
  min-height: calc(100vh - 10rem);
  box-sizing: border-box;

  ${devices.tablet} {
    min-height: calc(100vh - 12rem);
    margin-top: 6rem;
  }
`;

const PageContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <PageContentContainer>{children}</PageContentContainer>;
};

export default PageContent;
