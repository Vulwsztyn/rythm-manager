import requests
from bs4 import BeautifulSoup

URL = 'https://www.youtube.com/watch?v=W6NsXPIL7II&list=OLAK5uy_kD7uoFSxpamkuVzFGNdqdOFlome-NKF8o'
page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
results = soup.find(id='playlist')
print(results)

# 'container'