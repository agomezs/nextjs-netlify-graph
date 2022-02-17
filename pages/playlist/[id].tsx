import { GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from 'next/types'
import {Grid, Paper, Stack} from '@mui/material'
import { PlaylistTacks, Track } from '../../src/types'

import { SongCard } from '../../src/components'
import {fetchListPlaylistSongs} from '../../lib/netlifyGraph'

export const SongList: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ playlist }) => {

    return (
      <Grid container justifyContent={'center'} spacing={2.5}>
        {playlist.tracks.map((track) => (
          <Grid item key={track.id}>
          <SongCard track={track} />
          </Grid>
        ))}
      </Grid>
    )
}


export const getServerSideProps: GetServerSideProps<{ playlist:  PlaylistTacks}> = async ({ params }) => {
  const accessToken = process.env.ONEGRAPH_AUTHLIFY_TOKEN || ''
  
  const response = await fetchListPlaylistSongs({ id: params?.id }, { accessToken})
  
  if(response.errors) {
    console.info('ERROR', response )
  }
  const playlist = response.data.spotify?.playlist || {}

  return {
    props: { playlist },
  }
}

export default SongList