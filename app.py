from flask import Flask, current_app, jsonify, redirect, url_for, render_template, request
import requests
from dotenv import load_dotenv
import os
from ordered_set import OrderedSet
import json
from flask_cors import CORS


load_dotenv()

api_key = os.getenv("API_KEY")

def myEnvironment():
    print(f'My id is: {api_key}.')

#print(f"my api key is {api_key}")

# if __name__ == "__main__":
#     myEnvironment()

def getID(movie_name):
    '''
        gets movie ID by searching by name
    '''

    # response = requests.get(f"https://api.watchmode.com/v1/search/?apiKey={api_key}&search_field=name&search_value=Back%20to%20the%20Future")
    response = requests.get(f"https://api.watchmode.com/v1/search/?apiKey={api_key}&search_field=name&search_value={movie_name}")

    output = []
    for movies in response.json()['title_results']:
        output.append(movies['id'])

    # print("this is movie name: ", movie_name)

    return(output[0])


def getServices(title_ID):
    '''
        input is movie ID, obtained through getID()
        output is an array containing name of every streaming service that has the movie
    '''
    response = requests.get(f"https://api.watchmode.com/v1/title/{title_ID}/sources/?apiKey={api_key}")
    # print(response.json())

    # print("this is the ID: ", title_ID)
    
    output = []
    for services in response.json():
        output.append(services['name'])

    # return(set(output))
    # print("this is the output", output)
    return(OrderedSet(output))

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
    # print("these are the links", output)
    return(OrderedSet(output))


# combines getServices and getURLs output to make a set that has name-link pairs
def processSources(title_ID):
    keys = getServices(title_ID)
    values = getURLS(title_ID)
    output = {}
    for i in range(len(keys)):
        output[keys[i]] = values[i]

    return jsonify(output)
    


# # Flask testing
# def app_context():
#     app = Flask(__name__)
#     CORS(app)
#     app.run(port=5000, debug=False, threaded=True)
#     with app.app_context():
#         # print(processSources(getID()))
#         @app.route('/GetStreamingServices/', methods=['POST'])
#         # @app.route('/GetStreamingServices/', methods=['GET', 'POST'])
#         def GetStreamingServices():
#             print(request.form.get('movieName'))
#             movie_name = request.form.get('movieName')
#             response = processSources(getID(movie_name))
#             response.headers.add('Access-Control-Allow-Origin', '*')
#             return response
#     # app.run(port=5000, debug=False)


    # app.run(host='0.0.0.0', port=2999)

# WHAT WILL ACTUALLY GET FLASK TO WORK:
app = Flask(__name__)
CORS(app)
# app.run(port=5111, debug=False, threaded=True)
# print(processSources(getID()))
@app.route('/GetStreamingServices/', methods=['POST', 'GET'])
        # @app.route('/GetStreamingServices/', methods=['GET', 'POST'])
def GetStreamingServices():
    print("this is movie name from client-side", request.form.get('movieName'))
    movie_name = request.form.get('movieName')
    response = processSources(getID(movie_name))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
    # app.run(port=5000, debug=False)


# Testing
# if __name__ == "__main__":
    # print(getID())
    # print(getServices(getID()))
    # print(getURLS(getID()))
    # print("this is where processSources starts")
    # print(processSources(getID()))
    # app_context()
    
