import * as React from 'react';
import { Container, Box, Typography, Button, Table, TableHead, TableBody, TableRow, TableCell, IconButton, InputBase, Avatar, Paper } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon } from '@mui/icons-material';

export default function Cursos() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F9FAFA', paddingY: '2rem' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EEEFF2', paddingBottom: '1rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Avatar sx={{ backgroundColor: '#607AFB' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L21 8L12 14L3 8L12 2Z" fill="currentColor" />
            </svg>
          </Avatar>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Edufy
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Typography variant="body1">Courses</Typography>
          <Typography variant="body1">Bootcamps</Typography>
          <Typography variant="body1">Degrees</Typography>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar src="https://cdn.usegalileo.ai/stability/6c56f281-3a1b-4070-b288-dee69b98a554.png" />
        </Box>
      </Box>

      {/* Cursos Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', marginBottom: '1rem' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Courses
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#607AFB', color: '#F9FAFA' }}>
          New Course
        </Button>
      </Box>

      {/* Barra de búsqueda */}
      <Paper
        component="form"
        sx={{ display: 'flex', alignItems: 'center', width: '100%', padding: '0.5rem', borderRadius: '8px', backgroundColor: '#EEEFF2', marginBottom: '2rem' }}
      >
        <IconButton sx={{ padding: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ marginLeft: 1, flex: 1 }} placeholder="Search courses..." />
      </Paper>

      {/* Tabla de Cursos */}
      <Box sx={{ borderRadius: '8px', backgroundColor: '#FFF', padding: '1rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Instructor</TableCell>
              <TableCell>Students</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>UX/UI Design</TableCell>
              <TableCell>Micheal Scott</TableCell>
              <TableCell>25</TableCell>
              <TableCell>01/10/2022</TableCell>
              <TableCell>01/04/2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Data Science</TableCell>
              <TableCell>Pam Beasley</TableCell>
              <TableCell>30</TableCell>
              <TableCell>01/10/2022</TableCell>
              <TableCell>01/04/2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Web Development</TableCell>
              <TableCell>Jim Halpert</TableCell>
              <TableCell>35</TableCell>
              <TableCell>01/10/2022</TableCell>
              <TableCell>01/04/2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product Management</TableCell>
              <TableCell>Dwight Schrute</TableCell>
              <TableCell>40</TableCell>
              <TableCell>01/10/2022</TableCell>
              <TableCell>01/04/2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cyber Security</TableCell>
              <TableCell>Ryan Howard</TableCell>
              <TableCell>45</TableCell>
              <TableCell>01/10/2022</TableCell>
              <TableCell>01/04/2023</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
}
