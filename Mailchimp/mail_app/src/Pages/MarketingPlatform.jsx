import { Box,Text, Flex, Spacer, Center, Select,Option, Button,
    ListItem, Heading,VStack,Container,List,ListIcon,
     Link 
} from "@chakra-ui/react";
import {CheckIcon, CloseIcon}  from "@chakra-ui/icons";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



export default function MarketingPlatform(){
    return (
        <>
          <Box >
                 <Navbar />
          </Box>
          
          <Box w="100%" h="50px" border="1px ">
                <Flex>
                    <Box  h="50px" border="1px" p="10px 100px 0px 100px" ><Link href="/marketing">Marketing Platform</Link></Box><Spacer/>
                    <Box  h="50px" border="1px" p="10px 100px 0px 100px" bg="grey"><Link href="/websites">Websites&Ecommerce</Link></Box><Spacer/>
                    <Box  h="50px" border="1px"p="10px 100px 0px 100px" bg="grey" ><Link href="/transaction">Transaction Email</Link></Box>
                </Flex>
                
            </Box> 
           
            <Box mt="50px" >
                <Center>
                    <Flex  w="500px" h="40px" borderBlock={"1px solid black"} borderInline="1px solid black" >
                            <Text borderRight={"1px solid black"}  mt="5px" w="300px">How many contacts do you have?</Text><Spacer/>
                            <Select w="100px" border={"1px solid black"}>
                                <option value="500">500</option>
                                <option value="1500">1500</option>
                                <option value="2500">2500</option>
                                <option value="5000">5000</option>
                                <option value="10000">10000</option>
                                <option value="15000">15,000</option>
                                <option value="20000">20,000</option>
                                <option value="25000">25,000</option>
                                <option value="30,000">30,000</option>
                                <option value="40,000">40,000</option>
                                <option value="50,000">50,000</option>
                                <option value="75,000">75,000</option>
                                <option value="500">1,00,000</option>
                                <option value="130,000">130,000</option>
                                <option value="500">15,000</option>
                                <option value="500">200,000</option>
                                <option value="250,000">250,000</option>
                            </Select>
                    </Flex>
                </Center>
                
            </Box>
        
        
        
            <Box ml="10%" mr="10%" mt="50px" mb="20px">
                <Flex>
                    <Box id="1" boxShadow={"2xl"} width={"350px"} border={"1px solid grey"} padding="10px" >
                            <Text textAlign={"left"} fontSize={"25px"}>Premium</Text>
                            <Container >
                                <Box textAlign={"left"} color="grey.200">
                                     Our most advanced tools, unlimited contacts, and priority support; built for teams.
                                </Box>
                                <Box textAlign={"left"} position="relative" mt="5px">
                                    <Text>Starts at</Text>
                                    <Text fontSize={"15px"} as="span" position="absolute" top="25px" left="2px">₹</Text>
                                    <Heading ml="11px">23,000</Heading>
                                    <Text color="grey">/month*</Text>
                                    
                                    <Button ml="50px" mt="30px" borderRadius={"50px"} w="150px" bg="yellow"><Link href="/signup">BUY</Link></Button>
                                    
                                </Box>
                            </Container>
                            <VStack>
                                <Box px={6} py={10} fontSize="15px">
                                    <List spacing={5}>
                                        <ListItem  borderTop="1px" borderBottom={"1px"} p="20px">
                                            <Flex mb="10px">
                                                <Text borderBottom="1px dotted black">Monthly Email Sends</Text><Spacer/>
                                                <Text>150,000</Text>
                                            </Flex>
                                            <Flex>
                                                <Text  borderBottom="1px dotted black">Users</Text><Spacer/>
                                                <Text>Unlimited</Text>
                                            </Flex>
                                            
                                        </ListItem>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px"/>
                                           <Text borderBottom="1px dotted black">Phone & Priority Support</Text> 
                                        </ListItem>
                                        <hr />
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px" />
                                          <Text borderBottom="1px dotted black" > Custom-Coded and Pre-built Email Templates</Text>  
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px"/>
                                            <Text borderBottom="1px dotted black" >Multivariate and A/B Testing</Text>
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px"/>
                                           <Text borderBottom="1px dotted black">Enhanced Automated Customer Journeys</Text> 
                                        </ListItem>
                                        <hr />
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px" />
                                          <Text  borderBottom="1px dotted black" > Predictive Segmentation</Text>  
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px"/>
                                            <Text borderBottom="1px dotted black" >Assisted Onboarding</Text>
                                            
                                        </ListItem>
                                        <hr/>
                                    </List>
                                </Box>
                            </VStack>
                     </Box>
                    
                     <Box id="2" boxShadow={"2xl"} width={"350px"} border={"1px solid grey"} padding="10px" >
                            <Text textAlign={"left"} fontSize={"25px"}>Standards</Text>
                            <Container >
                                <Box textAlign={"left"} color="grey.200">
                                Sell even more with personalization, optimization tools, and enhanced automations.
                                </Box>
                                <Box textAlign={"left"} position="relative" mt="5px">
                                    <Text>Starts at</Text>
                                    <Text fontSize={"15px"} as="span" position="absolute" top="25px" left="2px">₹</Text>
                                    <Heading ml="11px">1150</Heading>
                                    <Text color="grey">/month*</Text>
                                    
                                    <Button ml="50px" mt="30px" borderRadius={"50px"} w="150px" bg="yellow"><Link href="/signup">BUY</Link></Button>
                                    
                                </Box>
                            </Container>
                            <VStack>
                                <Box px={6} py={10} fontSize="15px">
                                
                                <List spacing={5}>
                                        <ListItem  borderTop="1px" borderBottom={"1px"} p="20px">
                                            <Flex mb="10px">
                                                <Text borderBottom="1px dotted black">Monthly Email Sends</Text><Spacer/>
                                                <Text>6,000</Text>
                                            </Flex>
                                            <Flex>
                                                <Text  borderBottom="1px dotted black">Users</Text><Spacer/>
                                                <Text>5 seats</Text>
                                            </Flex>
                                            
                                        </ListItem>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px"/>
                                           <Text borderBottom="1px dotted black">24/7 Email & Chat Support</Text> 
                                        </ListItem>
                                        <hr />
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px" />
                                          <Text borderBottom="1px dotted black" > Custom-Coded and Pre-built Email Templates</Text>  
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px"/>
                                            <Text borderBottom="1px dotted black" >Custom-Coded and Pre-built Email Templates</Text>
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px" />
                                           <Text borderBottom="1px dotted black">Enhanced Automated Customer Journeys</Text> 
                                        </ListItem>
                                        <hr />
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px" />
                                          <Text  borderBottom="1px dotted black" > Predictive Segmentation</Text>  
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CloseIcon} mr="15px"/>
                                            <Text borderBottom="1px dotted black" >Assisted Onboarding</Text>
                                            
                                        </ListItem>
                                        <hr/>
                                    </List>
                                </Box>
                            </VStack>
                     </Box>
                    
                     <Box id="3" boxShadow={"2xl"} width={"350px"} border={"1px solid grey"} padding="10px" >
                            <Text textAlign={"left"} fontSize={"25px"}>Essential</Text>
                            <Container >
                                <Box textAlign={"left"} color="grey.200">
                                Send the right content at the right time with testing and scheduling features.
                                </Box>
                                <Box textAlign={"left"} position="relative" mt="5px">
                                    <Text>Starts at</Text>
                                    <Text fontSize={"15px"} as="span" position="absolute" top="25px" left="2px">₹</Text>
                                    <Heading ml="11px">770</Heading>
                                    <Text color="grey">/month*</Text>
                                    
                                    <Button ml="50px" mt="30px" borderRadius={"50px"} w="150px" bg="yellow"><Link href="/signup">BUY</Link></Button>
                                    
                                </Box>
                            </Container>
                            <VStack>
                                <Box px={6} py={10} fontSize="15px">
                                
                                <List spacing={5}>
                                        <ListItem  borderTop="1px" borderBottom={"1px"} p="20px" mt="20px">
                                            <Flex mb="10px">
                                                <Text borderBottom="1px dotted black">Monthly Email Sends</Text><Spacer/>
                                                <Text>5,000</Text>
                                            </Flex>
                                            <Flex>
                                                <Text  borderBottom="1px dotted black">Users</Text><Spacer/>
                                                <Text>3 seats</Text>
                                            </Flex>
                                            
                                        </ListItem>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px"/>
                                           <Text borderBottom="1px dotted black">24/7 Email & Chat Support</Text> 
                                        </ListItem>
                                        <hr />
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px" />
                                          <Text borderBottom="1px dotted black" > Custom-Coded and Pre-built Email Templates</Text>  
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px"/>
                                            <Text borderBottom="1px dotted black" >Custom-Coded and Pre-built Email Templates</Text>
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px" />
                                           <Text borderBottom="1px dotted black">Enhanced Automated Customer Journeys</Text> 
                                        </ListItem>
                                        <hr />
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px" />
                                          <Text  borderBottom="1px dotted black" > Predictive Segmentation</Text>  
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CloseIcon} mr="15px"/>
                                            <Text borderBottom="1px dotted black" >Assisted Onboarding</Text>
                                            
                                        </ListItem>
                                        <hr/>
                                    </List>
                                </Box>
                            </VStack>
                     </Box>
                    
                     <Box id="4" boxShadow={"2xl"} width={"350px"} border={"1px solid grey"} padding="10px" >
                            <Text textAlign={"left"} fontSize={"25px"}>Free</Text>
                            <Container >
                                <Box textAlign={"left"} color="grey.200">
                                Easily create email campaigns and learn more about your customers
                                </Box>
                                <Box textAlign={"left"} position="relative" mt="5px">
                                    <Text>Starts at</Text>
                                    <Text fontSize={"15px"} as="span" position="absolute" top="25px" left="2px">₹</Text>
                                    <Heading ml="11px">0</Heading>
                                    <Text color="grey">/month*</Text>
                                    
                                    <Button ml="50px" mt="30px" borderRadius={"50px"} w="150px" bg="yellow"><Link href="/signup">Sign Up Free</Link></Button>
                                    
                                </Box>
                            </Container>
                            <VStack>
                                <Box px={6} py={10} fontSize="15px">
                                
                                <List spacing={5}>
                                        <ListItem  borderTop="1px" borderBottom={"1px"} p="20px">
                                            <Flex mb="10px">
                                                <Text borderBottom="1px dotted black">Monthly Email Sends</Text><Spacer/>
                                                <Text>2500</Text>
                                            </Flex>
                                            <Flex>
                                                <Text  borderBottom="1px dotted black">Users</Text><Spacer/>
                                                <Text>1 seats</Text>
                                            </Flex>
                                            
                                        </ListItem>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px"/>
                                           <Text borderBottom="1px dotted black">Email support for first 30 days</Text> 
                                        </ListItem>
                                        <hr />
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px" />
                                          <Text borderBottom="1px dotted black" >Pre-built Email Templates</Text>  
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CloseIcon} mr="15px"/>
                                            <Text borderBottom="1px dotted black" >Basic Automated Customer Journeys</Text>
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CloseIcon} mr="15px" />
                                           <Text borderBottom="1px dotted black">A/B Testing</Text> 
                                        </ListItem>
                                        <hr />
                                        <ListItem  textAlign={"left"} display="flex">
                                            <ListIcon as={CloseIcon} mr="15px" />
                                          <Text  borderBottom="1px dotted black" > Predictive Segmentation</Text>  
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CloseIcon} mr="15px"/>
                                            <Text borderBottom="1px dotted black" >Assisted Onboarding</Text>
                                            
                                        </ListItem>
                                        <hr/>
                                    </List>
                                </Box>
                            </VStack>
                     </Box>
                </Flex>
            </Box>

            <Footer  />

        </>
    )
}