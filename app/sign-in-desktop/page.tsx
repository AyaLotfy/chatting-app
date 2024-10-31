import { Box, Typography, TextField, Button, Stack, Checkbox, FormControlLabel } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const SignInDesktop = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" gutterBottom>Sign in to your account</Typography>
      <TextField fullWidth label="Phone number or email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <FormControlLabel control={<Checkbox />} label="I am human" />
      <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>Sign in</Button>
      <Typography variant="body2" sx={{ mt: 2 }}>Or</Typography>
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        <Button startIcon={<AppleIcon />} variant="outlined" fullWidth>Sign in with Apple</Button>
        <Button startIcon={<GoogleIcon />} variant="outlined" fullWidth>Sign in with Google</Button>
        <Button startIcon={<FacebookIcon />} variant="outlined" fullWidth>Sign in with Facebook</Button>
      </Stack>
    </Box>
  );
};

export default SignInDesktop;
