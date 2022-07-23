import React, { ElementType } from 'react';
import {Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps} from "@chakra-ui/react";
import  Link from 'next/link';


interface NavLinkProps extends ChakraLinkProps{
  icon: ElementType;
  children: string;
  href:string;
}

export default function NavLink({icon,href, children, ...rest} : NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} font-size="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}
