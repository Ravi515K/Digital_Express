import { Box, Heading, Input,Flex, Checkbox,Text, Spacer, List, ListItem,Link  } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



export default function Transaction(){
    return (
        <>
             <Navbar />      
            

            <Box w="100%" h="50px" border="1px ">
                <Flex>
                    <Box  h="50px" border="1px" p="10px 100px 0px 100px" bg="grey"><Link href="/marketing">Marketing Platform</Link></Box><Spacer/>
                    <Box  h="50px" border="1px" p="10px 100px 0px 100px" bg="grey"><Link href="/websites">Websites&Ecommerce</Link></Box><Spacer/>
                    <Box  h="50px" border="1px"p="10px 100px 0px 100px" ><Link href="/transaction">Transaction Email</Link></Box>
                </Flex>
                
            </Box>
           
            <Heading mb="50px" mt="50px" fontSize={"25px"}> Transactional email plans designed for developers </Heading>

            <Box border="1px solid grey" w="50%" ml="25%" mb="20px" p="20px">
                <Text mb="50px" fontStyle={"inherit"} fontFamily="inherit" fontSize={"20px"}>Each block is a credit for 25,000 emails</Text>
                <Flex >
                    <Text>TOTAL BLOCKS</Text><Spacer/>
                    <Text>EMAILS PER MONTH</Text><Spacer/>
                    <Text>PRICE PER BLOCK</Text>
                </Flex>
                <hr style={{border:"1px solid grey",marginTop:"40px"}}/>
                <List spacing={"40px"} mt="40px">
                    <ListItem>
                        <Flex>
                        <Text>1 to 20 blocks</Text><Spacer/>
                        <Text>1 to 500k emails</Text><Spacer/>
                        <Text>$20/block</Text>
                        </Flex>
                        
                    </ListItem>
                    <ListItem>
                        <Flex>
                                <Text>21 to 40 blocks</Text><Spacer/>
                                <Text>500k to 1M emails</Text><Spacer/>
                                <Text>$18/block</Text>
                        </Flex>
                    </ListItem>
                    <ListItem>
                    <Flex>
                            <Text>41 to 80 blocks</Text><Spacer/>
                            <Text>1M to 2M emails</Text><Spacer/>
                            <Text>$16/block</Text>
                        </Flex>
                    </ListItem>
                    <ListItem>
                    <Flex>
                            <Text>81 to 120 blocks</Text><Spacer/>
                            <Text>2M to 3M emails</Text><Spacer/>
                            <Text>$14/block</Text>
                        </Flex>
                    </ListItem>
                    <ListItem>
                    <Flex>
                            <Text>121 to 160 blocks</Text><Spacer/>
                            <Text>3M to 4M emails</Text><Spacer/>
                            <Text>$12/block</Text>
                        </Flex>
                    </ListItem>
                    <ListItem>
                        <Flex>
                            <Text>161+ blocks</Text><Spacer/>
                            <Text>4M+ emails</Text><Spacer/>
                            <Text>$10/block</Text>
                        </Flex>
                       
                    </ListItem>
                </List>

            </Box>
           <Footer />
        </>
    )
}