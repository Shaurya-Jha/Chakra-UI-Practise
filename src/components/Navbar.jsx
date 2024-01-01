import {
  Spacer,
  HStack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useToast
} from "@chakra-ui/react";
import {UnlockIcon} from '@chakra-ui/icons';

function Navbar() {

  const toast = useToast()

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">Task Management</Heading>

      <Spacer />

      <HStack spacing='20px'>
        <Box bg="gray.200" p="10px 15px" borderRadius="50%">
          M
        </Box>
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
