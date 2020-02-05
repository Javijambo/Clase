import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
let images = {
  Tetris: require('../img/Tetris.PNG'),
  Memory: require('../img/Memory.PNG'),
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    color: 'white',
    padding: theme.spacing(6),
    fontSize: 12,
  },
  
}));

function Game(gameKey, gameName, gameDescription) {
  const classes = useStyles();
  var img = images[gameName];
  var ruta = "/" + gameName;
  return (

    <Grid item key={gameKey} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={img}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {gameName}
          </Typography>
          <Typography>
            {gameDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={ruta}>
            Jugar
              </Button>
        </CardActions>
      </Card>
    </Grid>

  )
}
export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4" color="inherit"  noWrap paragraph>
            Juegos3GAG
          </Typography>
        </Toolbar>
      </AppBar>
      <main >
        <Container className={classes.cardGrid} maxWidth="md" >
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Game(1, "Tetris", "Tetris es un videojuego de puzzle originalmente diseñado y programado por Alekséi Pázhitnov en la Unión Soviética. ")}
            {Game(2, "Memory", "Memory es un juego que ayuda al entendimiento del cerebro, que trata de encontrar cartas parejas en una serie de cartas.")}
            {Game(3, "Snake", "Juego realizado por alvaro ")}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          JUEGOS3GAG
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Pagina de juegos realizada para la asignatura de DWEC
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}