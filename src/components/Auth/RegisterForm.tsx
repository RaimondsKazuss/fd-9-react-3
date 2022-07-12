import { Formik, Form } from "formik";
import FormBtn from "../Form/FormButton";
import FormInput from "../Form/FormInput";
import FormTextLink from "../Form/FormTextLink";
import FormTitle from "../Form/FormTitle";

const RegisterForm: React.FC<{
  formChangeHandler: (formType: string) => void;
}> = ({ formChangeHandler }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: "",
        repeatPassword: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <FormTitle>Registration</FormTitle>
        <FormInput type="text" name="name" />
        <FormInput type="text" name="surname" />
        <FormInput type="text" name="email" />
        <FormInput type="password" name="password" />
        <FormInput type="password" name="repeatPassword" />
        <FormBtn type="submit">Sign up</FormBtn>
        <FormTextLink onClick={() => formChangeHandler("login")}>
          Already have an account? Log in!
        </FormTextLink>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
