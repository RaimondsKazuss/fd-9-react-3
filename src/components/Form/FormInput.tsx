import styled from "styled-components";
import { colors, margins } from "../../theme/theme";

const FormInput = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid ${colors.lightBlue};
  box-sizing: border-box;
  margin-bottom: ${margins.sm};
`;

export default FormInput;
