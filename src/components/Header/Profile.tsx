import { Flex, Box, Text, Avatar } from '@chakra-ui/react'
import React from 'react'

interface ProfileProps{
  showProfileData? : boolean;
}

export default function Profile({showProfileData = true} : ProfileProps) {
  return (
    <Flex align="center">
     {showProfileData && (
      <Box mr="4" textAlign="right">
      <Text>Wanderson Castro</Text>
      <Text color="gray.300" fontSize="small">wanderson.o.castro@gmail.com</Text>
    </Box>
     )}
    <Avatar size="md" name="Wanderson Castro" src="https://github.com/wandersonce.png"/>
  </Flex>
  )
}
