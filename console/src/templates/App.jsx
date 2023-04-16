import { useState } from 'react'
import { SaasProvider, theme as baseTheme } from '@saas-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { FrappeProvider } from 'frappe-react-sdk'
import { Outlet } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import { AppShell } from '@saas-ui/app-shell'
import SB from './Sidebar'
import Navbar from './Navbar'


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
  baseTheme
)


// navbar={<Navbar/>}
function App() {
  const [count, setCount] = useState(0)

  return (
  <SaasProvider theme={theme}>
  <FrappeProvider url='https://crm.jeffgrijalva.com'>
  <AppShell sidebar={<SB/>} >
  
  <Box as="main" flex="1" py="2" px="4" overflowY="auto">
    
     <Outlet />
  </Box>
</AppShell>
  </FrappeProvider>
    </SaasProvider>


  )
}

export default App
