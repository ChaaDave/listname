import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';




const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));



export default function PersistentDrawerRight() {
  const [open] = React.useState(false);



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{backgroundColor: "white"}} position="fixed"  open={open}>
        <Toolbar>
        <img
                        alt="sahaware"
                        height={30}
                        marginRight="100"
                        src="sahaware.png"
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    </Toolbar>
      </AppBar>

    </Box>
  );
}
