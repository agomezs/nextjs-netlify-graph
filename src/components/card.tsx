import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

import Link from './Link';

export interface PostCardSampleProps {
  title: string
  body: string
  objectFit?: 'cover' | 'contain'
  id:string
  image: {
    height: number,
    width: number,
    url: string,
  }
}

const MediaSourcesRoot = '/'
export const Sample = `${MediaSourcesRoot}sample/contemplative-reptile.jpg`


export function PostCardSample({ title, body, objectFit = 'cover', image, id }: PostCardSampleProps) {
  return (
    <Card className="card-small" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Button component={Link} href={`playlist/${id}`}>
        <CardMedia title="the green iguana" sx={{  cursor: 'pointer' }}>
          <img src={image.url} height={Number(image.height) / 2} width={Number(image.width) / 2} alt="the green iguana" />
        </CardMedia>
      </Button>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
          {id}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto' }}>
       <Button variant="contained" component={Link} noLinkStyle href="/">
             Go to the home page
         </Button>
      </CardActions>
    </Card>
  )
}