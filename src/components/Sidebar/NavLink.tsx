import React, { ElementType } from 'react';
import {Link, Icon, Text, LinkProps as ChakraLinkProps} from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps{
  icon: ElementType;
  children: string;
}

export default function NavLink({icon, children, ...rest} : NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} font-size="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}
