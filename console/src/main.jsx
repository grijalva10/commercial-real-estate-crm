import React from 'react';
import ReactDOM from 'react-dom/client';
import { SaasProvider, theme as baseTheme } from '@saas-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { FrappeProvider } from 'frappe-react-sdk';
import { AppShell } from '@saas-ui/app-shell';


import './index.css';

import ErrorPage from "./pages/Error";
import PageLogin from "./pages/login";
import ContactsPage from "./pages/Contacts";
import PageUsers from "./pages/users";
import PageLeads from "./pages/leads";
import PageLead from "./pages/lead";
import PageInbox from "./pages/inbox";

import PageDashboard from "./pages/dashboard";
import Layout from "./layouts/layout";


import AppPage from "./templates/Page";
// import ContactsLoader, {contactsLoader} from "./routes/contacts";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
}
from "react-router-dom";

function getLead(name) {

}


const router = createBrowserRouter([{
    path: "/console",
    element: <Layout />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [

      {
        path: "/console/login",
        element: <PageLogin />,

      },

      {
        path: "/console/inbox",
        element: <PageInbox />,

      },

      {
        path: "/console/dashboard",
        element: <PageDashboard />,

      },

      {
        path: "/console/leads",
        element: <PageLeads />,
        children: []

      },
      {
        path: "/console/leads/:name",
        element: <PageLead />,
      },

      {
        path: "/console/contacts",
        element: <ContactsPage />,

      },
      {
        path: "/console/users",
        element: <PageUsers/>,

      },
      {
        path: "/console/doctype/:name",
        element: <ContactsPage />,
      },
    ],
  },


]);





// <FrappeProvider url='https://my-frappe-server.frappe.cloud' config={config}>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <Layout>
    </Layout>
    </RouterProvider>
  </React.StrictMode>
)
