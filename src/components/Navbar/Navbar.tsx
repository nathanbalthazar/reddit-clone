import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" alt="reddit logo" height="30px" />
        <Image
          src="/images/redditText.svg"
          alt="reddit logo"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
    <SearchInput />
    </Flex>
    // <Directory />
    // <RightContent />
  );
};
export default Navbar;
