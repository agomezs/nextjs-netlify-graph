import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from 'next/types'
import { ListPlaylists, fetchListPlaylists } from '../lib/netlifyGraph'
import { PostCardSample, PostCardSampleProps } from '../src/components/card';

import { Auth } from 'netlify-graph-auth';
import {Grid} from '@mui/material'
import bla from '../lib/netlifyGraph'

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

// export const getStaticProps: GetStaticProps<{ items:  Playlists, me: Me }> = async () => {
//   // const allPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   // const posts: Post[] = await allPosts.json()

// //   const auth = new Auth.NetlifyGraphAuth({
// //     siteId: context.env.SITE_ID,
// // });

//   // const myAuth = new Auth.NetlifyGraphAuth({
//   //   siteId: process.env.SITE_ID || '',
//   // });
  
//   // console.log('----- auth', myAuth)

//   const data = await fetchListPlaylists({})
  
//   if(data.errors) {
//     console.info('ERROR', data )
//   }
//   const items = data.data.spotify.me?.playlists || []

//   return {
//     props: { items: items, me: data.data.spotify.me },
//   }
// }

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