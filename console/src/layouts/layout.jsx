import { useState } from 'react'
import { SaasProvider, theme as baseTheme } from '@saas-ui/react'
import { theme as proTheme } from '@saas-ui/pro'

import { extendTheme, Flex, Text } from '@chakra-ui/react'
import { FrappeProvider } from 'frappe-react-sdk'
import { Outlet } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import { AppShell } from '@saas-ui/app-shell'
import AppSidebar from '../components/app-sidebar'
// import Navbar from './Navbar'


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




export const theme = extendTheme(
  {
    styles: {
      global: {
        'html, body': {
          height: '100%',
        },
      },
    },
  },
  proTheme
);


// navbar={<Navbar/>}
const Layout = ({ children }) => {
  console.log({children});
  const [count, setCount] = useState(0)

  return (
  <SaasProvider theme={theme}>
  <FrappeProvider url='https://crm.jeffgrijalva.com'>
  <AppShell 
  sidebar={<AppSidebar/>}>
  <Outlet/>
  </AppShell>
  </FrappeProvider>
  </SaasProvider>


  );
}

export default Layout
