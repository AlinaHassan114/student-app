from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient("mongodb://db:27017/")
db = client["studentdb"]
students = db["students"]

@app.route('/student/<reg_no>')
def get_student(reg_no):
    student = students.find_one({"reg_no": reg_no}, {"_id": 0})
    if student:
        return jsonify(student)
    else:
        return jsonify({"error": "Student not found"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000 , debug=True)
