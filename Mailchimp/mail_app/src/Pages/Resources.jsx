


import { Box,Flex,Spacer,Text, useDisclosure,Button, Heading,Link } from "@chakra-ui/react";
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
 export default function Resources() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
       
        <Heading cursor={"pointer"} fontSize={"20px"} colorScheme='blue' onClick={onOpen}>
          Resources
        </Heading>
        <Drawer placement={"left"} size="md" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <Flex>
                <DrawerHeader borderBottomWidth='1px'>Resources</DrawerHeader>   <Spacer/>
                <Button onClick={onClose} mt="10px"><CloseIcon/></Button>
            </Flex>
            
            <DrawerBody>
            <Box>
                <Box boxSize={"600px"} h="auto" boxShadow={"2xl"}  p="50px" >
                  
                    <Text fontSize={"15px"} textAlign="left" mb="30px" color={"GrayText"}>LEARN ---</Text>
                    <Box fontSize={"25px"} textAlign="left" mb="30px">
                        <Text mb="30px" ><Link href={"https://mailchimp.com/en-gb/resources/mailchimp-101/"}>Mailchimp 101</Link></Text>
                        <Text mb="30px"><Link href={"https://mailchimp.com/en-gb/help/"}>Help Center</Link></Text>
                        <Text mb="30px"><Link href={"https://mailchimp.com/en-gb/resources/"}>Marketing Library</Link></Text>

                    </Box>
                    <hr style={{height:"5px"} }/>
                    <Text fontSize={"15px"} textAlign="left" mb="30px" color={"GrayText"} mt="30px">Community</Text>
                    <Box fontSize={"25px"} textAlign="left">
                        <Text mb="30px" ><Link href={"https://mailchimp.com/en-gb/audience/"}>For Freelancers & Agencies</Link></Text>
                        <Text mb="30px"><Link href={"https://mailchimp.com/en-gb/create-content/"}>For Developers</Link></Text>
                        <Text mb="30px" ><Link href={"https://mailchimp.com/en-gb/experts/"}>Hire A trusted Partner</Link></Text>
                    </Box>
                </Box>
            </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }


