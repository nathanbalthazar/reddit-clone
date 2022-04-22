import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  Text,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Icon,
  Flex,
  MenuDivider,
} from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { auth } from "../../../firebase/clientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
    const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="8px 6px"
        borderRadius={4}
        _hover={{ outline: "1px solid", oulineColor: "gray.200" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Icon
                  as={FaRedditSquare}
                  fontSize={24}
                  mr={1}
                  color="gray.300"
                />
                < Flex
                    direction='column'
                    display={{base: 'none', lg: 'flex'}}
                    fontSize='8pt'
                    align='flex-start'
                    mr={8}
                >
                    <Text fontWeight={700}>
                        {user?.displayName || user.email?.split('@')[0]}
                    </Text>
                    <Flex>
                        <Icon as={IoSparkles} color='brand.100' mr={1} />
                        <Text color='gray.400'>1 karma</Text>
                    </Flex>
                </Flex>
              </>
            ) : (
              <Icon as={VscAccount} fontSize={24} color="gray.200" mr={1} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
            >
              <Flex align="center">
                <Icon as={CgProfile} fontSize={20} mr={2} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => signOut(auth)}
            >
              <Flex align="center">
                <Icon as={MdOutlineLogin} fontSize={20} mr={2} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => setAuthModalState({ open: true, view: 'login' })}
            >
              <Flex align="center">
                <Icon as={MdOutlineLogin} fontSize={20} mr={2} />
                Log In / Sign Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
