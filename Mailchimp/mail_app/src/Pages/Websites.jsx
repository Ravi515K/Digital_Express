import { Box, Container, Flex, Text,Heading,Button ,Center,Link,Spacer} from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


export default function Websites(){
    return (
        <>
           <Navbar />

           <Box w="100%" h="50px" border="1px ">
                <Flex>
                    <Box  h="50px" border="1px" p="10px 100px 0px 100px" bg="grey"><Link href="/marketing">Marketing Platform</Link></Box><Spacer/>
                    <Box  h="50px" border="1px" p="10px 100px 0px 100px" ><Link href="/websites">Websites&Ecommerce</Link></Box><Spacer/>
                    <Box  h="50px" border="1px"p="10px 100px 0px 100px" bg="grey"><Link href="/transaction">Transaction Email</Link></Box>
                </Flex>
                
            </Box>

           <Box boxShadow={"2xl"} ml="15%" mr="15%" mb="20px">
                <Flex>
                            <Box textAlign={"left"}  p="50px" border={"1px solid grey"}>
                                    <Text fontSize={"35px"}>Plus</Text>
                                    <Container>
                                        All websites & commerce features and our lowest transaction fees for scaling businesses.
                                    </Container>
                                    <Box textAlign={"left"} position="relative" mt="5px">
                                        <Text>Starts at</Text>
                                        <Text fontSize={"15px"} as="span" position="absolute" top="25px" left="2px">₹</Text>
                                        <Heading ml="11px">23,000</Heading>
                                        <Text color="grey">/month*</Text>
                                        <Text>+5% transaction fee and Stripe processing fees*</Text>
                                        <Center>
                                        <Button  mt="30px" borderRadius={"50px"} w="200px" bg="yellow">BUY Now</Button>

                                        </Center>
                                        
                                    </Box>
                            </Box>
                            
                            <Box textAlign={"left"} p="50px" border={"1px solid grey"}>
                                    <Text fontSize={"35px"}>Core</Text>
                                    <Container>
                                    Website customization, 24/7 support, and lower transaction fees for growing businesses.
                                    </Container>
                                    <Box textAlign={"left"} position="relative" mt="5px">
                                        <Text>Starts at</Text>
                                        <Text fontSize={"15px"} as="span" position="absolute" top="25px" left="2px">₹</Text>
                                        <Heading ml="11px">833</Heading>
                                        <Text color="grey">/month*</Text>
                                        <Text>+ 1.5% transaction fee and Stripe processing fees*</Text>
                                        <Center>
                                        <Button  mt="30px" borderRadius={"50px"} w="200px" bg="yellow">BUY Now</Button>

                                        </Center>
                                        
                                    </Box>
                            </Box>
                            
                            <Box textAlign={"left"} p="50px" border={"1px solid grey"}>
                                    <Text fontSize={"35px"}>Free</Text>
                                    <Container>
                                    Everything businesses need to build a website and launch a store.
                                    </Container>
                                    <Box textAlign={"left"} position="relative" mt="5px">
                                        <Text>Starts at</Text>
                                        <Text fontSize={"15px"} as="span" position="absolute" top="25px" left="2px">₹</Text>
                                        <Heading ml="11px">0</Heading>
                                        <Text color="grey">/month*</Text>
                                        <Text>+2% transaction fee and Stripe processing fees*</Text>
                                        <Center>
                                        <Button  mt="30px" borderRadius={"50px"} w="200px" bg="yellow">Sign Up Free</Button>

                                        </Center>
                                        
                                    </Box>
                            </Box>
                </Flex>
           </Box>

           <Footer />
               
        </>
    )
}