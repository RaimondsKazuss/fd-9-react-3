import { Form, Formik } from "formik";
import { object, string } from "yup";
import FormBtn from "../Form/FormButton";
import FormError from "../Form/FormError";
import FormInput from "../Form/FormInput";
import FormTextLink from "../Form/FormTextLink";
import FormTitle from "../Form/FormTitle";

const validationSchema = object({
  userName: string().required(),
  password: string().required(),
});

const LoginForm: React.FC<{
  formChangeHandler: (formType: string) => void;
}> = ({ formChangeHandler }) => {
  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <FormTitle>Log in</FormTitle>
        <FormInput type="text" name="userName" />
        <FormError name="userName" />
        <FormInput type="password" name="password" />
        <FormError name="password" />
        <FormBtn type="submit">Log in</FormBtn>
        <FormTextLink onClick={() => formChangeHandler("forgot")}>
          Forgot password?
        </FormTextLink>
      </Form>
    </Formik>
  );
};

export default LoginForm;
