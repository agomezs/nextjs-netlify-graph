// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
};

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  path: Array<string | number>;
  message: string;
  extensions: Record<string, unknown>;
};

export type ListPlaylists = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    /**
     * The root for Spotify queries
     */
    spotify: {
      me: {
        /**
         * The name displayed on the user’s profile. null if not available.
         */
        displayName: string;
        playlists: Array<{
          /**
           * The Spotify ID for the playlist.
           */
          id: string;
          /**
           * The name of the playlist.
           */
          name: string;
          /**
           * The playlist description. Only returned for modified, verified playlists, otherwise null.
           */
          description: string;
          /**
           * A link to the Web API endpoint providing full details of the playlist.
           */
          href: string;
          /**
           * Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See Working with Playlists. Note: If returned, the source URL for the image (url) is temporary and will expire in less than a day.
           */
          images: Array<{
            /**
             * The image height in pixels. If unknown: `null` or not returned.
             */
            height: number;
            /**
             * The source URL of the image.
             */
            url: string;
            /**
             * The image width in pixels. If unknown: `null` or not returned.
             */
            width: number;
          }>;
          /**
           * The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists
           */
          public: boolean;
        }>;
        /**
         * Information about the followers of the user.
         */
        followers: {
          /**
           * The total number of followers.
           */
          total: number;
        };
      };
    };
  };
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>;
};

/**
 * List my playlists
 */
export function fetchListPlaylists(
  /**
   * Pass `{}` as no variables are defined for this function.
   */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<ListPlaylists>;

export type ListPlaylistSongsInput = {
  /**
   * The playlist id
   */
  id?: string;
};

export type ListPlaylistSongs = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    /**
     * The root for Spotify queries
     */
    spotify: {
      playlist: {
        /**
         * The name of the playlist.
         */
        name: string;
        /**
         * The Spotify ID for the playlist.
         */
        id: string;
        tracks: Array<{
          /**
           * The Spotify ID for the track.
           */
          id: string;
          /**
           * The name of the track.
           */
          name: string;
          /**
           * The track length in milliseconds.
           */
          durationMs: number;
          /**
           * Part of the response when Track Relinking is applied. If true , the track is playable in the given market. Otherwise false.
           */
          isPlayable: boolean;
          /**
           * A link to a 30 second preview (MP3 format) of the track. Can be null
           */
          previewUrl: string;
          /**
           * The number of the track. If an album has several discs, the track number is the number on the specified disc.
           */
          trackNumber: number;
          /**
           * The album on which the track appears. The album object includes a link in href to full information about the album.
           */
          album: {
            /**
             * The cover art for the album in various sizes, widest first.
             */
            images: Array<{
              /**
               * The source URL of the image.
               */
              url: string;
              /**
               * The image height in pixels. If unknown: `null` or not returned.
               */
              height: number;
              /**
               * The image width in pixels. If unknown: `null` or not returned.
               */
              width: number;
            }>;
          };
          /**
           * The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
           */
          artists: Array<{
            /**
             * The name of the artist.
             */
            name: string;
          }>;
        }>;
      };
    };
  };
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>;
};

/**
 * An empty query to start from
 */
export function fetchListPlaylistSongs(
  variables: ListPlaylistSongsInput,
  options?: NetlifyGraphFunctionOptions
): Promise<ListPlaylistSongs>;
