import { Box, Button, Stack, Image,Text, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        </div>
    )
}