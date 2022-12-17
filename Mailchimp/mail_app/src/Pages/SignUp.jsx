import { Heading, Box , Text, FormControl, FormLabel,Input,Flex, Checkbox,Link, Button,Image} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useReducer } from "react";
import { Show, Hide } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

export default function SignUp(){
    const navigate=useNavigate()
    
    //console.log(state)

    let SignData={
        email:"",
        password:"",
        username:"",
        showpassword:false,
        error:false
   }


  const reducer=(state,action)=>{
       let {type,payload}=action;
            switch(type){
                case "SET_EMAIL":
                   
                    return {
                        ...state,
                        email:payload,
                        error:false,
                    }
                case "SET_PASS":
                    return {
                        ...state,
                        password:payload,
                        error:false
                    } 
                case "SHOW_PASSWORD":
                    return {
                        ...state,
                        showpassword:!state.showpassword,
                        error:false
                    } 
                 case "SET_USERNAME"  :
                    return {
                        ...state,
                        username:payload
                    } 
                  case "USER_SIGNUP":
                    if(state.email && state.password && state.username){
                        console.log(state.email)
                        return  fetch("http://localhost:8080/users",{
                            method:"post",
                            headers:{
                                'Content-Type':"application/json",
                                "Access-Control-Allow-Origin":"*"
                            },
                            body:JSON.stringify({
                                email:state.email,
                                password: state.password,
                                username:state.username,
                            })
                            

                        }).then(()=>{
                            navigate("/login")
                            
                        })
                       
                       
                    }
                    else {
                        return {
                            ...state,
                            error:true
                        }
                    } 
                default :
                    return  {...state}    
            }
  }

  const [state,dispatch]=useReducer(reducer,SignData)
  
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
                    {
                        state.error && <Text color={"red"}>Email, Password  and Username are required</Text>
                    }
                     
                    <Box textAlign={"left"}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                                <Input w="500px" type='email' value={state.email} 
                                     onChange={(e)=>dispatch({type:"SET_EMAIL",payload:e.target.value})}
                                />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                                <Input w="500px" type='text' value={state.username} 
                                    onChange={(e)=>dispatch({type:"SET_USERNAME",payload:e.target.value})}
                                    />
                        </FormControl>
                        <FormControl>
                            <Flex justifyContent={"space-between"}>
                                <FormLabel>Pasword </FormLabel>
                                <FormLabel onClick={()=>dispatch({type:"SHOW_PASSWORD"})} color="teal">{state.showpassword? <ViewIcon mr="10px" /> : <ViewOffIcon mr="10px" />}{state.showpassword? "Show" : "Hide"}   </FormLabel>
                            </Flex>
                            <Input w="500px"   value={state.password}  type={state.showpassword?"text":"password"}
                                 onChange={(e)=>dispatch({type:"SET_PASS",payload:e.target.value})}
                            />
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
                        <Button borderRadius={"0px"} mt="20px" w="150px" h="50px" bg="teal" color="white"
                            onClick={(e)=>{ 
                                e.preventDefault()
                                dispatch({type:"USER_SIGNUP"})
                             }
                        }
                        >Sign Up</Button>
                       
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
