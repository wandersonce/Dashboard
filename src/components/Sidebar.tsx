import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text font-weight="bold" color="gray.400" fontSize="small">GENERAL</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiDashboardLine} font-size="20" />
              <Text ml="4" fontWeight="medium">Dashboard</Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiContactsLine} font-size="20" />
              <Text ml="4" fontWeight="medium">Users</Text>
            </Link>
          </Stack>  
        </Box>  
        <Box>
        <Text font-weight="bold" color="gray.400" fontSize="small">AUTOMATION</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiInputMethodLine} font-size="20" />
              <Text ml="4" fontWeight="medium">Forms</Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiGitMergeLine} font-size="20" />
              <Text ml="4" fontWeight="medium">Automation</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
