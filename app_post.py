import requests
import json

URL = "http://127.0.0.1:8000/list/"

data = {
    "username": "Ayush@123",
    "first_name":"Ayush",
    "last_name" :"parmar",
    "email" : "ayush@gmail.com",
    "password":"ayush123"
}

json_data = json.dumps(data)
r = requests.post(url=URL,data=json_data)
data1 = r.json()
print(data1)
