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
    '''
        gets movie ID by searching by name
    '''
    #response = requests.get('https://api.watchmode.com/v1/search/?apiKey=am5FlyMQOTybvoxxryFtkswWcNv8oADZKACwViSN&search_field=name&search_value=Back%20to%20the%20Future')
    response = requests.get(f"https://api.watchmode.com/v1/search/?apiKey={api_key}&search_field=name&search_value=Back%20to%20the%20Future")

    output = []
    for movies in response.json()['title_results']:
        output.append(movies['id'])

    return(output[0])


def getServices(title_ID):
    '''
        input is movie ID, obtained through getID()
        output is an array containing name of every streaming service that has the movie
    '''
    response = requests.get(f"https://api.watchmode.com/v1/title/{title_ID}/sources/?apiKey={api_key}")
    # print(response.json())
    
    output = []
    for services in response.json():
        output.append(services['name'])

    # return(set(output))
    return(output)

# gets urls
def getURLS(title_ID):
    '''
        input is movie ID, obtained through getID()
        output is an array containing links to every streaming service that has the movie
    '''
    response = requests.get(f"https://api.watchmode.com/v1/title/{title_ID}/sources/?apiKey={api_key}")
    # print(response.json())
    
    output = []
    for services in response.json():
        output.append(services['web_url'])

    # return(set(output))
    return(output)


# combines getServices and getURLs output to make a set that has name-link pairs
def processSources(title_ID):
    keys = getServices(title_ID)
    values = getURLS(title_ID)
    dict = {}
    for i in range(len(keys)):
        dict[keys[i]] = values[i]

    return dict
    #NOW we need to figure out how to turn this output into a set
    




# Testing
if __name__ == "__main__":
    print(getID())
    print(getServices(getID()))
    print(getURLS(getID()))
    print("this is where processSources starts")
    print(processSources(getID()))