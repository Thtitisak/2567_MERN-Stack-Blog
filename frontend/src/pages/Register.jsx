import { useState } from "react";
import AuthService from "../services/auth.services";
import { useNacigate } from "react-router";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNacigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = () => {
    try {
      const currentUser = AuthService.register(user.username, user.password);
      console.log(currentUser);
      if (currentUser.status === 200) {
        Swal.fire({
          title: "User Registration",
          text: currentUser.data.message,
          icon: "success",
        });
        setUser({
          username: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        title: "User Registration",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };
  return {};
};

export default Register;
