import * as React from 'react';
import { Container, Box, Typography, Button, TextField, Avatar, Tabs, Tab, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function Perfil() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', paddingY: '2rem' }}>
      
      {/* Header con imagen de perfil */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
        <Avatar
          src="https://via.placeholder.com/150"
          alt="Isabella Rodriguez"
          sx={{ width: 120, height: 120, marginBottom: '1rem' }}
        />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Isabella Rodriguez
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '1rem', color: '#606060' }}>
          Estudiante de Diseño UI/UX en BrainStation
        </Typography>
        <Button variant="outlined" startIcon={<EditIcon />} sx={{ textTransform: 'none', borderRadius: '8px' }}>
          Editar perfil
        </Button>
      </Box>

      {/* Tabs de perfil */}
      <Box sx={{ width: '100%', maxWidth: '600px', marginBottom: '2rem' }}>
        <Tabs value={0} centered>
          <Tab label="Perfil" />
          <Tab label="Cursos" />
          <Tab label="Comentarios" />
        </Tabs>
      </Box>

      {/* Información personal */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        Información personal
      </Typography>
      <Box sx={{ width: '100%', maxWidth: '600px', marginBottom: '2rem' }}>
        <TextField
          fullWidth
          label="Nombre"
          defaultValue="Isabella Rodriguez"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton>
                <EditIcon />
              </IconButton>
            ),
          }}
          sx={{ marginBottom: '1rem', backgroundColor: '#F7F7F7', borderRadius: '8px' }}
        />
        <TextField
          fullWidth
          label="Correo electrónico"
          defaultValue="isabella@gmail.com"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton>
                <EditIcon />
              </IconButton>
            ),
          }}
          sx={{ marginBottom: '1rem', backgroundColor: '#F7F7F7', borderRadius: '8px' }}
        />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          defaultValue="********"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton>
                <EditIcon />
              </IconButton>
            ),
          }}
          sx={{ marginBottom: '1rem', backgroundColor: '#F7F7F7', borderRadius: '8px' }}
        />
        <Button variant="contained" sx={{ backgroundColor: '#4A90E2', color: '#FFF', borderRadius: '8px', textTransform: 'none' }}>
          Guardar cambios
        </Button>
      </Box>

      {/* Redes sociales */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        Redes sociales
      </Typography>
      <Box sx={{ width: '100%', maxWidth: '600px', marginBottom: '2rem' }}>
        <TextField
          fullWidth
          label="LinkedIn"
          defaultValue="linkedin.com/in/isabella"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton>
                <EditIcon />
              </IconButton>
            ),
          }}
          sx={{ marginBottom: '1rem', backgroundColor: '#F7F7F7', borderRadius: '8px' }}
        />
        <TextField
          fullWidth
          label="Dribbble"
          defaultValue="dribbble.com/isabella"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton>
                <EditIcon />
              </IconButton>
            ),
          }}
          sx={{ marginBottom: '1rem', backgroundColor: '#F7F7F7', borderRadius: '8px' }}
        />
        <TextField
          fullWidth
          label="Instagram"
          defaultValue="instagram.com/isabella"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton>
                <EditIcon />
              </IconButton>
            ),
          }}
          sx={{ marginBottom: '1rem', backgroundColor: '#F7F7F7', borderRadius: '8px' }}
        />
        <Button variant="contained" sx={{ backgroundColor: '#4A90E2', color: '#FFF', borderRadius: '8px', textTransform: 'none' }}>
          Guardar cambios
        </Button>
      </Box>
    </Container>
  );
}
