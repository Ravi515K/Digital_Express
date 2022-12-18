import { Box,Flex,Spacer,Text, useDisclosure,Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {CloseIcon} from "@chakra-ui/icons"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
//import './Product.css'
 export default function Products() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
       
        <Heading cursor={"pointer"} fontSize={"20px"} colorScheme='blue' onClick={onOpen}>
          Products
        </Heading>
        <Drawer placement={"left"} size="md" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <Flex>
                <DrawerHeader borderBottomWidth='1px'>Products</DrawerHeader>   <Spacer/>
                <Button onClick={onClose} mt="10px"><CloseIcon/></Button>
            </Flex>
            
            <DrawerBody>
                <Box boxSize={"600px"} h="auto" boxShadow={"2xl"}  p="50px" >
                    <Box mb="50px">
                        <Flex fontSize={"18px"}>
                        <Text > Products</Text>
                        <Spacer />
                        <Text>Resources</Text><Spacer />
                        <Text>Inspiration</Text><Spacer />
                        <Text>Pricing</Text>
                        </Flex>
                    </Box>
                    
                    <Text fontSize={"15px"} textAlign="left" mb="30px" color={"GrayText"}>WE'LL HELP YOU ---</Text>
                    
                    <Box fontSize={"25px"} textAlign="left" mb="30px">
                        <Text mb="30px" ><Link to={"https://mailchimp.com/en-gb/get-your-business-online/"}>Get Your Business Online</Link></Text>
                        <Text mb="30px"><Link to={"https://mailchimp.com/en-gb/marketing-platform/"}>Market Your Business</Link></Text>
                    </Box>
                   
                    <hr style={{height:"5px"} }/>
                    
                    <Text fontSize={"15px"} textAlign="left" mb="30px" color={"GrayText"} mt="30px">PLATFORM FEATURES  ---</Text>
                    
                    <Box fontSize={"25px"} textAlign="left">
                        <Text mb="30px" ><Link to={"https://mailchimp.com/en-gb/audience/"}>Audience Management</Link></Text>
                        <Text mb="30px"><Link to={"https://mailchimp.com/en-gb/create-content/"}>Creative Tools</Link></Text>
                        <Text mb="30px" ><Link to={"https://mailchimp.com/en-gb/automations/"}>Marketing Automation</Link></Text>
                        <Text mb="30px"><Link to={"https://mailchimp.com/en-gb/insights/"}>Insights & Analytics</Link></Text>
                    </Box>
                
                </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

