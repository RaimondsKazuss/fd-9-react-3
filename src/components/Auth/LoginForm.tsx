import { Form, Formik } from "formik";
import FormBtn from "../Form/FormButton";
import FormInput from "../Form/FormInput";
import FormTextLink from "../Form/FormTextLink";
import FormTitle from "../Form/FormTitle";

const LoginForm: React.FC<{
  formChangeHandler: (formType: string) => void;
}> = ({ formChangeHandler }) => {
  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <FormTitle>Log in</FormTitle>
        <FormInput type="text" name="userName" />
        <FormInput type="password" name="password" />
        <FormBtn type="submit">Log in</FormBtn>
        <FormTextLink onClick={() => formChangeHandler("forgot")}>
          Forgot password?
        </FormTextLink>
      </Form>
    </Formik>
  );
};

export default LoginForm;
