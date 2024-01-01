import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="#537ea2" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "#537ea2" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "#537ea2" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.com
            </ListItem>

            <ListItem>
              <ListIcon as={ChatIcon} />
              Start the conversation
            </ListItem>

            <ListItem>
              <ListIcon as={StarIcon} />
              Favorite
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} />
              Email: mario@netninja.com
            </ListItem>

            <ListItem>
              <ListIcon as={CheckCircleIcon} />
              Start the conversation
            </ListItem>

            <ListItem>
              <ListIcon as={WarningIcon} />
              Favorite
            </ListItem>

            <ListItem>
              <ListIcon as={CheckCircleIcon} />
              Start the conversation
            </ListItem>

            <ListItem>
              <ListIcon as={WarningIcon} />
              Start the conversation
            </ListItem>

            <ListItem>
              <ListIcon as={CheckCircleIcon} />
              Start the conversation
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
