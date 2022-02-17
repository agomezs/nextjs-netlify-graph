import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from 'next/types'
import { ListPlaylists, fetchListPlaylists } from '../lib/netlifyGraph'

import {Grid} from '@mui/material'
import { PostCardSample } from '../src/components/card';

type Me = ListPlaylists["data"]["spotify"]["me"]
type Playlists = Me["playlists"]

export const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  // export const About: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  
  return (
    <Grid container justifyContent={'center'}>
      {props.items.map(({ description, id, name, images }) => (
        <PostCardSample body={description} key={id} title={name} image={images[0]} id={id} />
      ))}
    </Grid>
  )
}

export const getStaticProps: GetStaticProps<{ items:  Playlists, me: Me }> = async () => {
// export const getServerSideProps: GetServerSideProps<{ items:  Playlists, me: Me }> = async () => {
  const accessToken = process.env.ONEGRAPH_AUTHLIFY_TOKEN || ''

  const data = await fetchListPlaylists({}, { accessToken})
  
  if(data.errors) {
    console.info('ERROR', data )
  }
  const items = data.data.spotify.me?.playlists || []

  return {
    props: { items: items, me: data.data.spotify.me },
  }
}

export default About