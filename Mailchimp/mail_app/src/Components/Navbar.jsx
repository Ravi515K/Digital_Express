import { Box, Button, Center, Flex, Heading, HStack,Image,Select,Text,VStack, Container
    
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Navbar(){

    return (
        <div style={{marginTop:"50px",padding:"10px", marginBottom:"50px"}}  >
            <Box>
                <HStack >
                    <Center>

                            <Box boxSize={"40%"}>
                                
                                <HStack spacing={"20px"}>
                                    <Heading as="h5" fontSize={"15px"}>Products</Heading>
                                    <Heading as="h5" fontSize={"15px"}>Resources</Heading>
                                    <Heading as="h5" fontSize={"15px"}>Inspiration</Heading>
                                    <Heading as="h5" fontSize={"15px"}>Pricing</Heading>
                                </HStack>
                            
                            </Box>

                            <Box boxSize={"10%"} >
                            <Image w="120px" src="https://i.ibb.co/0ChLk5K/Mail-logo.png" alt="Mail-logo" border="0" />
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
                                    
                                    <Box>
                                        <Image width="200px" src="https://www.freeiconspng.com/thumbs/world-icon-png/web-icon-black-png-planet-web-world-icon-17.png" />
                                    </Box>
                                    <Select>
                                        <option value="English">English</option>
                                        <option value="English">Espanol</option>
                                        <option value="English">Francase</option>
                                        <option value="English">Portuguse</option>
                                        <option value="English">Dutsch</option>
                                        <option value="English">Italiano</option>
                                    </Select>
                                    <Image width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEslS4lv5Ekyz-kyXUw-urto_6hx6haj8Iuw&usqp=CAU"/>
                                    
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
            <Box mt="70px">
                <VStack>
                    <Heading>Turns Emails into Revenue</Heading>
                    <Container maxW='750px'fontSize={"20px"}>
                        Win new customers with the #1 email marketing and automations
                            brand* that recommends ways to get more opens, clicks, and sales.
                    </Container>
                    <Center>
                    <Button width="200px" bg="gold" borderRadius={"70px"}>Sign Up</Button>
                    </Center>
                </VStack>
            </Box>
            
            
        </div>
    )
}