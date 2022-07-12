import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiDashboardLine } from 'react-icons/ri'

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="80">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text font-weight="bold" color="gray.400" fontSize="small">GENERAL</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiDashboardLine} font-size="20" />
              <Text ml="4" fontWeight="medium">Dashboard</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
