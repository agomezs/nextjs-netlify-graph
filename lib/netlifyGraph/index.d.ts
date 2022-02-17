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
           * The name of the playlist.
           */
          name: string;
          /**
           * The object type: “playlist”
           */
          type: string;
          /**
           * The playlist description. Only returned for modified, verified playlists, otherwise null.
           */
          description: string;
          /**
           * true if the owner allows other users to modify the playlist.
           */
          collaborative: boolean;
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
           * The Spotify ID for the playlist.
           */
          id: string;
          /**
           * A link to the Web API endpoint providing full details of the playlist.
           */
          href: string;
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
 * An example query to start with.
 */
export function fetchListPlaylists(
  /**
   * Pass `{}` as no variables are defined for this function.
   */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<ListPlaylists>;
