import requests

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

def getID():
    response = requests.get("https://api.watchmode.com/v1/search/?apiKey=am5FlyMQOTybvoxxryFtkswWcNv8oADZKACwViSN&search_field=name&search_value=Back%20to%20the%20Future")
    
    output = []
    for movies in response.json()['title_results']:
        output.append(movies['id'])

    return(output)

# write function that finds streaming services




# Testing
if __name__ == "__main__":
    getID()