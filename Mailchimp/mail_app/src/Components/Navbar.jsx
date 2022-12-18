import { Box, Button, Center, Flex, Heading, HStack,Image,Select,
    Text,VStack, Container, Drawer
} from "@chakra-ui/react";

import {Link} from "react-router-dom"
import Inspiration from "../Pages/Inspiration";
import Products from "../Pages/Products";
import Resources from "../Pages/Resources";


export default function Navbar(){
 
    return (
        
        <Box mb="50px" className="main">
            <Box  p="50px" >
                <HStack >
                    <Center>

                            <Box boxSize={"40%"}>
                                
                                <HStack spacing={"20px"}>
                                    <Products />
                                    <Resources />
                                    <Inspiration />
                                    <Heading as="h5" fontSize={"20px"}>Pricing</Heading>
                                </HStack>
                            
                            </Box>

                            <Box boxSize={"10%"} >
                                 <Link to="/"> 
                                     <Image w="120px" src="https://i.ibb.co/mqdNLMd/Digi-Express.png" alt="Mail-logo" border="0" />
                                </Link> 
                            </Box>

                            <Box boxSize={"40%"}>
                                <HStack spacing={"20px"}>
                                    <Box >
                                        <Flex as="column">
                                            <Link href="tel:+18003155939">
                                                <Text>Sales :</Text>
                                                <Text width={"150px"}>+1(800)315-5939</Text>
                                            </Link>
                                        </Flex>
                                    </Box>
                                    
                                    <Select>
                                        <option value="English">English</option>
                                        <option value="English">Espanol</option>
                                        <option value="English">Francase</option>
                                        <option value="English">Portuguse</option>
                                        <option value="English">Dutsch</option>
                                        <option value="English">Italiano</option>
                                    </Select>
                                    
                                        <Button  width="400px" borderRadius={"80px"}> 
                                            <Link to="/login"> Login </Link>
                                        </Button>
                                        <Button  width="400px" bg="gold" borderRadius={"80px"}> 
                                            <Link to="/signup"> Signup </Link>
                                        </Button>
    
                                </HStack>

                            </Box>
                    </Center>
                </HStack>
            </Box> 
        </Box>
    )
}

