import React from 'react'
import "./LoginCard.css"
import { Box,Button, Input } from "@chakra-ui/react"

function LoginCard() {
    return (
        <Box className="LoginCard__Box">
            <Input className="LoginCard__Input" type="email" variant="filled" placeholder="E-Mail" />
            <Input className="LoginCard__Input" type="password" variant="filled" placeholder="Password" />
            <Button colorScheme="blue" className="LoginCard__Button">LOG IN</Button>
            <hr />
            <Button className="LoginCard__Button" colorScheme="green">Create New Account</Button>
        </Box>
    )
}

export default LoginCard
