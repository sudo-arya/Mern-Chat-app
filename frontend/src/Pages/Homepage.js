import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Signin from "../components/Authentication/Signin";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxw="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={2}
        bg={"white"}
        w="100%"
        m="100px 0 10px 0"
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="dark-lg"
      >
        <Text
          fontWeight={"black"}
          fontSize="40px"
          fontFamily="Work sans"
          color="purple"
          align="center"
          m="0 0 0 0"
        >
          DG Crypto Chat App
        </Text>
      </Box>
      <Box
        bg={"white"}
        w={"100%"}
        p={2}
        borderRadius={"lg"}
        color={"black"}
        borderWidth={"1px"}
        boxShadow="dark-lg"
      >
        <Tabs isFitted variant="enclosed-colored" colorScheme="purple">
          <TabList mb="1em">
            <Tab fontSize={"lg"} fontWeight={"bold"}>
              Signin
            </Tab>
            <Tab fontSize={"lg"} fontWeight={"bold"}>
              Signup
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Signin />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
