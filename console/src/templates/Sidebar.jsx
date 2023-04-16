import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { StarIcon, Home, ChevronsLeft, ChevronsRight } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'

import { Command, Resizer, ResizeHandle, ResizeHandler } from '@saas-ui/pro'

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
} from '@chakra-ui/react'

import {
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
} from 'react-icons/fi'

import { FaHome, FaUsers, FaCog, FaHashtag } from 'react-icons/fa'



function ToggleVariant() {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  })
}
  

export default function SB({props}) {
   const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  })
  const modals = useModals()
  const [width, setWidth] = useLocalStorage('app.sidebar.width', 280)

  const { variant, colorScheme } = props
  const isCondensed = variant === 'condensed'
  const isMobile = useBreakpointValue({ base: true, lg: false })
  console.log(isMobile);
  
  
    
    // return(
    //         <Sidebar position="sticky" top="40px">
    //   <SidebarSection>
    //     <AppSidebarLink to='/console'>Home</AppSidebarLink>
    //     <AppSidebarLink  to='/console/contacts'>Settings</AppSidebarLink>
    //   </SidebarSection>
    // </Sidebar>
    // );
    return (<Sidebar
          breakpoints={{ base: false }}
          variant={isOpen ? 'default' : 'condensed'}
          transition="width"
          transitionDuration="normal"
          width={isOpen ? '280px' : '14'}
          minWidth="auto"
        >
        <SidebarToggleButton />
          <SidebarSection direction={isOpen ? 'row' : 'column'}>
            <Image
              src="https://saas-ui.dev/favicons/favicon-96x96.png"
              boxSize="7"
              mb="1"
              display={isOpen ? 'block' : 'none'}
            />
            <Spacer />
            <IconButton
              onClick={onToggle}
              variant="ghost"
              size="sm"
              icon={isOpen ? <FiChevronsLeft /> : <FiChevronsRight />}
              aria-label="Toggle Sidebar"
            />
          </SidebarSection>

          <SidebarSection flex="1" overflowY="auto" overflowX="hidden">
            <NavGroup>
              <AppSidebarLink to="/console" icon={<FiHome />}>Dashboard </AppSidebarLink>
              <AppSidebarLink to="/console/contacts" icon={<StarIcon />}>contacts</AppSidebarLink>
              <AppSidebarLink to="/console/user" icon={<FiUsers />}>Users</AppSidebarLink>
            </NavGroup>
          </SidebarSection>
          <SidebarOverlay />
        </Sidebar>)
    
   
    
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
