import { Box, CloseIcon } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="purple"
      color="white"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      {admin === user._id && <span> (Admin)</span>}
      <i class="fas fa-times" color="white"></i>
    </Box>
  );
};

export default UserBadgeItem;
