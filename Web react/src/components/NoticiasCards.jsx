import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import noticias from '../noticias.json';

function NoticiasCards() {
  return (
    <section style={{ flex: 1, padding: '20px' }}>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px',
        justifyContent: 'center'
      }}>
        {noticias.map((noticia, index) => (
          <Card key={index} style={{ 
            width: 300,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://picsum.photos/seed/${index}/300/140`}
              alt={noticia.titulo}
            />
            <CardContent style={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {noticia.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginTop: '8px' }}>
                {noticia.texto}
              </Typography>
              <Button 
                variant="contained" 
                style={{ marginTop: '16px' }}
                color="primary"
              >
                Más información
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default NoticiasCards;