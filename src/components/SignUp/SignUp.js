import classes from "../../styles/Signup.module.css";
import Button from "../Shared/Button";
import CheckBox from "../Shared/CheckBox";
import Form from "../Shared/Form";
import TextInput from "../Shared/TextInput";
import Illustration from "./Illustration";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <CheckBox text="I agree to the Terms &amp; Conditions" />

          <Button>Submit Now</Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
