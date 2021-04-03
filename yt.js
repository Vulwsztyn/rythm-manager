const { google } = require('googleapis')

class YT {
  constructor(qs, API_KEY) {
    this.youtube = google.youtube({ version: 'v3', auth: API_KEY })
    this.qs = qs
  }

  async getItems(params) {
    const res = await this.youtube.playlistItems.list(params)
    return [
      ...res.data.items,
      ...(!!res.data.nextPageToken
        ? await this.getItems({
            ...params,
            pageToken: res.data.nextPageToken,
          })
        : []),
    ]
  }

  async getList(listIdRaw) {
    const listId = this.qs.parse(listIdRaw).list || listIdRaw
    const playlistRes = await this.youtube.playlists.list({
      part: 'snippet',
      id: listId,
    })
    if (playlistRes.data.items.length < 1) {
      return {}
    }
    const params = {
      part: 'snippet',
      playlistId: listId,
      maxResults: 50,
    }
    const items = await this.getItems(params)
    return {
      title: playlistRes.data.items[0].snippet.title,
      items: items.map((x) => ({
        title: x.snippet.title,
        link: x.snippet.resourceId.videoId,
      })),
    }
  }
}
module.exports = {
  YT,
}
