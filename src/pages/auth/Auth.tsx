import styled from "styled-components";
import { colors, devices, margins } from "../../theme/theme";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.darkBlue};
  min-height: calc(100vh - 10rem);
  max-width: 20rem;
  margin: auto;

  ${devices.tablet} {
    min-height: calc(100vh - 12rem);
  }
`;

const FormTitle = styled.h3`
  font-weight: 700;
  margin-bottom: ${margins.sm};
`;

const FormInput = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid ${colors.lightBlue};
  box-sizing: border-box;
  margin-bottom: ${margins.sm};
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 2rem;
  background: ${colors.darkBlue};
  color: ${colors.bg};
`;

const Auth: React.FC = () => {
  return (
    <FormWrapper>
      <FormTitle>Login</FormTitle>
      <FormInput type="text" />
      <FormInput type="password" />
      <SubmitBtn>Log in</SubmitBtn>
    </FormWrapper>
  );
};

export default Auth;
