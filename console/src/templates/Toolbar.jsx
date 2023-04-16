import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarToggleGroup,
  ToolbarToggleButton,
} from '@saas-ui/pro'

export default function AppToolbar() {
    return (<Toolbar>
      <ToolbarButton>Reset</ToolbarButton>
      <ToolbarButton variant="primary">Save</ToolbarButton>
    </Toolbar>);

}
