import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from 'next/types'

import Link from '../src/Link';

const MediaSourcesRoot = '/'
export const Sample = `${MediaSourcesRoot}sample/contemplative-reptile.jpg`

interface Post extends PostCardSampleProps {
  id: string
}

export const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  console.log('props', props)
  return (
    <Grid container justifyContent={'center'}>
      {props.posts.map((post) => (
        <PostCardSample body={post.body} key={post.id} title={post.title} />
      ))}
    </Grid>
  )
}

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const allPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts: Post[] = await allPosts.json()

  return {
    props: { posts },
  }
}

export default About


interface PostCardSampleProps {
   title: string
   body: string
   objectFit?: 'cover' | 'contain'
 }
 
 function PostCardSample({ title, body, objectFit = 'cover' }: PostCardSampleProps) {
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
 