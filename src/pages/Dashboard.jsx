import { SimpleGrid, Box, Text, Card, CardHeader, CardBody, CardFooter, Flex, Heading, HStack, Button, Divider } from "@chakra-ui/react";
import {useLoaderData} from 'react-router-dom';
import {ViewIcon, EditIcon} from '@chakra-ui/icons'

export default function Dashboard() {

  const tasks = useLoaderData()

  return (
    <SimpleGrid spacing={10} minChildWidth='300px'>
      {
        tasks && tasks.map((task) => (
          <Card key={task.id} borderTop='8px' borderColor='#537ea2' bg='white'>
            <CardHeader>
              <Flex gap={5}>
                <Box h="50px" w="50px">
                  <Text>Av</Text>
                </Box>

                <Box>
                  <Heading as="h3" size="sm">{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color='gray.500'>
              <Text>{task.description}</Text>
            </CardBody>
            
            <Divider borderColor="gray.300" />

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                <Button leftIcon={<EditIcon />}>Comment</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))
      }
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks")

  return res.json()
}
