import googleapiclient.discovery
from urllib.parse import parse_qs, urlparse

# settings.py
from dotenv import load_dotenv
load_dotenv()

# OR, the same with increased verbosity
load_dotenv(verbose=True)

# OR, explicitly providing path to '.env'
from pathlib import Path  
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

import os
API_KEY = os.getenv("API_KEY")

import sys


#extract playlist id from url
url = 'https://www.youtube.com/playlist?list={}'.format(sys.argv[1])
print(url)
query = parse_qs(urlparse(url).query, keep_blank_values=True)
playlist_id = query["list"][0]

print(f'get all playlist items links from {playlist_id}')
youtube = googleapiclient.discovery.build("youtube", "v3", developerKey = API_KEY)

request = youtube.playlists().list(
    part = "snippet",
    id = playlist_id,
    # maxResults = 50
)
response = request.execute()
# for key, value in response.items():
#     print(key)
#     print(key, '->', value)
print(response['items'][0]['snippet']['title'])
    

request = youtube.playlistItems().list(
    part = "snippet",
    playlistId = playlist_id,
    maxResults = 50
)
response = request.execute()

playlist_items = []
while request is not None:
    response = request.execute()
    playlist_items += response["items"]
    # for key, value in response.items():
    #     print(key)
    #     print(key, '->', value)
    request = youtube.playlistItems().list_next(request, response)
print(f"total: {len(playlist_items)}")
for t in playlist_items:
    # print(
    #     f'https://www.youtube.com/watch?v={t["snippet"]["resourceId"]["videoId"]}&list={playlist_id}&t=0s'
    #     )
    # for key, value in t["snippet"].items():
    #     print(key, '->', value)
    # print('-------------------------------')
    # for key, value in t.items():
    #     print(key, '->', value)
    print ('-- {} - {}'.format(' '.join(x.capitalize() for x in t["snippet"]['title'].split(' ')),t["snippet"]["resourceId"]["videoId"]))
    # print(t["snippet"]['title'].split(' '))