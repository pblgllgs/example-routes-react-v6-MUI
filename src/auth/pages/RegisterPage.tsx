import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import AuthLayout from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title={'Register'}>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label={'Nombre Completo'}
              type={'text'}
              placeholder={'John Doe'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label={'Email'}
              type={'email'}
              placeholder={'aaa@aaa.com'}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label={'Password'}
              type={'password'}
              placeholder={'*******'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label={'Repite la Contraseña'}
              type={'password'}
              placeholder={'*******'}
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction={'row'} justifyContent="end">
            <Typography>Ya tienes una cuenta, has click&nbsp;</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              acá
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
