import { Flex, HStack, Icon, Box, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export default function Profile() {
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Wanderson Castro</Text>
      <Text color="gray.300" fontSize="small">wanderson.o.castro@gmail.com</Text>
    </Box>
    <Avatar size="md" name="Wanderson Castro" src="https://github.com/wandersonce.png"/>
  </Flex>
  )
}
