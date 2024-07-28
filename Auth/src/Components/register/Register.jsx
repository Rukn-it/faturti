import {React,useState,useEffect} from "react"
import "./register.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { Formik} from 'formik';
import * as Yup from 'yup';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../../redux-store/AuthSlice";
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("name is required "),
  email: Yup.string() .required("email is required ") .email("please enter valid email"),
  password: Yup.string().required("password is  required ") .min(8, "password must be at least 8 characters"),

});

 const Register = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  // useEffect(()=>{
  //   if (isLoggedIn) {
  //     navigate('/', { replace: true });
  //     toast.success("You already Logged in", {
  //       className: "custom-class-toast",
  //     });
      
  //   }
  //   },[])




const [loading, setLoading] = useState(false);
const dispatch = useDispatch();
const initialValues = {
  name:"",
  email: '',
  password: '',
};
const onSubmit =  (values) => {
  setLoading(true);
  try {
    //  console.log(values);
    //  localStorage.setItem("userRegister", JSON.stringify(values));
     dispatch(registerUser(values));

    setTimeout(() => {
      // toast.success("Registered successfully ",{
      //   className:"custom-class-toast",
      // })
      setLoading(false);

    // window.location.href = "/login";
     }, 3000);
  } catch (error) {
    console.error("Login failed:", error);
  } 
};

  return (
    <>
      <section className='section__register' >
      <Formik
        validationSchema={RegisterSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({values, errors,touched, handleChange,handleBlur, handleSubmit,}) => (
          <div className="register">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
              <div className="name-box pb-4">
                <div className="title-input">Name * </div>
                <input type="email"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder=""
                  className="form-control inp_text"
                  id="name"
                />
                <p className="error text-red-700  ms-2">
                {errors.name && touched.name && errors.name}
                </p>
                </div>
                <div className="email-box pb-4">
                <div className="title-input">Email * </div>
                <input type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder=""
                  className="form-control inp_text"
                  id="email"
                />
                <p className="error text-red-700  ms-2">
                  {errors.email  }
                </p>
                </div>
                <div className="password-box mb-7">
                <div className="title-input">Password * </div>
                <input type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder=""
                  className="form-control"
                />
                 <p className="error text-red-700  ms-2">
                  {errors.password }
                </p>
                </div>
              



                <button type="submit" className="button__login" >
                {loading ? <div className="loader"></div>: <div>Register</div>}

                </button>
                <Link to="/login" className=" underline">
            Login
           </Link>
              </form>
            </div>
          </div>
        )}
      </Formik>
   
      </section>
    </>
  )
}
export default Register



