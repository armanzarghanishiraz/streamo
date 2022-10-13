import requests
from dotenv import load_dotenv
import os

'''
#import requests

def get_data()
    response = requests.get("insert querty")
    api_key = 'am5FlyMQOTybvoxxryFtkswWcNv8oADZKACwViSN'
    {"authorization": api_key})

    res = []

    for p in response.jason()['photos']:
        res.append(p['src']['original'])

    print(res)

'''
# import urllib.request
# import json
# with urllib.request.urlopen("https://api.watchmode.com/v1/search/?apiKey=am5FlyMQOTybvoxxryFtkswWcNv8oADZKACwViSN&search_field=name&search_value=Ed%20Wood") as url:
#     data = json.loads(url.read().decode())
#     print(data)

load_dotenv()

api_key = os.getenv("API_KEY")

def myEnvironment():
    print(f'My id is: {api_key}.')

#print(f"my api key is {api_key}")

if __name__ == "__main__":
    myEnvironment()

def getID():
    #response = requests.get('https://api.watchmode.com/v1/search/?apiKey=am5FlyMQOTybvoxxryFtkswWcNv8oADZKACwViSN&search_field=name&search_value=Back%20to%20the%20Future')
    response = requests.get(f"https://api.watchmode.com/v1/search/?apiKey={api_key}&search_field=name&search_value=Back%20to%20the%20Future")

    output = []
    for movies in response.json()['title_results']:
        output.append(movies['id'])

    return(output[0])

# write function that finds streaming services


def getServices(title_ID):
    response = requests.get(f"https://api.watchmode.com/v1/title/{title_ID}/sources/?apiKey={api_key}")
    # print(response.json())
    
    output = []
    for services in response.json():
        output.append(services['name'])

    return(set(output))

# gets urls
def getURLS(title_ID):
    response = requests.get(f"https://api.watchmode.com/v1/title/{title_ID}/sources/?apiKey={api_key}")
    # print(response.json())
    
    output = []
    for services in response.json():
        output.append(services['web_url'])

    return(set(output))


# combines getIDs and getServices output
# def processSources():
    




# Testing
if __name__ == "__main__":
    print(getID())
    print(getServices(getID()))
    print(getURLS(getID()))