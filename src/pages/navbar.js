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
                        marginRight="200"
                        src="https://media-exp1.licdn.com/dms/image/C510BAQF24-0MYzcT0A/company-logo_200_200/0/1533807795080?e=1673481600&v=beta&t=Jv87J1wMyteXBt1vqWYfdm5D1kMhhJ6f-E6ZrqVfzyU"
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    </Toolbar>
      </AppBar>

    </Box>
  );
}
