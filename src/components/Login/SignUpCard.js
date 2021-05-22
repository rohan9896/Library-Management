import React, { useRef, useState } from "react";
import "./LoginCardAndSignUpCard.css";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useAuth } from "../../Context/auth-context";

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
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <Box className="SignUpCard__Box">
      <form onSubmit={handleSubmit}>
        <FormControl className="SignUpCard__Input" ref={emailRef} id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" isRequired />
        </FormControl>
        <FormControl
          className="SignUpCard__Input"
          ref={passwordRef}
          id="password"
        >
          <FormLabel>Password</FormLabel>
          <Input type="password" isRequired />
        </FormControl>
        <FormControl
          className="SignUpCard__Input"
          ref={passwordConfirmRef}
          id="password"
        >
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" isRequired />
          {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
        <Button
          isLoading={loading}
          type="submit"
          colorScheme="blue"
          className="SignUpCard__Button"
        >
          SIGN UP
        </Button>
      </form>
      {currentUser && currentUser.email}
    </Box>
  );
}

export default SignUpCard;
