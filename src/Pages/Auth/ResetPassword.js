// // ResetPassword.js
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { resetPasswordAPI } from "../../utils/ApiRequest";

// const ResetPassword = () => {
//   const { token } = useParams();
//   const [password, setPassword] = useState("");
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
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const { data } = await axios.post(resetPasswordAPI, { token, password });

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
//             <h2 className="text-white text-center mt-5">Reset Password</h2>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formBasicPassword" className="mt-3">
//                 <Form.Label className="text-white">New Password</Form.Label>
//                 <Form.Control type="password" placeholder="Enter new password" value={password} onChange={handleChange} />
//               </Form.Group>
//               <div className="mt-4 text-center">
//                 <Button type="submit" className="btnStyle" disabled={loading}>
//                   {loading ? "Resetting..." : "Reset Password"}
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

// export default ResetPassword;
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { resetPasswordAPI } from "../../utils/ApiRequest";
import { useNavigate, useParams, Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

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
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(resetPasswordAPI, { password, token });

      if (data.success) {
        toast.success(data.message, toastOptions);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
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
        style={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Container
        className="mt-5"
        style={{
          position: "relative",
          zIndex: "2 !important",
          color: "white !important",
        }}
      >
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="text-white text-center mt-5">Reset Password</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label className="text-white">New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                />
              </Form.Group>
              <div className="mt-4 text-center">
                <Button type="submit" className="btnStyle" disabled={loading}>
                  {loading ? "Resetting..." : "Reset Password"}
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

export default ResetPassword;
