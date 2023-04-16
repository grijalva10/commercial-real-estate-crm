import * as React from 'react'

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { StarIcon, Home, ChevronsLeft, ChevronsRight } from '@chakra-ui/icons'
import { Command, Resizer, ResizeHandle, ResizeHandler } from '@saas-ui/pro'

import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarToggleGroup,
  ToolbarToggleButton,
  DataGrid,
  DataGridPagination,
} from '@saas-ui/pro'


import {
  Sidebar,
  SidebarProps,
  SidebarOverlay,
  SidebarSection,
  SidebarToggleButton,
  NavItem,
  NavItemProps,
  NavGroup,
} from '@saas-ui/sidebar'

import {
  Badge,
  BadgeProps,
  Box,
  Button,
  DarkMode,
  Heading,
  HStack,
  LightMode,
  Menu,
  MenuButton,
  MenuList,
  Square,
  Text,
  useDisclosure,
  Image,
  Flex, 
  Spacer,
  useBreakpointValue,
} from '@chakra-ui/react'

import {
  IconButton,
  MenuItem,
  MenuDivider,
  useModals,
  useLocalStorage,
  useHotkeysShortcut,
} from '@saas-ui/react'



import {
  FiHome,
  FiUsers,
  FiSettings,
  FiHash,
  FiStar,
  FiChevronsLeft,
  FiChevronsRight,
  FiToggleLeft,
  FiSidebar,
  FiSquare,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiBold,
  FiItalic,
  FiLink,
} from 'react-icons/fi'

import { FaHome, FaUsers, FaCog, FaHashtag } from 'react-icons/fa'




function ToggleVariant() {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  })
}
  

export default function AppSidebar({props}) {
  
   const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  })
  const modals = useModals()
  const [width, setWidth] = useLocalStorage('app.sidebar.width', 280)

  const { variant, colorScheme } = props
  const isCondensed = variant === 'condensed'
  const isMobile = useBreakpointValue({ base: true, lg: false })
  console.log(isMobile);
  
  const onResize = ({ width }) => {
    setWidth(width)
  }
  
  
    
    // return(
    //         <Sidebar position="sticky" top="40px">
    //   <SidebarSection>
    //     <AppSidebarLink to='/console'>Home</AppSidebarLink>
    //     <AppSidebarLink  to='/console/contacts'>Settings</AppSidebarLink>
    //   </SidebarSection>
    // </Sidebar>
    // );
    return (<Toolbar>
  <ToolbarToggleGroup spacing="1" defaultValue="left" onChange={console.log}>
    <ToolbarToggleButton
      icon={<FiAlignLeft />}
      label="Align left"
      value="left"
    />
    <ToolbarToggleButton
      icon={<FiAlignCenter />}
      label="Align center"
      value="center"
    />
    <ToolbarToggleButton
      icon={<FiAlignRight />}
      label="Align right"
      value="right"
    />
  </ToolbarToggleGroup>
  <ToolbarDivider />
  <ToolbarToggleGroup spacing="1" type="checkbox">
    <ToolbarToggleButton icon={<FiBold />} label="Bold" value="bold" />
    <ToolbarToggleButton icon={<FiItalic />} label="Italic" value="italic" />
    <ToolbarToggleButton
      icon={<FiUnderline />}
      label="Underline"
      value="underline"
    />
  </ToolbarToggleGroup>
  <ToolbarDivider />
  <ToolbarButton icon={<FiLink />} label="Create link" />
  <Spacer />
  <ToolbarButton label="Save" variant="solid" colorScheme="primary" />
</Toolbar>
    )
    
   
    
}



function AppSidebarLink({ to, children, icon }) {
        const resolved = useResolvedPath(to)
        const isCurrent = useMatch({ path: resolved.pathname, end: true })
        console.log(isCurrent);
        return (
            <NavItem as={Link} to={to} icon={icon} isActive={isCurrent ? 1 : undefined}>
      {children}
    </NavItem>
        )
    }
