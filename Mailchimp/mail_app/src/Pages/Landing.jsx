import { Box, Button, Stack, Image,Text, Container, Heading, VStack, ListItem, List,ListIcon,Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AspectRatio } from '@chakra-ui/react'
import {CheckIcon, CloseIcon}  from "@chakra-ui/icons";

export default function Landing(){
    return (
        <div>
            <Box boxSize="100%">
                <Stack direction={"row"} >
                        <Box boxSize={"25%"} >
                             <Box position={"relative"}>
                                <Link href="https://mailchimp.com/automations/"> 
                                    <Text position={"absolute"} top="20px" ml={"50px"}> <b>Convert With Automations</b> </Text> 
                                    <Image src="https://eep.io/images/yzco4xsimv0y/33f3mgIWbzKjIpIRJi2f5v/6bd36bba38b7f6a94d587605ab9a7d75/Desktop_Feature_Cards_1_Automations.jpeg?w=630&fm=webp&q=80"/>
                                </Link>
                            </Box>  
                            <Box bg="#cd853f" p="10px">
                                <Container p="20px">
                                 Send the right message at the right time to convert more customers.
                                </Container>
                                <Link href="https://mailchimp.com/automations/">
                                    <Button bg="#cd853f" border= "1px solid black" w="150px" borderRadius={"70px"}> 
                                        Learn More
                                    </Button>
                                </Link>
                                
                            </Box>
                        </Box>
                        <Box boxSize={"25%"}>
                            <Box position={"relative"}>
                            <Link href="https://mailchimp.com/features/content-optimizer/"> 
                             <Text position={"absolute"} top="20px" ml={"50px"}> <b>Optimize With AI and Analytics</b> </Text> 
                            <Image src="https://eep.io/images/yzco4xsimv0y/hBcOt3RZ5DOhMJD2Hi2Z2/96b28d17c45e9376731ad825b002b0ff/Desktop_Feature_Cards_2_Analytics.png?w=630&fm=webp&q=80"/>
                            </Link>
                            </Box>
                            
                            <Box bg="#daa520" p="10px">
                                <Container p="20px">
                                 Send the right message at the right time to convert more customers.
                                </Container>
                                <Link href="https://mailchimp.com/features/content-optimizer/">
                                    <Button bg="#daa520" border= "1px solid black" w="150px" borderRadius={"70px"}> 
                                        Learn More
                                    </Button>
                                </Link>
                                
                            </Box>
                        </Box>
                        <Box boxSize={"25%"}>

                            <Box position={"relative"}>
                                <Link href=""> 
                                    <Text position={"absolute"} top="20px" ml={"50px"}> <b>Target with Segmentation</b> </Text> 
                                    <Image src="https://eep.io/images/yzco4xsimv0y/5xqzo6y8Z7anw9VQXJarpj/5f91182af7bf16ecc34b487a619d0a54/Desktop_Feature_Cards_3_Segmentation.jpeg?w=630&fm=webp&q=80"/>
                                </Link>
                            </Box>
                            <Box bg="#fff0f5" p="10px">
                                <Container p="20px">
                                 Send the right message at the right time to convert more customers.
                                </Container>
                                <Link>
                                    <Button bg="#fff0f5" border= "1px solid black" w="150px" borderRadius={"70px"}> 
                                        Learn More
                                    </Button>
                                </Link>
                                
                            </Box>
                        </Box>
                        <Box boxSize={"25%"}>
                        <Box position={"relative"}>
                                <Link href=""> 
                                    <Text position={"absolute"} top="20px" ml={"80px"}> <b>Sync With INtegration</b> </Text> 
                                    <Image src="https://eep.io/images/yzco4xsimv0y/lsHRpmOI81ZcFS1Yld0Bs/1e2812587cd0f3089061bd4b513fd6d0/Desktop_Feature_Cards_4_Integrations.png?w=630&fm=webp&q=80"/>
                                </Link>
                            </Box>
                            <Box bg="#fafad2" p="10px">
                                <Container p="20px">
                                 Send the right message at the right time to convert more customers.
                                </Container>
                                <Link>
                                    <Button bg="#fafad2" border= "1px solid black" w="150px" borderRadius={"70px"}> 
                                        Learn More
                                    </Button>
                                </Link>
                                
                            </Box>
                        </Box>
                </Stack>
            </Box>
         
            <Box boxSize={"100%"} mt="20px" bg="black" p="50px">
                <Box >
                     <AspectRatio  ml="300px" mt="20px" maxW='760px' ratio={1}>
                        <iframe
                          autoPlay
                            title='naruto'
                            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                            
                        
                        />
                    </AspectRatio>
                   
                    <Container ml="300px" color="white"  maxW='2xl' centerContent>
                        <Box fontSize={"20px"}>
                            Most email marketing platforms tell you how your campaigns perform. We analyze the data from the billions of 
                            emails we send to give you personalized recommendations for improving your content, targeting, and automations.
                
                        </Box>
                    </Container>
                </Box>
            </Box>

            <Box className="Plan" boxSize={"100%"} p="100px" bg="grey.400">
                <Heading>Find the right plan</Heading>
                <Box height={"auto"} mt="50px">
                    <Stack direction="horizontal">
                        <Box boxShadow={"2xl"} width={"350px"} border={"1px solid grey"} padding="10px" >
                            <Text textAlign={"left"} fontSize={"25px"}>Premium</Text>
                            <Container >
                                <Box textAlign={"left"} color="grey.200">
                                     Our most advanced tools, unlimited contacts, and priority support; built for teams.
                                </Box>
                                <Box textAlign={"left"} position="relative" mt="5px">
                                    <Text>Starts at</Text>
                                    <Text fontSize={"15px"} as="span" position="absolute" top="25px" left="2px">₹</Text>
                                    <Heading ml="11px">23,000</Heading>
                                    <Text color="grey">/month based on 10,000 contacts*</Text>
                                </Box>
                            </Container>
                            <VStack>
                                <Box px={6} py={10} fontSize="15px">
                                    <List spacing={5}>
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
                        
                        <Box boxShadow={"2xl"} width={"350px"} border={"1px solid grey"} padding="10px" >
                            <Text textAlign={"left"} fontSize={"25px"}>Standards</Text>
                            <Container >
                                <Box textAlign={"left"} color="grey.200">
                                Sell even more with personalization, optimization tools, and enhanced automations.
                                </Box>
                                <Box textAlign={"left"} position="relative" mt="5px">
                                    <Text>Starts at</Text>
                                    <Text fontSize={"15px"} as="span" position="absolute" top="25px" left="2px">₹</Text>
                                    <Heading ml="11px">1,150</Heading>
                                    <Text color="grey">/month based on 10,000 contacts*</Text>
                                </Box>
                            </Container>
                            <VStack>
                                <Box px={6} py={10} fontSize="15px">
                                    <List spacing={5}>
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

                        <Box boxShadow={"2xl"} width={"350px"} border={"1px solid grey"} padding="10px" >
                            <Text textAlign={"left"} fontSize={"25px"}>Essential</Text>
                            <Container >
                                <Box textAlign={"left"} color="grey.200">
                                Send the right content at the right time with testing and scheduling features.
                                </Box>
                                <Box textAlign={"left"} position="relative" mt="5px">
                                    <Text>Starts at</Text>
                                    <Text fontSize={"15px"} as="span" position="absolute" top="25px" left="2px">₹</Text>
                                    <Heading ml="11px">770</Heading>
                                    <Text color="grey">/month based on 10,000 contacts*</Text>
                                </Box>
                            </Container>
                            <VStack>
                                <Box px={6} py={10} fontSize="15px">
                                    <List spacing={5}>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px"/>
                                           <Text borderBottom="1px dotted black">24/7 Email & Chat Support</Text> 
                                        </ListItem>
                                        <hr />
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px" />
                                          <Text borderBottom="1px dotted black" >Pre-built Email Templates</Text>  
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px"/>
                                            <Text borderBottom="1px dotted black" >Basic Automated Customer Journeys</Text>
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CheckIcon} mr="15px" />
                                           <Text borderBottom="1px dotted black">A/B Testing</Text> 
                                        </ListItem>
                                        <hr />
                                        <ListItem textAlign={"left"} display="flex">
                                            <ListIcon as={CloseIcon} mr="15px" />
                                          <Text  borderBottom="1px dotted black" > Predictive Segmentation</Text>  
                                            
                                        </ListItem>
                                        <hr/>
                                        <ListItem textAlign={"left"} display="flex" >
                                            <ListIcon as={CloseIcon} mr="15px"/>
                                            <Text borderBottom="1px dotted black" >Assisted Onboarding</Text>
                                            
                                        </ListItem>
                                        <hr/>
                                    </List>
                                </Box>
                            </VStack>
                        </Box>
                        
                        
                        <Box boxShadow={"xl"} width={"350px"} border={"1px solid grey"} padding="10px" >
                            <Text textAlign={"left"} fontSize={"25px"}>Free</Text>
                            <Container >
                                <Box textAlign={"left"} color="grey.200">
                                Send the right content at the right time with testing and scheduling features.
                                </Box>
                                <Box textAlign={"left"} position="relative" mt="5px">
                                    <Text>Starts at</Text>
                                    <Text fontSize={"15px"} as="span" position="absolute" top="25px" left="2px">₹</Text>
                                    <Heading ml="11px">0</Heading>
                                    <Text color="grey">/month based on 10,000 contacts*</Text>
                                </Box>
                            </Container>
                            <VStack>
                                <Box px={6} py={10} fontSize="15px">
                                    <List spacing={5}>
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
                                        <ListItem textAlign={"left"} display="flex">
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

                        


                    </Stack>
                    <Center mt="50px">
                        <Link href="">
                             <Button w="200px" h="50px" borderRadius={"50px"} bg="gold">See Plan Details</Button>
                        </Link>
                        
                    </Center>
                </Box>
            </Box>
             
        </div>
    )
}
