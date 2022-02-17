import { ListPlaylistSongs } from "../lib/netlifyGraph"

export type PlaylistTacks = ListPlaylistSongs["data"]["spotify"]["playlist"]
export type Track = PlaylistTacks["tracks"][0]