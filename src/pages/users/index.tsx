import React, { useEffect, useState } from 'react'
import { Link, Box, Button, ButtonSpinner, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import { RiAddLine, RiRefreshLine, RiSipLine } from 'react-icons/ri'

import Sidebar from '../../components/Sidebar'
import Pagination from '../../components/Pagination'
import Header from '../../components/Header'
import NextLink from 'next/link'
import { useUsers } from '../../services/hooks/useUsers'
import { queryClient } from '../../services/queryClient'
import { api } from '../../services/api'


export default function UserList() {
  const [page, setPage] = useState(1);
  const {data, isLoading,isFetching, error ,refetch} = useUsers(page)
  const handleClick = () => {
    // manually refetch
    refetch();
  };

  console.log(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg:true
  })

  async function handlePrefetchUser(userId:string){
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10 
    })
  }

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
              <NextLink href="/users/create" passHref>
                <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                  Add New
                </Button>
              </NextLink>
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
              {data.users.map( user => {
                return (
                  <Tr key={user.id}>
                    <Td px={["4","4","6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>                     
                          <Text fontWeight="bold">{user.name}</Text>
                        </Link>
                        <Text fontSize="sm" color="gray.300">{user.email}</Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{user.createdAt}</Td>}
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
          <Pagination 
            totalCountOfRegisters={data.totalCount}
            currentPage={page}
            onPageChange={setPage}
          />
          </>
          )}
        </Box>

      </Flex>
    </Box>
  )
}
