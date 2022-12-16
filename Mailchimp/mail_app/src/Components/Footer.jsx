import { Box, Heading, Text,Flex, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <Box bg="#EFEEEA">
            <Box p="100px">
                <Flex >
                    <Box className="box" textAlign={"left"} >
                        <Heading fontSize={"20px"} mb="30px">Products</Heading>
                        <Text borderBottom={"1px solid black"} mt="10px"> <Link href="https://mailchimp.com/en-gb/why-mailchimp/"> Why MailChimp</Link> </Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link href="https://mailchimp.com/en-gb/whats-new/">Product Updates</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link>Email Marketing</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link>Websites</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link>Transactional Email</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link>How We Compare</Link> </Text>
                        <Text borderBottom={"1px solid black"} mt="10px"> <Link>GDPR Compliance</Link> </Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link>curity</Link> </Text>
                    </Box>
                        <Spacer/>
                    <Box className="box" textAlign={"left"} >
                        <Heading fontSize={"20px"} mb="30px">Resources</Heading>
                        <Text borderBottom={"1px solid black"} mt="10px"> <Link href="https://mailchimp.com/en-gb/why-mailchimp/"> Marketing Library</Link> </Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link href="https://mailchimp.com/en-gb/whats-new/">Free Marketing Tools</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link>Marketing Glossary</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link>Integrations Directory</Link></Text>
                    </Box>
                    <Spacer/>
                    <Box className="box" textAlign={"left"} >
                        <Heading fontSize={"20px"} mb="30px">Community</Heading>
                        <Text borderBottom={"1px solid black"} mt="10px"> <Link href="https://mailchimp.com/en-gb/why-mailchimp/"> Agencies & Freelancers</Link> </Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link href="https://mailchimp.com/en-gb/whats-new/">Developers</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link>Events</Link></Text>
                    </Box>
                    <Spacer/>
                    <Box className="box" textAlign={"left"} >
                        <Heading fontSize={"20px"} mb="30px">Company</Heading>
                        <Text borderBottom={"1px solid black"} mt="10px"> <Link href="https://mailchimp.com/en-gb/why-mailchimp/"> Our Story</Link> </Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link href="https://mailchimp.com/en-gb/whats-new/">Newsroom</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link>Give Where You Live</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link>Careers</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link>Accessibility</Link></Text>
                    </Box>
                    <Spacer/>
                    <Box className="box" textAlign={"left"} >
                        <Heading fontSize={"20px"} mb="30px">Help</Heading>
                        <Text borderBottom={"1px solid black"} mt="10px"> <Link href="https://mailchimp.com/en-gb/contact/"> Contact Us</Link> </Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link href="https://mailchimp.com/en-gb/experts/">Hire an Expert</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link href="https://mailchimp.com/en-gb/help/">Help Center</Link></Text>
                        <Text borderBottom={"1px solid black"} mt="10px"><Link href="https://mailchimp.com/contact/?primaryTopic=prospective">Talk to Sales</Link></Text>
                    </Box>

                </Flex>
            </Box>  
        </Box>
    )
}