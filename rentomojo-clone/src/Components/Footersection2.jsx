import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaFacebook,
  FaDribbble,
} from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import FooterSectionModel from "./FooterSection.Model";
import ScrollToTop from "./ScrollToTop";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footersection2() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>RENTOMOJO</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Culture</Link>
            <Link href={"#"}>Investors</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Our Benefits</Link>
            <Link href={"#"}>Sitemap</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>INFORMATION</ListHeader>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>FAQs</Link>
            <Link href={"#"}>Documents Required</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>POLICIES</ListHeader>
            <Link href={"#"}>Shipping Policy</Link>
            <Link href={"#"}>Cancellation & Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Rental Terms & Conditions</Link>
            <Link href={"#"}>Referral Terms & Conditions </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>NEED HELP ?</ListHeader>
            <FooterSectionModel />

            <Flex flexDirection={"row"} gap="10px" padding="10px">
              <FaTelegramPlane
                size={"25px"}
                color="grey"
                // border="2px solid red"
              />
              jo@rentomojo.com
            </Flex>
            <ListHeader>DOWNLOAD APP</ListHeader>

            <Box width={"120px"} padding="-40px">
              <Flex gap="10px">
                <img
                  src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png"
                  alt=""
                  height={"70px"}
                />
                <img
                  src="https://uwswpa.org/wp-content/uploads/2017/07/apple-app-store-icon.png"
                  alt=""
                  height={"70px"}
                  border="1px solid red"
                />
              </Flex>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Flex}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022. Edunetwork Pvt. Ltd.</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"Linkedin"} href={"#"}>
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Dribble"} href={"#"}>
              <FaDribbble />
            </SocialButton>
          </Stack>
          <Stack>
            <ScrollToTop />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
