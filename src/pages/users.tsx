import { User } from "@prisma/client";

import { prisma } from "@/services/prisma";
import { GetServerSideProps } from "next";
import { Box, Divider, Flex, Heading, List, ListItem } from "@chakra-ui/react";

interface UserPageProps {
  users: User[];
}

export default function Users({ users }: UserPageProps) {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Box
        bg="gray.700"
        p="5"
        borderRadius="16"
        boxShadow="base"
        align="center"
      >
        <Heading as="h2">User list</Heading>
        <Divider my="4" />
        <List spacing="4">
          {users.map(user => {
            return (
              <ListItem
                key={user.id}
                textAlign="left"
                bg="gray.600"
                p="2"
                borderRadius="8"
              >
                {user.name} - {user.email}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany();

  return {
    props: {
      users
    }
  };
};
