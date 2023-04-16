import React from 'react';
import {
  Card,
  CardContainer,
  CardHeader,
  CardTitle,
  CardMedia,
  CardBody,
  CardFooter,
  EmptyState 
}
from '@saas-ui/react'

import {
  List,
  ListHeader,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemLabel,
  ListItemTertiary,
  ListItemAction,
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
}
from 'react-icons/fi'

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

import { StarIcon, Home, ChevronsLeft, ChevronsRight, SettingsIcon  } from '@chakra-ui/icons'
import { DataTable } from '@saas-ui/react'
import { DataGrid, DataGridPagination } from '@saas-ui/pro'

import { useFrappeGetDocList, useFrappeGetDoc } from 'frappe-react-sdk'

// export const MyDocumentData = () => {
//   let { data, error, isValidating, mutate } = useFrappeGetDoc(
//     'User',
//     'Administrator',
//     {
//       /** SWR Configuration Options - Optional **/
//     }
//   );

//   if (isValidating) {
//     return <>Loading</>;
//   }
//   if (error) {
//     return <>{JSON.stringify(error)}</>;
//   }
//   if (data) {
//     return (
//       <p>
//         {JSON.stringify(data)}
//         <button onClick={() => mutate()}>Reload</button>
//       </p>
//     );
//   }
//   return null;
// };


export default function PageInbox() {
  const [selections, setSelections] = React.useState([])

  // let { data, error, isValidating, mutate } = useFrappeGetDocList(
  //   'ToDo', {
  //     /** Fields to be fetched - Optional */
  //     fields: ['*'],
  //     /** Filters to be applied - SQL AND operation */
  //     // filters: [['creation', '>', '2021-10-09']],
  //     /** Filters to be applied - SQL OR operation */
  //     // orFilters: [],
  //     /** Fetch from nth document in filtered and sorted list. Used for pagination  */
  //     limit_start: 1,
  //     /** Number of documents to be fetched. Default is 20  */
  //     limit: 50,
  //     /** Sort results by field and order  */
  //     orderBy: {
  //       field: 'creation',
  //       order: 'desc',
  //     },
  //     /** Fetch documents as a dictionary */
  //     asDict: true,
  //   }, {
  //     /** SWR Configuration Options - Optional **/
  //   }
  // );
   let { data, error, isValidating, mutate } = useFrappeGetDoc(
    'Module Def',
    'Deals',
    {
      /** SWR Configuration Options - Optional **/
    });

  if (isValidating) {
    return (<Page title="Inbox" height="200px" isLoading />)

  }

  if (data) {
    if (data.length == 0) {
      
      return (
      <Page title="Inbox"  contentWidth="full">
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

    return (<Page title="Inbox"  contentWidth="full">
  <Card>
  <CardBody>
    <Text>
        {JSON.stringify(data)}
    </Text>
  </CardBody>
  
</Card>
<Box overflowX="auto">
<List
  items={[
    {
      href: '#',
      icon: <Avatar name="Elliot Alderson" size="sm" />,
      primary: 'Elliot Alderson',
      secondary: 'Hacker',
      tertiary: <Tag>admin</Tag>,
      action: <IconButton icon={<SettingsIcon />} />,
    },
    {
      href: '#',
      icon: <Avatar name="Martin Wallström" size="sm" />,
      primary: 'Martin Wallström',
      secondary: 'CEO',
      tertiary: <Tag>owner</Tag>,
      action: <IconButton icon={<SettingsIcon />} />,
    },
  ]}
/>
</Box>

</Page>);

  }



}
