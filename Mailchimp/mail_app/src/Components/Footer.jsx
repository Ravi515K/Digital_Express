import { Box, Heading, Text,Flex, Spacer, Container,Button,Image,Select, Link } from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"
export default function Footer(){
    return (
        <Box bgColor="#E7B75F"  h="900px" p="80px">
            <Box  mb="120px">
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
                    <Spacer/>
                    <Box w="250px" h="150px" mb="20px">
                        <Box>
                        <Text mb="30px">
                            <Image src="https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&fm=webp&q=80" />
                           
                        </Text>
                        <Container textAlign={"left"} mb="20px">
                                Films, podcasts, and original series that celebrate the entrepreneurial spirit.
                        </Container>
                        <Link href="https://mailchimp.com/presents/">
                            <Button bg="gold" borderRadius={"100px"}>Check it out <ArrowForwardIcon ml="10px"/></Button>
                         </Link>
                        </Box>
                        <Box mt="30px" w="260px">
                            <Text>
                                    <Image w="300px" src="https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?w=260&fm=webp&q=80" />
                            </Text>
                            <Container textAlign={"left"} mb="20px">
                                Expert insights, industry trends, and inspiring stories that help you live and work on your own terms.
                            </Container>
                            <Link href="https://mailchimp.com/courier/">
                                 <Button bg="gold" borderRadius={"100px"}>Learn more <ArrowForwardIcon ml="10px"/></Button>
                            </Link>
                        </Box>
                    </Box>  
                </Flex>
            </Box>  
            <hr />
            <Box mt="20px">
                <Flex >
                    <Box >
                        <Flex>
                            <Image mr="10px" src="https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&fm=webp&q=80" />
                            <Image src="https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&fm=webp&q=80" />

                        </Flex>
                    </Box>
                    <Box ml="80px">
                        <Flex mt="13px" gap="15px">
                            <Image src="https://eep.io/images/yzco4xsimv0y/5daYAeMRSgIUUiSquGwsgI/1904e3f818575ec9625fa15dab193243/icon-facebook.svg?w=320&fm=webp&q=80" />
                            <Image src="https://eep.io/images/yzco4xsimv0y/3VjJhbqftKuok6gqYuUQKy/328d56c5d13ad50b9679b11e716bb218/icon-twitter.svg?w=320&fm=webp&q=80" />
                            <Image src="https://eep.io/images/yzco4xsimv0y/RlNw7Xkw8uKYAUoYU4aQw/ff3eada8736da9e63fbd9f929c6a677c/icon-instagram.svg?w=320&fm=webp&q=80" />
                            <Image src="https://eep.io/images/yzco4xsimv0y/n5saFR4miW4U4ygUIQo0A/8f9c60cb133b80fda2fe9bdb825b4a5f/icon-linkedin.svg?w=320&fm=webp&q=80" />
                            <Image src="https://eep.io/images/yzco4xsimv0y/2z1ra9BrgQewIqMQckMasg/58e3e8ec04acd60f0642f89dfbd71218/icon-youtube.svg?w=320&fm=webp&q=80" />
                            <Image src="https://eep.io/images/yzco4xsimv0y/7nawBEArBKpxRukK66OZtN/7bcc76998f783f3953b86214bfe9aa43/pinterest-logo.svg?w=320&fm=webp&q=80" />
                        </Flex>
                    </Box>
                    <Box ml="80px" >
                        <Select border={"1px solid black"} mb="30px">
                            <option value="English">English</option>
                            <option value="English">Espanol</option>
                            <option value="English">Francase</option>
                            <option value="English">Portuguse</option>
                            <option value="English">Dutsch</option>
                            <option value="English">Italiano</option>
                        </Select>
                        <Box textAlign={"left"} boxSize="250px" fontSize={"10px"}>
                            This page is now available in other languages.English
                            ©2001-2022 All Rights Reserved. Mailchimp® is a
                            registered trademark of The Rocket Science Group.
                            Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is 
                            a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc. 
                            <Link> <b>Privacy</b>  </Link> |  
                            <Link><b>Terms </b> |</Link>
                            <Link><b>Cookie Preferences</b> </Link>
                              
                        </Box>
                    </Box>
                </Flex>
                
                    

            </Box>
        </Box>
    )
}
