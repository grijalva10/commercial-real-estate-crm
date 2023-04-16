import React from 'react';
import {
  useSearchParams,
  
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
  EmptyState,
  List,
  ListHeader,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemLabel,
  ListItemTertiary,
  ListItemAction,
}
from '@saas-ui/react'

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
  FiInbox,
  FiFilter,
}
from 'react-icons/fi'

import {
  Page,
  PageContainer,
  PageHeader,
  PageBody,
  BackButton,
  SplitPage,
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarToggleGroup,
  ToolbarToggleButton,
  DataGrid, 
  DataGridPagination,
}
from '@saas-ui/pro'


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
  Avatar,
  Tag,
  IconButton,
}
from '@chakra-ui/react'

import { StarIcon, Home, ChevronsLeft, ChevronsRight, SettingsIcon } from '@chakra-ui/icons'
import { DataTable } from '@saas-ui/react'


import { useFrappeGetDocList, useFrappeGetDoc } from 'frappe-react-sdk'


export default function PageLead() {
  const [selections, setSelections] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  let { data, error, isValidating, mutate } = useFrappeGetDoc(
    'Lead',
    'CRM-LEAD-2023-00001',
    {
      /** SWR Configuration Options - Optional **/
    });
  
  const toolbar = (
    <Toolbar>
      <ToolbarButton icon={<FiFilter />} label="Filter" variant="tertiary" />
    </Toolbar>
  )

  const emptyState = (
    <EmptyState
      icon={FiInbox}
      title="Inbox zero"
      description="Nothing to do here"
      variant="centered"
      height="100%"
    />
  )

  let content;

  if (searchParams) {
    content = <Text>{searchParams}</Text>
  }
  else {
    content = emptyState
  }

  if (isValidating) {
    return (<Page title="Lead" height="200px" isLoading />)

  }

  if (data) {
    if (data.length == 0) {

      return (
        <Page title="Lead"  contentWidth="full">
      <EmptyState
  colorScheme="primary"
  icon={FiUsers}
  title="No customers yet"
  description="You haven't imported any customers yet."
  actions={
    <>
      <Button label="Import customers" colorScheme="primary" />
      <Button label="Create customer" />
    </>
  }
/>
</Page>)
    }
    
    console.log(data)
    return (
    <Page  title="Leads" isLoading={isValidating} contentWidth="full">
    <Box overflowX="auto">
        <DataGrid
            isHoverable
            isSelectable
            isSortable
            columns={columns}
            data={data}>
            <DataGridPagination />
          </DataGrid>
          </Box>
     </Page>);

  }



}
