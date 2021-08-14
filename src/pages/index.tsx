import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <VStack
        align="center"
        justify="center"
        direction="column"
        spacing="4"
        bg="gray.800"
        h="lg"
        w="lg"
        p="5"
        borderRadius="16"
        boxShadow="base"
      >
        <HStack spacing="4">
          <Image src="/images/next-js.svg" alt="Next.js logo" w="16" h="16" />
          <Text as="span" fontSize="20" color="gray.200">
            +
          </Text>
          <Image
            src="/images/chakra-ui.jpg"
            alt="Next.js logo"
            w=" 16"
            h="16"
            clipPath="circle()"
          />
        </HStack>
        <Heading as="h1">Next.js boilerplate</Heading>
        <Text as="span">❤️</Text>
      </VStack>
    </Flex>
  );
}
