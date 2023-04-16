import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {
  Sidebar,
  SidebarSection,
  SidebarToggleButton,
  SidebarOverlay,
  NavGroup,
  NavItem,
} from '@saas-ui/sidebar'

export default function NavItemRoute({ to, children }) {
        const resolved = useResolvedPath(to)
        const isCurrent = useMatch({ path: resolved.pathname, end: true })
        return (
            <NavList.Item as={Link} to={to} aria-current={isCurrent ? 'page' : undefined}>
      {children}
    </NavList.Item>
        )
    }