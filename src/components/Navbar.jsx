import {
  Spacer,
  HStack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useToast,
  AvatarBadge,
  Avatar
} from "@chakra-ui/react";
import {UnlockIcon} from '@chakra-ui/icons';

function Navbar() {

  const toast = useToast()

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">Task Management</Heading>

      <Spacer />

      <HStack spacing='20px'>
        <Avatar name="mario" src='/img/mario.pmg'>
          <AvatarBadge width='1.3rem' bg="teal.500">
            <Text fontSize='xs' color='white'>3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="red" onClick={() => toast({
          title:'Logged out',
          description: 'Successfully logged out',
          duration: 10000,
          isClosable: true,
          position: 'top',
          status: 'success',
          icon: <UnlockIcon />
        })}>Logout</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
