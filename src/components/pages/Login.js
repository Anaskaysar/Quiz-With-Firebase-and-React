import loginImage from "../../assets/images/login.svg";
import Illustration from "../Shared/Illustration";
import LoginForm from "../Shared/LoginForm";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration image={loginImage} />
        <LoginForm />
      </div>
    </>
  );
}
