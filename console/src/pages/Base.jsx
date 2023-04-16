import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link, useMatch, useResolvedPath, useLoaderData } from "react-router-dom";
import { getContacts } from "./contacts";

import {
    ThemeProvider,
    BaseStyles,
    Box,
    PageLayout,
    NavList
}
from '@primer/react';


export async function loader() {
  return { getContacts };
}

export default function Root() {
    
    const {contacts} = useLoaderData();

    function NavItem({ to, children }) {
        const resolved = useResolvedPath(to)
        const isCurrent = useMatch({ path: resolved.pathname, end: true })
        return (
            <NavList.Item as={Link} to={to} aria-current={isCurrent ? 'page' : undefined}>
      {children}
    </NavList.Item>
        )
    }

    return (
        <ThemeProvider>
        <BaseStyles>
                <PageLayout padding="none">
  <PageLayout.Header>
  </PageLayout.Header>
  
  <PageLayout.Pane position="start" aria-label="Secondary navigation">
    <NavList>
      <NavItem to="/">Dashboard</NavItem>
      <NavItem to="/contacts">Contacts</NavItem>
      <NavItem to="/leads">Leads</NavItem>
    
</NavList>
  </PageLayout.Pane >
  <PageLayout.Content padding="normal">
  <Box>
  <div id="detail"><Outlet /></div>
  </Box>
  </PageLayout.Content>
  <PageLayout.Footer>
    <Box label="Footer" height={64} />
  </PageLayout.Footer>
</PageLayout>
        </BaseStyles>
        </ThemeProvider>
    )
}
