import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from 'next/types'
import { ListPlaylists, fetchListPlaylists } from '../lib/netlifyGraph'
import { PostCardSample, PostCardSampleProps } from '../src/components/card';

import {Grid} from '@mui/material'

type Me = ListPlaylists["data"]["spotify"]["me"]
type Playlists = Me["playlists"]

export const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  console.log('props', props)
  return (
    <Grid container justifyContent={'center'}>
      {props.items.map((playlist) => (
        <PostCardSample body={playlist.description} key={playlist.name} title={playlist.name} />
      ))}
    </Grid>
  )
}

export const getStaticProps: GetStaticProps<{ items:  Playlists, me: Me }> = async () => {
  const allPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  // const posts: Post[] = await allPosts.json()

  const data = await fetchListPlaylists({})
  const items = data.data.spotify.me?.playlists || []

  return {
    props: { items: items, me: data.data.spotify.me },
  }
}

export default About