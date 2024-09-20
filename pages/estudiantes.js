import * as React from 'react';
import { Container, Box, Typography, Button, Table, TableHead, TableBody, TableRow, TableCell, IconButton, InputBase, Paper } from '@mui/material';
import { Search as SearchIcon, House as HouseIcon, Book as BookIcon, Group as GroupIcon, MoreHoriz as MoreHorizIcon } from '@mui/icons-material';

export default function Estudiantes() {
  return (
    <Container sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F9FAFA', paddingY: '2rem' }}>
      {/* Menú lateral */}
      <Box sx={{ width: '250px', backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', marginRight: '2rem' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Menú
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingY: '0.5rem' }}>
          <HouseIcon />
          <Typography variant="body1">Inicio</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingY: '0.5rem' }}>
          <BookIcon />
          <Typography variant="body1">Cursos</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingY: '0.5rem', backgroundColor: '#EEEFF2', borderRadius: '8px' }}>
          <GroupIcon />
          <Typography variant="body1">Estudiantes</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingY: '0.5rem' }}>
          <MoreHorizIcon />
          <Typography variant="body1">Más</Typography>
        </Box>
      </Box>

      {/* Contenido principal */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Título y barra de búsqueda */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Estudiantes</Typography>
          <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: '300px', padding: '0.5rem', borderRadius: '8px', backgroundColor: '#EEEFF2' }}
          >
            <IconButton sx={{ padding: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ marginLeft: 1, flex: 1 }} placeholder="Buscar estudiantes" />
          </Paper>
        </Box>

        {/* Botones de acción */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginBottom: '1.5rem' }}>
          <Button variant="outlined" sx={{ backgroundColor: '#EEEFF2', color: '#1C1D22' }}>Exportar</Button>
          <Button variant="contained" sx={{ backgroundColor: '#607AFB', color: '#F9FAFA' }}>Añadir estudiante</Button>
        </Box>

        {/* Tabla de estudiantes */}
        <Box sx={{ borderRadius: '8px', backgroundColor: '#FFF', padding: '1rem' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Correo electrónico</TableCell>
                <TableCell>Último acceso</TableCell>
                <TableCell>Cursos</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Sara Smith</TableCell>
                <TableCell>sara.smith@gmail.com</TableCell>
                <TableCell>
                  <Button variant="outlined" sx={{ backgroundColor: '#EEEFF2', color: '#1C1D22' }}>hace 3 días</Button>
                </TableCell>
                <TableCell>Curso de diseño</TableCell>
                <TableCell>
                  <Button variant="outlined" sx={{ backgroundColor: '#EEEFF2', color: '#1C1D22' }}>Activo</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Container>
  );
}
