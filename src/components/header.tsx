import React from 'react';
import { Flex, Input, Text, Icon, HStack, Box, Avatar} from '@chakra-ui/react';
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri'
import Profile from './Header/Profile';
import NotificationsNav from './Header/NotificationsNav';
import SearchBox from './Header/SearchBox';

export default function Header() {
  return (
   <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >

 <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>

      <SearchBox />

      <Flex align="center" ml="auto" >
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}
