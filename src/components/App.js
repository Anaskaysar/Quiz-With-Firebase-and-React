import Layout from "../components/pages/Layout";
import "../styles/App.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      <SignUp />
      <Login />
    </Layout>
  );
}

export default App;
