import * as React from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Aquí puedes manejar la autenticación, por ejemplo, usando Axios para enviar los datos a tu backend.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#F9FAFA' }}>
      <Box sx={{ width: '100%', maxWidth: '400px', padding: '2rem', backgroundColor: '#FFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold' }}>
          Iniciar Sesión
        </Typography>
        <TextField
          fullWidth
          label="Correo Electrónico"
          type="email"
          variant="outlined"
          sx={{ marginBottom: '1.5rem' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          variant="outlined"
          sx={{ marginBottom: '2rem' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: '#607AFB', color: '#FFF', padding: '0.75rem', textTransform: 'none', fontWeight: 'bold' }}
          onClick={handleLogin}
        >
          Iniciar Sesión 
        </Button>
        <Typography sx={{ textAlign: 'center', marginTop: '1rem', color: '#606060' }}>
          ¿No tienes cuenta? <Button variant="text" sx={{ color: '#607AFB', textTransform: 'none' }}>Registrarse</Button>
        </Typography>
      </Box>
    </Container>
  );
}
