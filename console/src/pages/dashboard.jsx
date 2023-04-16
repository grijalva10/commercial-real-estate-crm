import AppSidebar from '../components/app-sidebar';
import { ResponsiveMenu, ResponsiveMenuList } from '@saas-ui/pro'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { SearchInput } from '@saas-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
}
from "react-router-dom";

import {
    Card,
    CardContainer,
    CardHeader,
    CardTitle,
    CardMedia,
    CardBody,
    CardFooter,
     Button,
}
from '@saas-ui/react'

import {
    Page,
    PageContainer,
    PageHeader,
    PageBody,
    BackButton,
}
from '@saas-ui/pro'

import {
    Badge,
    BadgeProps,
    Box,
    ButtonGroup,
    DarkMode,
    Heading,
    HStack,
    LightMode,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    Square,
    Text,
    useDisclosure,
    Image,
}
from '@chakra-ui/react'
import { DataTable } from '@saas-ui/react'
import { DataGrid, DataGridPagination } from '@saas-ui/pro'
import { SaasProvider, theme as baseTheme } from '@saas-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { FrappeProvider } from 'frappe-react-sdk';
import { AppShell } from '@saas-ui/app-shell';
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarToggleGroup,
  ToolbarToggleButton,
} from '@saas-ui/pro'
import {
  SidebarToggleButton,
} from '@saas-ui/sidebar'


// import { useFrappeGetDocList } from 'frappe-react-sdk'

// Your custom theme
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
);

export default function PageDashboard() {
    //     const { data, error, isValidating, mutate } = useFrappeGetDocList(
    //     'DocType',
    //     {
    //       /** Fields to be fetched - Optional */
    //       fields: ['name', 'creation'],
    //       /** Filters to be applied - SQL AND operation */
    //       filters: [['creation', '>', '2021-10-09']],
    //       /** Filters to be applied - SQL OR operation */
    //       orFilters: [],
    //       /** Fetch from nth document in filtered and sorted list. Used for pagination  */
    //       limit_start: 5,
    //       /** Number of documents to be fetched. Default is 20  */
    //       limit: 50,
    //       /** Sort results by field and order  */
    //       orderBy: {
    //         field: 'creation',
    //         order: 'desc',
    //       },
    //       /** Fetch documents as a dictionary */
    //       asDict: true,
    //     },
    //     {
    //       /** SWR Configuration Options - Optional **/
    //     }
    //   );

    return (
  <Page 
  title="Page" 
  contentWidth="full" 
  toolbar={<Toolbar px="4">
   <ToolbarGroup>
            <Button>Reset</Button>
            <Button variant="primary">Save</Button>
  </ToolbarGroup>
        </Toolbar>}
  
  >
    
        <DataGrid
            isHoverable
            isSelectable
            isSortable
            columns={[
              { id: 'name', Header: 'Name' },
              { id: 'role', Header: 'Role' },
              { id: 'actions', width: '100px', Cell: () => <Button>Edit</Button> },
            ]}
            data={[{ name: 'Renata Alink', role: 'Founder' }]}>
            <DataGridPagination />
          </DataGrid>

  </Page>
    );
}
