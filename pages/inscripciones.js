import * as React from 'react';
import { Container, Box, Typography, Button, Table, TableHead, TableBody, TableRow, TableCell, IconButton, InputBase, Paper, Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Search as SearchIcon, Home as HomeIcon, School as SchoolIcon, People as PeopleIcon, Event as EventIcon, Message as MessageIcon } from '@mui/icons-material';

export default function Inscripciones() {
  return (
    <Container sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F9FAFA', paddingY: '2rem' }}>
      {/* Menú lateral */}
      <Box sx={{ width: '250px', backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px', marginRight: '2rem' }}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Clases" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Estudiantes" />
          </ListItem>
          <ListItem button selected>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Inscripciones" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary="Mensajes" />
          </ListItem>
        </List>
        <Button
          variant="contained"
          sx={{ marginTop: 'auto', backgroundColor: '#607AFB', color: '#FFF', textTransform: 'none', borderRadius: '8px' }}
        >
          Nueva inscripción
        </Button>
      </Box>

      {/* Contenido principal */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Título */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
          Inscripciones
        </Typography>

        {/* Barra de búsqueda */}
        <Paper
          component="form"
          sx={{ display: 'flex', alignItems: 'center', width: '100%', padding: '0.5rem', borderRadius: '8px', backgroundColor: '#EEEFF2', marginBottom: '2rem' }}
        >
          <IconButton sx={{ padding: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ marginLeft: 1, flex: 1 }} placeholder="Buscar inscripción..." />
        </Paper>

        {/* Tabla de inscripciones */}
        <Box sx={{ borderRadius: '8px', backgroundColor: '#FFF', padding: '1rem' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Estudiante</TableCell>
                <TableCell>Curso</TableCell>
                <TableCell>Fecha de inscripción</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { estudiante: 'Sofia Jones', curso: 'Curso de matemáticas para el éxito', fecha: '15 de abril de 2023', estado: 'Pendiente' },
                { estudiante: 'Juan Garcia', curso: 'Curso de matemáticas para el éxito', fecha: '15 de abril de 2023', estado: 'Pendiente' },
                { estudiante: 'Mara Rodriguez', curso: 'Curso de matemáticas para el éxito', fecha: '15 de abril de 2023', estado: 'Aprobado' },
                { estudiante: 'Carlos Jimnez', curso: 'Curso de matemáticas para el éxito', fecha: '15 de abril de 2023', estado: 'Rechazado' },
                { estudiante: 'Ana Martinez', curso: 'Curso de matemáticas para el éxito', fecha: '15 de abril de 2023', estado: 'Pendiente' },
                { estudiante: 'Pedro Rosas', curso: 'Curso de matemáticas para el éxito', fecha: '15 de abril de 2023', estado: 'Aprobado' },
              ].map((row) => (
                <TableRow key={row.estudiante}>
                  <TableCell>{row.estudiante}</TableCell>
                  <TableCell>{row.curso}</TableCell>
                  <TableCell>{row.fecha}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      sx={{ backgroundColor: '#EEEFF2', color: '#1C1D22', borderRadius: '8px' }}
                    >
                      {row.estado}
                    </Button>
                  </TableCell>
                  <TableCell>
                    {row.estado === 'Pendiente' ? (
                      <Button variant="text" sx={{ color: '#607AFB' }}>
                        Aprobar / Rechazar
                      </Button>
                    ) : (
                      <Button variant="text" sx={{ color: '#607AFB' }}>
                        Ver detalles
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Container>
  );
}
