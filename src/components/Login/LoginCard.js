import React from "react";
import "./LoginCardAndSignUpCard.css";
import { Box, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const navigate = useNavigate();

  return (
    <Box className="LoginCard__Box">
      <FormControl className="LoginCard__Input" id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" required />
      </FormControl>
      <FormControl className="LoginCard__Input" id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" required />
      </FormControl>
      <Button colorScheme="blue" className="LoginCard__Button">
        LOG IN
      </Button>
      <hr />
      <Button onClick={() => navigate('/signup')} className="LoginCard__Button" colorScheme="green">
        Create New Account
      </Button>
    </Box>
  );
}

export default LoginCard;
