import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
    return (

        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Vagas Renováveis 
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
               As Melhores Vagas Estão Aqui!
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://vagasrenovaveis.com.br/">
                    vagasrenovaveis.com.br
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>

    );
}