import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
  Text,
  Tooltip,
  Avatar,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChatState } from "../../Context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useHistory } from "react-router-dom";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [LoadingChat, setLoadingChat] = useState();

  const { user } = ChatState();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="4px 8px 4px 8px"
        borderWidth="2px"
      >
        <Tooltip label="Search users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i class="fas fa-search"></i>
            <Text display={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text
          fontSize="2xl"
          //   fontFamily="Work-sans"
          fontWeight="bold"
          color="purple"
          colorScheme="purple"
        >
          DG Crypto Chat App
        </Text>

        <div>
          <Menu>
            <Tooltip label="Notifications" hasArrow placement="bottom-end">
              <MenuButton p={1} fontSize="lg" m={1} variant="ghost">
                <i class="fas fa-bell"></i>
              </MenuButton>
              {/* <MenuList></MenuList> */}
            </Tooltip>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon variant="ghost">
              <i class="fas fa-caret-down"></i>&nbsp;&nbsp;&nbsp;
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;
