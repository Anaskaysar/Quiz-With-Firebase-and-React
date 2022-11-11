import { Link } from "react-router-dom";
import signUpImage from "../../assets/images/signup.svg";
import classes from "../../styles/Signup.module.css";
import Button from "../Shared/Button";
import CheckBox from "../Shared/CheckBox";
import Form from "../Shared/Form";
import Illustration from "../Shared/Illustration";
import TextInput from "../Shared/TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration image={signUpImage} />
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

          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Already have an account? <Link href="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
