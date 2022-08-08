import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  drawerWidth: number;
}

export const Navbar: FC<Props> = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link className="btn btn-outline-primary" to="/">
            <Typography variant="h6" noWrap component={'div'}>
              Home
            </Typography>
          </Link>
          <Link className="btn btn-outline-primary" to="/post">
            <Typography variant="h6" noWrap component={'div'}>
              Post
            </Typography>
          </Link>
          <Link className="btn btn-outline-primary" to="/contacto">
            <Typography variant="h6" noWrap component={'div'}>
              Contacto
            </Typography>
          </Link>

          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
