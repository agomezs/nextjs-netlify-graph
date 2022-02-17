import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

import Link from '../Link';

export interface PostCardSampleProps {
  title: string
  body: string
  objectFit?: 'cover' | 'contain'
}

const MediaSourcesRoot = '/'
export const Sample = `${MediaSourcesRoot}sample/contemplative-reptile.jpg`


export function PostCardSample({ title, body, objectFit = 'cover' }: PostCardSampleProps) {
  return (
    <Card className="card-small" sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia title="the green iguana">
        {/* <Image src={Sample} width={300} height={150} objectFit={objectFit} /> */}
        <img src={Sample} height={150} width={300} alt="the green iguana" />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
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