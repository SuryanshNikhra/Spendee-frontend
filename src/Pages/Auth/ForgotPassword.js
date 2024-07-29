// // ForgotPassword.js
// import { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { forgotPasswordAPI } from "../../utils/ApiRequest";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 2000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//   };

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const { data } = await axios.post(forgotPasswordAPI, { email });

//       if (data.success) {
//         toast.success(data.message, toastOptions);
//       } else {
//         toast.error(data.message, toastOptions);
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.", toastOptions);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const particlesInit = async (engine) => {
//     await loadFull(engine);
//   };

//   return (
//     <div style={{ position: "relative", overflow: "hidden" }}>
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           background: {
//             color: { value: "#000" },
//           },
//           fpsLimit: 60,
//           particles: {
//             number: { value: 200, density: { enable: true, value_area: 800 } },
//             color: { value: "#ffcc00" },
//             shape: { type: "circle" },
//             opacity: { value: 0.5, random: true },
//             size: { value: 3, random: { enable: true, minimumValue: 1 } },
//             links: { enable: false },
//             move: { enable: true, speed: 2 },
//           },
//           detectRetina: true,
//         }}
//         style={{ position: "absolute", zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}
//       />
//       <Container className="mt-5" style={{ position: "relative", zIndex: "2 !important", color: "white !important" }}>
//         <Row>
//           <Col md={{ span: 6, offset: 3 }}>
//             <h2 className="text-white text-center mt-5">Forgot Password</h2>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formBasicEmail" className="mt-3">
//                 <Form.Label className="text-white">Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleChange} />
//               </Form.Group>
//               <div className="mt-4 text-center">
//                 <Button type="submit" className="btnStyle" disabled={loading}>
//                   {loading ? "Sending..." : "Send Reset Link"}
//                 </Button>
//               </div>
//             </Form>
//           </Col>
//         </Row>
//         <ToastContainer />
//       </Container>
//     </div>
//   );
// };

// export default ForgotPassword;

import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { forgotPasswordAPI } from "../../utils/ApiRequest";
import { useNavigate, Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(forgotPasswordAPI, { email });

      if (data.success) {
        toast.success(data.message, toastOptions);
      } else {
        toast.error(data.message, toastOptions);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", toastOptions);
    } finally {
      setLoading(false);
    }
  };

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#000" },
          },
          fpsLimit: 60,
          particles: {
            number: { value: 200, density: { enable: true, value_area: 800 } },
            color: { value: "#ffcc00" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: { enable: true, minimumValue: 1 } },
            links: { enable: false },
            move: { enable: true, speed: 2 },
          },
          detectRetina: true,
        }}
        style={{ position: "absolute", zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <Container className="mt-5" style={{ position: "relative", zIndex: "2 !important", color: "white !important" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="text-white text-center mt-5">Forgot Password</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleChange} />
              </Form.Group>
              <div className="mt-4 text-center">
                <Button type="submit" className="btnStyle" disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link"}
                </Button>
              </div>
              <div className="mt-3 text-center">
                <Link to="/login">
                  <Button variant="secondary">Back to Login</Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default ForgotPassword;
