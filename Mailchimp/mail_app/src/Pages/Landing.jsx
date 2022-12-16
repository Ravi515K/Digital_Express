import { Box, Button, Stack, Image,Text, Container, Heading, VStack,HStack,Flex, ListItem, List,ListIcon,Center, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AspectRatio } from '@chakra-ui/react'
import {CheckIcon, CloseIcon}  from "@chakra-ui/icons";
import Navbar from "../Components/Navbar";

export default function Landing(){
    return (
        <div>
            <Navbar />
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

                        


                    </Stack>
                    <Center mt="50px">
                        <Link href="">
                             <Button  w="200px" h="50px" borderRadius={"50px"} bg="gold">See Plan Details</Button>
                        </Link>
                        
                    </Center>
                </Box>
            </Box>

            <Box mb="50px">
                <Flex direction="row">
                    <Box boxSize={"50%"} textAlign={"left"} p="50px" bg="#e7b75f" >
                        <Container h="600px">
                        <Heading mb="20px">Keep customers ready to buy with engaging content</Heading>

                            <Text mb="10px">Content Optimizer</Text>
                            <Box mb="20px">
                                Learn how your emails compare to the top-performing campaigns
                                in your industry and get data-driven suggestions for improving 
                                your copy, imagery, and layout.
                            </Box >
                            <hr />
                            <Text mt="20px" mb="10px">Creative Assistant</Text>
                            <Box>
                                Our Creative Assistant will help you stand out by using AI to create custom designs for your brand.
                            </Box>
                        </Container>
                    </Box>
                    <Box  boxSize="50%">
                        <Image h="700px" w="full" src="https://eep.io/images/yzco4xsimv0y/33f3mgIWbzKjIpIRJi2f5v/6bd36bba38b7f6a94d587605ab9a7d75/Desktop_Feature_Cards_1_Automations.jpeg?w=1260&fm=webp&q=80"></Image>
                    </Box>
                </Flex>
            </Box>


            <Box id="last" p="50px">
                <Box textAlign={"left"} w="600px" mb="20px" fontSize={"30px"}>
                    <Heading> Bring in more data, drive more growth with our integrations</Heading>
                </Box>
                 <Box >
                       <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                            <Link href="https://mailchimp.com/en-gb/integrations/canva/">
                                <Box display={"flex"} padding="20px" >
                                    <Image w="120px" src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=webp&q=80" />
                                    <Box textAlign={"left"} ml="20px">
                                        <Heading fontSize={"20px"}>Canva</Heading>
                                        <Text fontSize={"15px"} color="GrayText">Create compelling visuals from your marketing</Text>
                                    </Box>
                                </Box>
                            </Link>

                            <Link href="https://mailchimp.com/en-gb/integrations/mailchimp-for-salesforce/">
                                <Box display={"flex"} padding="20px" >
                                    <Image w="120px" src="https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=80" />
                                    <Box textAlign={"left"} ml="20px">
                                        <Heading fontSize={"20px"}>MailChimp for salesforce</Heading>
                                        <Text fontSize={"15px"} color="GrayText">sync your mailchimp subscribers and salesforce leads across platforms </Text>
                                    </Box>
                                </Box>
                            </Link>

                            <Link href="https://mailchimp.com/en-gb/integrations/instagram-content-blocks/">
                                <Box display={"flex"} padding="20px" >
                                    <Image w="120px" src="https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=80" />
                                    <Box textAlign={"left"} ml="20px">
                                        <Heading fontSize={"20px"}>Instagram</Heading>
                                        <Text fontSize={"15px"} color="GrayText">Pramote and share your Instagram posts in email campaigns </Text>
                                    </Box>
                                </Box>
                            </Link>

                            <Link href="https://mailchimp.com/en-gb/integrations/shopify/">
                                <Box display={"flex"} padding="20px" >
                                    <Image w="120px" src="https://eep.io/images/yzco4xsimv0y/44dW9Z4hibyDYi0qggfets/b01884985e996ffb5dc133556b92bb7a/Shopify__1_.jpg?w=196&fm=webp&q=80" />
                                    <Box textAlign={"left"} ml="20px">
                                        <Heading fontSize={"20px"}>Shopify</Heading>
                                        <Text fontSize={"15px"} color="GrayText">Sync shopify customers,Products and Purchase to mailchomp </Text>
                                    </Box>
                                </Box>
                            </Link>

                            <Link href="https://mailchimp.com/en-gb/integrations/google-analytics/">
                                <Box display={"flex"} padding="20px" >
                                    <Image w="120px" src="https://eep.io/images/yzco4xsimv0y/7mpZ7UZrdzk2BmWX1OnRvb/5e610ecd21eeb25d0b82b098ce424e34/Google_Analytics2.jpg?w=196&fm=webp&q=80" />
                                    <Box textAlign={"left"} ml="20px">
                                        <Heading fontSize={"20px"}>Google Anaytics</Heading>
                                        <Text fontSize={"15px"} color="GrayText">Unlock powerful insights with campaign, websites, or landing page data </Text>
                                    </Box>
                                </Box>
                            </Link>

                            <Link href="https://mailchimp.com/en-gb/integrations/woocommerce/">
                                <Box display={"flex"} padding="20px" >
                                    <Image w="120px" src="https://eep.io/images/yzco4xsimv0y/2uruOq31Y1FKdghFWn5zMg/8a35f3f9e463ba34038f3c3f16ccb635/WooCommerce.jpg?w=196&fm=webp&q=80" />
                                    <Box textAlign={"left"} ml="20px">
                                        <Heading fontSize={"20px"}>WooCommerce</Heading>
                                        <Text fontSize={"15px"} color="GrayText">Power your Ecommerce store with smart </Text>
                                    </Box>
                                </Box>
                            </Link>

                            <Link href="https://mailchimp.com/en-gb/integrations/quickbooksonline/">
                                <Box display={"flex"} padding="20px" >
                                    <Image w="120px" src="https://eep.io/images/yzco4xsimv0y/uZVnrVt3DO1G4Ec5G4pvs/e6c9d3c2613827f7dd238f1c5e0b02d9/Quickbooks.jpg?w=196&fm=webp&q=80" />
                                    <Box textAlign={"left"} ml="20px">
                                        <Heading fontSize={"20px"}>Quickbooks online</Heading>
                                        <Text fontSize={"15px"} color="GrayText">Bring together your marketing tools and invoice data </Text>
                                    </Box>
                                </Box>
                            </Link>

                            <Link href="https://mailchimp.com/en-gb/integrations/squarespace-commerce/">
                                <Box display={"flex"} padding="20px" >
                                    <Image w="120px" src="https://eep.io/images/yzco4xsimv0y/2klSrOoLZKmLuGKZjKT9o3/ca400f60c2f3673f3ab9b52f4d03360d/Squarespace.jpg?w=196&fm=webp&q=80" />
                                    <Box textAlign={"left"} ml="20px">
                                        <Heading fontSize={"20px"}>Squarespace Commerce</Heading>
                                        <Text fontSize={"15px"} color="GrayText">Bring together your marketing tools and invoice data </Text>
                                    </Box>
                                </Box>
                            </Link>

                            <Link href="https://mailchimp.com/en-gb/integrations/zapier/">
                                <Box display={"flex"} padding="20px" >
                                    <Image w="120px" src="https://eep.io/images/yzco4xsimv0y/26deBkGp3A5Pj7suZ9oV7V/858e8a4603707166988a3282bca7e29b/Zapier.jpg?w=196&fm=webp&q=80" />
                                    <Box textAlign={"left"} ml="20px">
                                        <Heading fontSize={"20px"}>Campaire</Heading>
                                        <Text fontSize={"15px"} color="GrayText"> Automatic pass the data between web services without a single line code </Text>
                                    </Box>
                                </Box>
                            </Link>

                       </Grid>
                </Box>
            </Box>
             
        </div>
    )
}
