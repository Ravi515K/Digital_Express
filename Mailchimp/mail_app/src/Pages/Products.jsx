import { Box,Flex,Spacer,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
//import './Product.css'

export default function Products(){
    return (
        <Box boxSize={"600px"} border="1px solid red" p="50px" >
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
    )
}