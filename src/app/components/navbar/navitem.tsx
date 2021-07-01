import React from 'react';

import styled from 'styled-components';

import tw from 'twin.macro'
import {Slide as Menu } from 'react-burger-menu'
import { useMediaQuery} from  "react-responsive"
import { SCREENS } from '../responsive';

const ListContainer = styled.ul`
${tw`
flex
list-none
`}
`;

const NavItem = styled.li`
${tw`
      text-xs
      md:text-base
      text-black
      font-medium
      mr-1
      md:mr-5
      cursor-pointer
      transition
      duration-300
      ease-in-out 
      hover: text-green-700
`}
  
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxwidth: SCREENS.sm })

  if(isMobile) 
  return (
    <Menu>
      <ListContainer>
    <NavItem>
      <a href="#">Home</a>
    </NavItem>
    <NavItem>
      <a href="#">Vessels</a>
    </NavItem>
    <NavItem>
      <a href="#">Services</a>
    </NavItem>
    <NavItem>
      <a href="#">ContactUs</a>
    </NavItem>
  </ListContainer>
    </Menu>
  )
  return <ListContainer>
    <NavItem>
      <a href="#">Home</a>
    </NavItem>
    <NavItem>
      <a href="#">Vessels</a>
    </NavItem>
    <NavItem>
      <a href="#">Services</a>
    </NavItem>
    <NavItem>
      <a href="#">ContactUs</a>
    </NavItem>
  </ListContainer>

}