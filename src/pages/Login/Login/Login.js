import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Home/Footer/Footer";

import "./Login.css";

const Login = () => {
  const { singInGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_ui = location.state?.from || "/";
  const googleLogIn = () => {
    singInGoogle().then((result) => {
      history.push(redirect_ui);
    });
  };

  const clickedRegister=e=>{
    e.preventDefault();
  }

  return (
    <div>
      <div className="login">
        <h1 className=" text-primary">Login</h1>
        <form onSubmit={clickedRegister}>
        <input type="text" placeholder="Enter Your Email" /> <br />
        <input type="password" placeholder="Enter Your Password" /> <br />
        <input type="submit" value="Register" />
        </form>
        <br />
        <div>---------or----------</div> <br />
        <button onClick={googleLogIn} className="btn btn-danger">
          Google Sing In
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
