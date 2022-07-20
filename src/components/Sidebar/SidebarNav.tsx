import { Stack } from '@chakra-ui/react'
import React from 'react'
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import NavLink from './NavLink'
import NavSection from './NavSection'

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
    <NavSection title="General">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Users</NavLink>
    </NavSection>
    <NavSection title="Automation">
    <NavLink icon={RiInputMethodLine}>Forms</NavLink>
    <NavLink icon={RiGitMergeLine}>Automation</NavLink>
    </NavSection>
  </Stack>
  )
}
