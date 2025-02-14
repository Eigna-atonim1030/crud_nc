import Head from 'next/head';
import { Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Button, Typography, Container, Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gestión Estudiantes y Cursos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ backgroundColor: '#F9FAFA', minHeight: '100vh' }}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            borderBottom: '1px solid #EEEFF2',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Box component="span" sx={{ fontSize: '2rem', color: '#1C1D22' }}>
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
              </svg>
            </Box>
            <Typography variant="h5" fontWeight="bold" sx={{ color: '#1C1D22' }}>
              Smart School
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button variant="text" sx={{ color: '#1C1D22' }}>
              Inicio
            </Button>
            <Button variant="text" sx={{ color: '#1C1D22' }}>
              Explorar
            </Button>
            <Button variant="text" sx={{ color: '#1C1D22' }}>
              Cursos
            </Button>
            <Button variant="text" sx={{ color: '#1C1D22' }}>
              Instructores
            </Button>
          </Box>
          <Box sx={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="contained" sx={{ backgroundColor: '#607AFB', color: '#F9FAFA' }}>
              Iniciar sesión
            </Button>
            <Button variant="contained" sx={{ backgroundColor: '#EEEFF2', color: '#1C1D22' }}>
              Registrarse
            </Button>
          </Box>
        </header>
        <Container sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#1C1D22' }}>
            Aprende de los mejores instructores del mundo
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#1C1D22', marginTop: '1rem' }}>
            Explora miles de cursos en vivo y bajo demanda en negocios, tecnología, creatividad y más.
            Avanza en tu carrera, persigue tus pasiones o aprende algo nuevo.
          </Typography>
          <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Button variant="contained" sx={{ backgroundColor: '#607AFB', color: '#F9FAFA' }}>
              Ver Cursos
            </Button>
            <Button variant="contained" sx={{ backgroundColor: '#EEEFF2', color: '#1C1D22' }}>
              Regístrate
            </Button>
          </Box>
          <Container sx={{ marginTop: '3rem', paddingX: '2rem' }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                color: '#1C1D22',
                textAlign: 'center',
                marginBottom: '2rem',
                fontSize: '32px',
              }}
            >
              Explora cursos populares
            </Typography>

            <Grid container spacing={4}>
              {/* Curso 1 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', backgroundColor: '#FFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/dd6d999d-5fda-4403-84c4-d47e757a2832.png")',
                      height: '200px',
                      backgroundSize: 'cover',
                      borderRadius: '8px 8px 0 0',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1C1D22' }}>
                      Comienza a aprender
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#3C3F4A', marginTop: '8px' }}>
                      Descubre miles de cursos en vivo y bajo demanda
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Curso 2 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', backgroundColor: '#FFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1630178836733-3d61d8974258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTI0NDl8MHwxfHNlYXJjaHw1fHxzdHVkZW50fGVufDF8fHx8MTcyNjc5MDYyM3ww&ixlib=rb-4.0.3&q=80&w=1080")',
                      height: '200px',
                      backgroundSize: 'cover',
                      borderRadius: '8px 8px 0 0',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1C1D22' }}>
                      Diseño
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#3C3F4A', marginTop: '8px' }}>
                      Aprende diseño gráfico, UX, ilustración y más
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Curso 3 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', backgroundColor: '#FFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1630178836733-3d61d8974258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTI0NDl8MHwxfHNlYXJjaHw1fHxzdHVkZW50fGVufDF8fHx8MTcyNjc5MDYyM3ww&ixlib=rb-4.0.3&q=80&w=1080")',
                      height: '200px',
                      backgroundSize: 'cover',
                      borderRadius: '8px 8px 0 0',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1C1D22' }}>
                      Negocios
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#3C3F4A', marginTop: '8px' }}>
                      Domina las habilidades de liderazgo, marketing y contabilidad
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Curso 4 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', backgroundColor: '#FFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1720048171098-dba33b2c4806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTI0NDl8MXwxfHNlYXJjaHwxfHxzdHVkZW50fGVufDF8fHx8MTcyNjc5MDYyM3ww&ixlib=rb-4.0.3&q=80&w=1080")',
                      height: '200px',
                      backgroundSize: 'cover',
                      borderRadius: '8px 8px 0 0',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1C1D22' }}>
                      Ciencia de la Computación
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#3C3F4A', marginTop: '8px' }}>
                      Aprende a codificar, desarrollar aplicaciones y más
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Curso 5 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', backgroundColor: '#FFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1630178836733-3d61d8974258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTI0NDl8MHwxfHNlYXJjaHw1fHxzdHVkZW50fGVufDF8fHx8MTcyNjc5MDYyM3ww&ixlib=rb-4.0.3&q=80&w=1080")',
                      height: '200px',
                      backgroundSize: 'cover',
                      borderRadius: '8px 8px 0 0',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1C1D22' }}>
                      Desarrollo Web
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#3C3F4A', marginTop: '8px' }}>
                      Construye sitios web, aplicaciones y estructuras de datos
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </>
  );
}
