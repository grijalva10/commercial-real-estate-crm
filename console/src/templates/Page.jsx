import {Route, Link, Routes, useLocation} from 'react-router-dom';

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
  Page,
  PageContainer,
  PageHeader,
  PageBody,
  BackButton,
} from '@saas-ui/pro'

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


import AppToolbar from './Toolbar'

export default function AppPage() {
    const location = useLocation();
    let route = location.pathname.split('/');
    console.log(route);
    console.log(route.length);
    let doctype;
    if (route.length == 3) {
        
        doctype = route[2];
        
    }
    else {
        doctype = 'doctype';
    }
    
    let page_title = doctype.charAt(0).toUpperCase() + doctype.slice(1);
    
    console.log(doctype);
    

  return (
<Page title="Page" height="400px" contentWidth="full" nav={<BackButton />}   
toolbar={
<Toolbar>
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
  }
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
    data={[{ name: 'Renata Alink', role: 'Founder' }]}
  >
    <DataGridPagination />
  </DataGrid>
</Page>);
}