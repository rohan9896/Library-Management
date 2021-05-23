import React, { useRef, useState } from "react";
import "./LoginCardAndSignUpCard.css";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { useAuth } from "../../Context/auth-context";
import { Link } from "react-router-dom";

function SignUpCard() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <Box className="SignUpCard__Box">
      <form onSubmit={handleSubmit}>
        <FormControl className="SignUpCard__Input" id="email">
          <FormLabel>Email address</FormLabel>
          <Input ref={emailRef} type="email" isRequired />
        </FormControl>
        <FormControl className="SignUpCard__Input" id="password">
          <FormLabel>Password</FormLabel>
          <Input ref={passwordRef} type="password" isRequired />
        </FormControl>
        <FormControl className="SignUpCard__Input" id="password-confirm">
          <FormLabel>Confirm Password</FormLabel>
          <Input ref={passwordConfirmRef} type="password" isRequired />
        </FormControl>
        <Button
          isLoading={loading}
          type="submit"
          colorScheme="blue"
          className="SignUpCard__Button"
        >
          SIGN UP
        </Button>
        {error && 
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={1}>{error}</AlertTitle>
        </Alert>
        }
        <p>
          Already have an account? <strong><Link to="/login">LOGIN</Link></strong>
        </p>
      </form>
      {console.log({currentUser})}
    </Box>
  );
}

export default SignUpCard;
