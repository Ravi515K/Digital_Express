import { Heading, Box , Text, FormControl, FormLabel,Input,Flex, Checkbox,Link, Button,Image} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Show, Hide } from '@chakra-ui/react'

export default function SignUp(){
    const [state,setState]=useState(true)
    const handleClick = ()=> {
            setState(!state)
    }
    //console.log(state)
    return (
        <Box  paddingLeft={"150px"} w="100%"> 
         <Flex>

         
          <Image mt="20px"  w="100px" h="100px" src="https://i.ibb.co/0ChLk5K/Mail-logo.png"/>
          <Box paddingTop="50px" pl={"20px"} w="60%" >
            <Flex>
                <Box boxSize={"500px"}>
                    <Box textAlign={"left"}>
                        <Heading fontFamily={"inherit"} fontStyle="inherit" fontWeight={"inherit"}>Sign up for Mailchimp</Heading>
                        <Text fontSize="20px"> Create an acount or log in</Text>
                    </Box>
                    <Box textAlign={"left"}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                                <Input w="500px" type='email' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                                <Input w="500px" type='email' />
                        </FormControl>
                        <FormControl>
                            <Flex justifyContent={"space-between"}>
                                <FormLabel>Pasword </FormLabel>
                                <FormLabel onClick={handleClick} color="teal">{state? <ViewIcon mr="10px" /> : <ViewOffIcon mr="10px" />}{state? "Show" : "Hide"}   </FormLabel>
                            </Flex>
                            <Input w="500px" type='password' />
                        </FormControl>
                        <Flex mt="20px" position={"relative"} >
                            <Checkbox position={"absolute"} top="5px"/>
                            <Text ml="30px">
                                    I don't want to recieve emails about MailChimp and related to Intuit products
                                    and feature updates, marketing best prices and pramotion from MailChimp.
                            </Text> 
                            
                        </Flex>
                        <Text mt="20px">By creating an account, you agree to our <Link href="https://mailchimp.com/legal/terms?_ga=2.20372479.611262178.1671007721-350671267.1670656525" color="teal" >Terms</Link> and have read and acknowledge the 
                        <Link color="teal" href="https://www.intuit.com/privacy/statement/">Global Privacy Statement</Link>. 
                        </Text>
                        <Button borderRadius={"0px"} mt="20px" w="150px" h="50px" bg="teal" color="white">Sign Up</Button>
                        <Text fontFamily={"5px"} mt="20px">
                                Invisible reCAPTCHA by Google <Link color="teal" href="https://policies.google.com/privacy"> Privacy Policy</Link>
                                and <Link color="teal" href="https://policies.google.com/terms"> Terms of Use</Link>.
                        </Text>
                    </Box>
                </Box>
            </Flex>
          </Box>
          <Box ml="50px" >
             <Image src="https://i.ibb.co/kBN5kVL/Screenshot-148.png"></Image>
          </Box>
          
          </Flex>  
        </Box>
    )
}
