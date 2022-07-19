import { Stack, Icon, Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, {ReactNode} from 'react'
import { RiDashboardLine, RiContactsLine } from 'react-icons/ri'

interface NavSectionProps{
  title: string;
  children: ReactNode;
}

export default function NavSection({title, children} : NavSectionProps) {
  return (
        <Box>
          <Text font-weight="bold" color="gray.400" fontSize="small">{title}</Text>
          <Stack spacing="4" mt="8" align="stretch">
            {children}
          </Stack>  
        </Box>  
  )
}
