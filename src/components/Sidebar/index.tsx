import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import SidebarNav from './SidebarNav'

export default function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg:false
  })

  if(isDrawerSidebar) {
    return (
      <Drawer isOpen={true} placement="left" onClose={() => {}}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navigate</DrawerHeader>
          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    )
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}
