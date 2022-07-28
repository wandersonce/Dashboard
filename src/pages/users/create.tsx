import React from 'react'
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar'
import {Input} from '../../components/Form/Input'
import {SubmitHandler, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import Header from '../../components/Header'
import Link from 'next/link';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid Email'),
  password: yup.string().required('Password Required').min(6, 'Min 6 Caracters'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Password must match')
});

export default function CreateUser() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const {errors} = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) =>{
    await new Promise(resolve => setTimeout(resolve,2000));
    console.log(values);
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius="8" bg="gray.800" p={["6","8"]}>
          <Heading size="lg" fontWeight="normal">Create User</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6","8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input
                name="name"
                label="Full Name"
                error={errors.name}
                {...register('name')}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
             <Input
                name="password"
                type="password"
                label="Password"
                error={errors.password}
                {...register('password')}
              />
              
              <Input
                name="passowrd_confirmation"
                type="password"
                label="Confirm Password"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>

          </VStack>
          
          <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
              <Link href="/users" passHref>
                <Button  as="a" colorScheme="whiteAlpha">Cancel</Button>
              </Link>  
                <Button isLoading={formState.isSubmitting} type="submit" colorScheme="pink">Save</Button>
              </HStack>
            </Flex>
        </Box>

      </Flex>
    </Box>
  )
}
