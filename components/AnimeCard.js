import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AnimeList from './AnimeList';

export default function AnimeCard({item}) {
  return (
    <Card sx={{ maxWidth:300, minWidth: 275 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={item.images.jpg.image_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Episode:{item.episodes}
          </Typography>
          <Typography>
            Rating:{item.rating}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}