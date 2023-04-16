import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppShell } from '@saas-ui/app-shell'

import LoginPage from './pages/Login'


import { Box } from '@chakra-ui/react'
import { Badge, Avatar } from '@chakra-ui/react'

import {
  Card,
  CardContainer,
  CardHeader,
  CardTitle,
  CardMedia,
  CardBody,
  CardFooter,
} from '@saas-ui/react'

import {
  Sidebar,
  SidebarSection,
  SidebarToggleButton,
  SidebarOverlay,
  NavGroup,
  NavItem,
} from '@saas-ui/sidebar'

import {
  Page,
  PageContainer,
  PageHeader,
  PageBody,
  BackButton,
} from '@saas-ui/pro'


function App() {
  const [count, setCount] = useState(0)

  return (
      <AppShell
  navbar={
    <Box as="header" borderBottomWidth="1px" py="2" px="4">
      <Avatar src='https://bit.ly/sage-adebayo' />
    </Box>
  }
  sidebar={
    <Sidebar>
      <SidebarSection>
        <NavItem>Home</NavItem>
        <NavItem>Settings</NavItem>
      </SidebarSection>
    </Sidebar>
  }
>
  <Box as="main" flex="1" py="2" px="4" overflowY="auto">
    <Page title="Page" height="200px" />
    <LoginPage/>
  </Box>
</AppShell>

  )
}

export default App
