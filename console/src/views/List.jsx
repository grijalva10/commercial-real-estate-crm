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
import { DataTable } from '@saas-ui/react'
import { DataGrid, DataGridPagination } from '@saas-ui/pro'

import { useFrappeGetDocList, useFrappeGetDoc } from 'frappe-react-sdk'

export const MyDocumentData = () => {
  const { data, error, isValidating, mutate } = useFrappeGetDoc(
    'User',
    'Administrator',
    {
      /** SWR Configuration Options - Optional **/
    }
  );

  if (isValidating) {
    return <>Loading</>;
  }
  if (error) {
    return <>{JSON.stringify(error)}</>;
  }
  if (data) {
    return (
      <p>
        {JSON.stringify(data)}
        <button onClick={() => mutate()}>Reload</button>
      </p>
    );
  }
  return null;
};


export default function ContactsPage() {
    const { data, error, isValidating, mutate } = useFrappeGetDoc(
    'User',
    'Administrator',
    {
      /** SWR Configuration Options - Optional **/
    }
  );
  //   const { data, error, isValidating, mutate } = useFrappeGetDocList(
  //   'DocType',
  //   {
  //     /** Fields to be fetched - Optional */
  //     fields: ['name', 'creation'],
  //     /** Filters to be applied - SQL AND operation */
  //     filters: [['creation', '>', '2021-10-09']],
  //     /** Filters to be applied - SQL OR operation */
  //     orFilters: [],
  //     /** Fetch from nth document in filtered and sorted list. Used for pagination  */
  //     limit_start: 5,
  //     /** Number of documents to be fetched. Default is 20  */
  //     limit: 50,
  //     /** Sort results by field and order  */
  //     orderBy: {
  //       field: 'creation',
  //       order: 'desc',
  //     },
  //     /** Fetch documents as a dictionary */
  //     asDict: true,
  //   },
  //   {
  //     /** SWR Configuration Options - Optional **/
  //   }
  // );

  return (<Page title="Contacts"  contentWidth="full">
  <Card>
  <CardBody>
    <Text>      <p>
        {JSON.stringify(data)}
        <button onClick={() => mutate()}>Reload</button>
      </p></Text>
  </CardBody>
  
</Card>
<Box overflowX="auto">
    <DataGrid
    isHoverable
    isSelectable
    isSortable
    columns={[
      { id: 'name', Header: 'Name' },
      { id: 'role', Header: 'Role' },
      { id: 'actions', width: '100px', Cell: () => <Button>Edit</Button> },
    ]}
    data={data}
  >
    <DataGridPagination />
  </DataGrid>
</Box>

</Page>);
}