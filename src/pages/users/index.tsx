import React, { useEffect } from 'react'
import { Box, Button, ButtonSpinner, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import { RiAddLine, RiRefreshLine, RiSipLine } from 'react-icons/ri'
import {useQuery} from '@tanstack/react-query'

import Sidebar from '../../components/Sidebar'
import Pagination from '../../components/Pagination'
import Header from '../../components/Header'
import Link from 'next/link'
import { api } from '../../services/api'


export default function UserList() {
  const {data, isLoading,isFetching, error ,refetch} = useQuery(['users'], async () => {
    const {data} = await api.get('users')
    
    const users =  data.users.map(user => {
      return{
        id:user.id,
        name: user.name,
        email:user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('us-EN', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    });

    return users;
  }, {
    staleTime: 1000 * 5, // 5 seconds
  })

  const handleClick = () => {
    // manually refetch
    refetch();
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    lg:true
  })

  useEffect(() => {

  },[])

  return (
    <Box>
      <Header />
      
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
              
              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>
            <Box>
              <Button onClick={handleClick} size="sm" bg="pink.400" mr="4">
                <RiRefreshLine />
              </Button>
              <Link href="/users/create" passHref>
                <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                  Add New
                </Button>
              </Link>
            </Box>
          </Flex>
          
          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Error getting data</Text>
            </Flex>
          ) : (
            <>
            <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4","4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>
                  User
                </Th>
                {isWideVersion && <Th>Registered Date</Th>}
                
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map( user => {
                return (
                  <Tr key={user.id}>
                    <Td px={["4","4","6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">{user.name}</Text>
                        <Text fontSize="sm" color="gray.300">{user.email}</Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{user.createdAt}</Td>}
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
          <Pagination />
          </>
          )}
        </Box>

      </Flex>
    </Box>
  )
}
