import React from 'react'
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar'
import Input from '../../components/Form/Input'
import Header from '../../components/Header'
import Link from 'next/link'


export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p={["6","8"]}>
          <Heading size="lg" fontWeight="normal">Create User</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6","8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="name" label="Full Name" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="password" type="password" label="Password" />
              <Input name="passowrd_confirmation" type="password" label="Confirm Password" />
            </SimpleGrid>

          </VStack>
          
          <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancel</Button>
              </Link>  
                <Button colorScheme="pink">Save</Button>
              </HStack>
            </Flex>
        </Box>

      </Flex>
    </Box>
  )
}
