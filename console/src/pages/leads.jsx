import React from 'react';
import { useSearchParams, Link, useMatch, useResolvedPath, NavLink  } from "react-router-dom";
import { NavItem } from '@saas-ui/sidebar'


import {
  EmptyState
}
from '@saas-ui/react'

import {
  FiUsers,
  FiInbox,
  FiFilter,
  FiCircle,
}
from 'react-icons/fi'

import {
  Page,
  Toolbar,
  ToolbarButton,
  DataGrid, 
  DataGridPagination,
  FilterMenu,
  ActiveFilter,
  ActiveFilters,
  FiltersProvider,
  FiltersAddButton,
  ResponsiveMenu, 
  ResponsiveMenuList
}
from '@saas-ui/pro'

import {
  Box,
  Button,
  Text,
  Spacer,
  Badge,
  MenuItem,
  MenuButton,
}
from '@chakra-ui/react'

import { useFrappeGetDocList } from 'frappe-react-sdk'


function StatusBadge(){
     return( 
    <Badge
    boxSize="2"
    borderRadius="full"
    borderWidth="2px"
    borderColor="currentColor"
    bg="transparent"
    p="0"/>)
    
}


function AppSidebarLink({ to, children }) {
        const resolved = useResolvedPath(to)
        const isCurrent = useMatch({ path: resolved.pathname, end: true })
        console.log(isCurrent);
        return (
            <NavItem as={Link} to={to} isActive={isCurrent ? 1 : undefined}>
      {children}
    </NavItem>
        )
    }


export default function PageLeads() {
  const [selections, setSelections] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams();
   const columns = React.useMemo(() => {
    return [
      {
        accessorKey: 'name',
        header: 'Name',
        size: 200,
        meta: {
          href: ({ name }) => `leads/${name}`
        },
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'company',
        header: 'Company',
      },
      {
        accessorKey: 'country',
        header: 'Country',
      },
      {
        accessorKey: 'no_of_employees',
        header: 'Employees',
        meta: {
          isNumeric: true,
        },
      },
      {
        id: 'action',
        disableSortBy: true,
        disableGlobaFilter: true,
        header: '',
        cell: () => (
          <>
            <Button size="xs">Edit</Button>
          </>
        ),
        size: 200,
      },
    ]
  }, [])
  
  const filters = React.useMemo(
    () => [
      {
        id: 'status',
        label: 'Status',
        icon: <FiCircle />,
        type: 'enum',
        items: [
          {
            id: 'new',
            label: 'New',
            icon: <StatusBadge bg="blue.400" />,
          },
          {
            id: 'active',
            label: 'Active',
            icon: <StatusBadge bg="green.400" />,
          },
        ],
      },
    ],
    []
  )

  let { data, error, isValidating, mutate } = useFrappeGetDocList(
    'Lead', {
      /** Fields to be fetched - Optional */
      fields: ['*'],
      /** Filters to be applied - SQL AND operation */
      // filters: [['creation', '>', '2021-10-09']],
      /** Filters to be applied - SQL OR operation */
      // orFilters: [],
      /** Fetch from nth document in filtered and sorted list. Used for pagination  */
      limit_start: 1,
      /** Number of documents to be fetched. Default is 20  */
      limit: 50,
      /** Sort results by field and order  */
      orderBy: {
        field: 'creation',
        order: 'desc',
      },
      /** Fetch documents as a dictionary */
      asDict: true,
    }, {
      /** SWR Configuration Options - Optional **/
    }
  );
  // let { data, error, isValidating, mutate } = useFrappeGetDoc(
  //   'Module Def',
  //   'Deals',
  //   {
  //     /** SWR Configuration Options - Optional **/
  //   });
  
  const toolbar = (
    <Toolbar variant="outline">
    <Spacer />
      <FiltersAddButton/>
      <ToolbarButton label="New" variant="primary"/>
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
    return (<Page title="Inbox" height="200px" isLoading />)

  }

  if (data) {
    if (data.length == 0) {

      return (
        <Page title="Leads"  contentWidth="full">
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
      <FiltersProvider filters={filters}>
    <Page  title="Leads" toolbar={toolbar} isLoading={isValidating} contentWidth="full">
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
     </Page>
     </FiltersProvider>);

  }



}
