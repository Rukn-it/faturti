import "./header.css";

import { logout } from "../../redux-store/AuthSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
<<<<<<< HEAD
=======
  window.addEventListener("scroll", () => {
    let isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated=="") {
      const header = document.getElementsByClassName("header")[0];
      header.classList.toggle("active", window.scrollY > 200);
    }

    //{console.log(document.body.scrollHeight)}
  });
  // window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})

>>>>>>> auth
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch=useDispatch()
  return (
    <>
     
        <div className="header">
          <div className="containerr ">
            <div className="header__content">
              <div className="logo">
                <Link to="/">
                 Invoicer
                </Link>
              </div>
          
              
              <div className="account d-flex align-items-center">
                {isLoggedIn ?<div className="d-flex gap-2  align-items-center" ><button className="btn" onClick={()=>dispatch(logout())}>Logout</button></div>: 
                <div>
                  <Link to="/login" type="button" className="bg-yellow-600 py-2  px-4 me-2 rounded-md hover:bg-orange-700 transition-all">Login</Link>
                  <Link to="register" type="button" className="bg-yellow-600 py-2 px-4 rounded-md hover:bg-orange-700 transition-all">Register</Link>
                  </div> 
}
             
              </div>
            </div>
          </div>
        </div>

    </>
  );
}

export default Header;
