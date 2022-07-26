import { Flex, Input, Icon } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'

export default function SearchBox() {
  //Controlled Component = We keep the info as the user write it in a variable
  // const [search, setSearch] = useState('');


  //Uncontrolled = We only call the data when we need it
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
    as="label"
    flex="1"
    py="4"
    px="8"
    ml="6"
    maxWidth={400}
    alignSelf="center"
    color="gray.200"
    position="relative"
    bg="gray.800"
    borderRadius="full"
  >
    <Input
      color="gray.50"
      px="4"
      mr="4"
      variant="unstyled"
      placeholder="Search in the platform"
      _placeholder={{color:
      "gray.400"}}
      ref={searchInputRef}  
    />
    <Icon  as={RiSearchLine} fontSize="20"/>
  </Flex>
  )
}
