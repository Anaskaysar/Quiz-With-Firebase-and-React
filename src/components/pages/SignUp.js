import signUpImage from "../../assets/images/signup.svg";
import Illustration from "../Shared/Illustration";
import SignUpform from "../Shared/SignUpform";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration image={signUpImage} />
        <SignUpform />
      </div>
    </>
  );
}
