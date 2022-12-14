import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PaginatedItems from '../components/PaginatedItems';


export default function Home() {

    return (

        <>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Vagas Renováveis
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Procurando as melhores e mais atualizadas vagas do mercado nacional e internacional?
                            O site vagasrenovaveis.com.br nasceu com esta missão, levar até você as oportunidades mais relevantes do mercado de energias renováveis e áreas afim.

                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 2 }} maxWidth="md">
                    <PaginatedItems />
                </Container>
            </main>

        </>

    );
}

