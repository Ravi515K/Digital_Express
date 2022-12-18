
import { Box,Flex,Spacer,Text, useDisclosure,Button, Heading , Image } from "@chakra-ui/react";
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
 export default function Inspiration() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
       
        <Heading cursor={"pointer"} fontSize={"20px"} colorScheme='blue' onClick={onOpen}>
          Inspiration
        </Heading>
        <Drawer placement={"left"} size="md" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <Flex>
                <DrawerHeader borderBottomWidth='1px'>Inspiration</DrawerHeader>   <Spacer/>
                <Button onClick={onClose} mt="10px"><CloseIcon/></Button>
            </Flex>
            
            <DrawerBody>
                <Box>
                    <Box boxSize={"600px"} h="auto"  p="50px" boxShadow={"2xl"} >
                        <Box mb="50px">
                            <Flex fontSize={"18px"}>
                            <Text > Products</Text>
                            <Spacer />
                            <Text>Resources</Text><Spacer />
                            <Text>Inspiration</Text><Spacer />
                            <Text>Pricing</Text>
                            </Flex>
                        </Box>
                        <Image mb="30px" src="https://eep.io/images/yzco4xsimv0y/MGifxiLMDNEBfuw4CfE2z/d83e5d33c23840148e6f1c9669d11a34/MCP.svg?w=520&fm=webp&q=80"/>
                        <Box fontSize={"25px"} textAlign="left" mb="30px">
                            <Text mb="30px" ><Link to={"https://mailchimp.com/presents/"}>Mailchimp 101</Link></Text>
                            <Text mb="30px"><Link to={"https://mailchimp.com/presents/"}>Help Center</Link></Text>
                            <Text mb="30px"><Link to={"https://mailchimp.com/presents/"}>Marketing Library</Link></Text>

                        </Box>
                        <hr style={{height:"5px"} }/>
                        <Image mt="30px" mb="30px" src="https://eep.io/images/yzco4xsimv0y/6dAj3Qwts7baFYveSjoNtu/d2f0f010176f132356c978fa96073835/Courier.svg?w=520&fm=webp&q=80" />
                        <Box fontSize={"25px"} textAlign="left">
                            <Text mb="30px" ><Link to={"https://mailchimp.com/courier/workshop/"}>For Freelancers & Agencies</Link></Text>
                            <Text mb="30px"><Link to={"https://mailchimp.com/courier/briefings/"}>For Developers</Link></Text>
                            <Text mb="30px" ><Link to={"https://mailchimp.com/courier/life/"}>Hire A trusted Partner</Link></Text>
                        </Box>
                    </Box>
                </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

