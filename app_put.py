import requests
import json

URL = "http://127.0.0.1:8000/list/"
data = {
    'id': 2,
    "username": "parmar@123",
    "first_name":"parmar",
    "last_name" :"Ayush",
    "email" : "parmarsahab@gmail.com",
    "password":"ayush123"
    }
json_data = json.dumps(data)
r = requests.put(url = URL, data = json_data)
data = r.json()
print(data)