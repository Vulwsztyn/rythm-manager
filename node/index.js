// Copyright 2016 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict'

const { google } = require('googleapis')
const path = require('path')

// const {authenticate} = require('@google-cloud/local-auth');
require('dotenv').config()
const { API_KEY } = process.env
// initialize the Youtube API library
const youtube = google.youtube({ version: 'v3', auth: API_KEY })
const tmp = 'PL-4kuWpnzjL33QmUroIkWtugPr1TGLSAO'
// const tmp = 'PLqYXv_L7NiEyWdU0CBKh8FlqRc2EY4lqs'

async function main() {
  const playListRes = await youtube.playlists.list({
    part: 'snippet',
    id: tmp,
    // headers: headers,
  })
  console.log(playListRes.data.items[0].snippet.title)
  const params = {
    part: 'snippet',
    playlistId: tmp,
    maxResults: 50,
    level: 0,
  }
  async function getItems(params) {
    console.log(params.level)
    const res = await youtube.playlistItems.list(params)
    return [
      ...res.data.items,
      ...(!!res.data.nextPageToken
        ? await getItems({
            ...params,
            pageToken: res.data.nextPageToken,
            level: params.level + 1,
          })
        : []),
    ]
  }
  const arr = (await getItems(params)).map((x) => ({
    title: x.snippet.title,
    link: x.snippet.resourceId.videoId,
  }))
  level: params.level + 1,
  level: params.level + 1,
  arr.forEach((x) => console.log(x))
  const res1 = await youtube.playlistItems.list(params)
  //   console.log(res1.data.items.length)
  //   console.log(res1.data.items[0].snippet.title)
  //   const res2 = await youtube.playlistItems.list({
  //     ...params,
  //     pageToken: res1.data.nextPageToken,
  //   })
  //   console.log(res2.data.items.length)
  //   console.log(res2.data.items[0].snippet.title)
  //   console.log(!!res1.data.nextPageToken)
  //   console.log(!!res2.data.nextPageToken)
}

main()

// console.log({ API_KEY })
// // a very simple example of getting data from a playlist
// async function runSample() {
//   const auth = await authenticate({
//     keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
//     scopes: ['https://www.googleapis.com/auth/youtube'],
//   });
//   google.options({auth});

//   // the first query will return data with an etag
//   const res = await getPlaylistData(null);
//   const etag = res.data.etag;
//   console.log(`etag: ${etag}`);

//   // the second query will (likely) return no data, and an HTTP 304
//   // since the If-None-Match header was set with a matching eTag
//   const res2 = await getPlaylistData(etag);
//   console.log(res2.status);
// }

// async function getPlaylistData(etag) {
//   // Create custom HTTP headers for the request to enable use of eTags
//   const headers = {};
//   if (etag) {
//     headers['If-None-Match'] = etag;
//   }
//   const res = await youtube.playlists.list({
//     part: 'id,snippet',
//     id: 'PLIivdWyY5sqIij_cgINUHZDMnGjVx3rxi',
//     headers: headers,
//   });
//   console.log('Status code: ' + res.status);
//   console.log(res.data);
//   return res;
// }

// if (module === require.main) {
//   runSample().catch(console.error);
// }
// module.exports = runSample;
