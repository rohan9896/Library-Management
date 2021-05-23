import React, { useState, useRef } from "react";
import "./LoginCardAndSignUpCard.css";
import { Box, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";

function LoginCard() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(state.from);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <Box className="LoginCard__Box">
      <form onSubmit={handleSubmit}>
        <FormControl className="LoginCard__Input" id="email">
          <FormLabel>Email address</FormLabel>
          <Input ref={emailRef} type="email" isRequired />
        </FormControl>
        <FormControl className="LoginCard__Input" id="password">
          <FormLabel>Password</FormLabel>
          <Input ref={passwordRef} type="password" isRequired />
        </FormControl>
        <Button
          isLoading={loading}
          type="submit"
          colorScheme="blue"
          className="LoginCard__Button"
        >
          LOG IN
        </Button>
        <hr />
        <Link to="/signup">
          <Button className="LoginCard__Button" colorScheme="green">
            Create New Account
          </Button>
        </Link>
      </form>
      {error ? error : ""}
    </Box>
  );
}

export default LoginCard;
