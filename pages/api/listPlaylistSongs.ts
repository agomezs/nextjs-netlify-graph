import type { NextApiRequest, NextApiResponse } from "next";
const NetlifyGraph = require("../../lib/netlifyGraph");

exports.handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // By default, all API calls use no authentication
  let accessToken = null;

  //// If you want to use the client's accessToken when making API calls on the user's behalf:
  // accessToken = req.headers["authorization"]?.split(" ")[1];

  //// If you want to use the API with your own access token:
  accessToken = process.env.ONEGRAPH_AUTHLIFY_TOKEN;

  const eventBodyJson = req.body || {};

  const id = eventBodyJson?.id;

  const { errors, data } = await NetlifyGraph.fetchListPlaylistSongs(
    { id: id },
    { accessToken: accessToken }
  );

  if (errors) {
    console.error(JSON.stringify(errors, null, 2));
  }

  console.log(JSON.stringify(data, null, 2));

  res.setHeader("Content-Type", "application/json");

  return res.status(200).json({
    errors,
    data,
  });
};

// exports.default = exports.handler;

export default exports.handler

/**
 * Client-side invocations:
 * Call your Netlify function from the browser with this helper:
 */

/**
async function fetchListPlaylistSongs(netlifyGraphAuth, params) {
  const {id} = params || {};
  const resp = await fetch(`/api/listPlaylistSongs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    ...netlifyGraphAuth?.authHeaders()
    },
    body: JSON.stringify({"id": id})
  });

  const text = await resp.text();

  return JSON.parse(text);
}
*/
