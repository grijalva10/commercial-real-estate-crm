// import { useFrappeAuth } from 'frappe-react-sdk';
// import { Stack } from '@chakra-ui/react'
// import {
//   Card,
//   CardContainer,
//   CardHeader,
//   CardTitle,
//   CardMedia,
//   CardBody,
//   CardFooter,
// } from '@saas-ui/react'

// import {
//   Auth,
//   AuthForm,
//   MagicLinkForm,
//   PasswordForm,
//   ForgotPasswordForm,
//   UpdatePasswordForm,
//   OtpForm,
//   Providers,
//   Form,
//   FormLayout,
//   Field,
//   DisplayIf,
//   SubmitButton,
// } from '@saas-ui/react'


//     //   {currentUser}
//     //   <Card title="Welcome to Saas UI">
//     //   <CardBody>
//     //     <button onClick={() => login('administrator', 'Cutter123!')}>Login</button>
//     //     <button onClick={logout}>Logout</button>
//     //     <button onClick={updateCurrentUser}>Fetch current user</button>
//     //   </CardBody>
//     // </Card>

// export default function PageLogin() {
//   const onSubmit = (params) => {
//     console.log(params)
//     return new Promise((resolve) => {
//       setTimeout(resolve, 1000)
//     })
//   }
  
//   const {
//     currentUser,
//     isValidating,
//     isLoading,
//     login,
//     logout,
//     error,
//     updateCurrentUser,
//     getUserCookie,
//   } = useFrappeAuth();
  


//   // render user
//   return (
//     <Stack maxW="400px">
//   <Form
//       defaultValues={{
//         name: 'Saas UI',
//         description: '',
//       }}
//       onSubmit={onSubmit}
//     >
//       <FormLayout>
//         <Field
//           name="name"
//           label="Name"
//           type="text"
//           help="Choose a name for this project"
//           rules={{ required: true }}
//         />

//         <Field
//           name="description"
//           type="textarea"
//           label="Description"
//           placeholder="Optional description"
//         />

//         <SubmitButton>Create Project</SubmitButton>
//       </FormLayout>
//     </Form>
//     </Stack>
//     );
// };

import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Heading, FormControl, FormLabel, Input, Stack, Button, Text, useToast } from '@chakra-ui/react';
import { useFrappeAuth } from 'frappe-react-sdk';

const PageLogin = () => {
  const { register, handleSubmit, errors } = useForm();
  const { login, error } = useFrappeAuth();
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      await login(data.username, data.password);
      toast({
        title: 'Login successful.',
        status: 'success',
        duration: 2000,
        isClosable: true
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred.',
        description: 'Please check your username and password.',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    }
  };

  return (
    <Box p={6}>
      <Box mb={6}>
        <Heading size="lg">Login to your account</Heading>
      </Box>

      <Box mt={6}>
        <Text>Don't have an account? <a href="#">Sign up</a></Text>
      </Box>
      {error && <Box mt={6} color="red">{error.message}</Box>}
    </Box>
  );
};

export default PageLogin;
