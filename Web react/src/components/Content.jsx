import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'

function Content() {
  return (
    <section style={{ flex: 1 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {[1, 2, 3].map((i) => (
          <Card key={i} style={{ flex: '1', minWidth: '300px' }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://picsum.photos/seed/${i}/400/200`}
              alt={`Card ${i}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Card {i}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Contenido de ejemplo para la tarjeta {i}.
              </Typography>
              <Button variant="contained" style={{ marginTop: '16px' }}>
                Más información
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Content