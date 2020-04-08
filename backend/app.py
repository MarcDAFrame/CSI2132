from flask import Flask
from models import cur
from flask import request
from flask_cors import CORS
from flask import jsonify

app = Flask(__name__)
cors = CORS(app)


def getResult():
    try:
        result = cur.fetchall()
    except:
        result = None
    return result

@app.route('/')
def addCar():
    print(cur)
    cur.execute("""CREATE DATABASE databasename""")
    return 'Added'


@app.route('/uploadProperty')
def uploadProperty():
    data = request.json
    

@app.route('/getAvailableProperties')
def getAvailableProperties():
    print("hello world")
    cur.execute("""
        SELECT * FROM Property WHERE isOccupied=FALSE;
    """)
    result = getResult()

    return jsonify({
        "ok": True,
        "data" : result
    })

@app.route('/getProperties')
def getPropreties():
    print("hello world")
    cur.execute("""
        SELECT * FROM Property;
    """)
    result = getResult()

    return jsonify({
        "ok": True,
        "data" : result
    })

@app.route('/admin/runSQL', methods=["POST"])
def runSQL():
    # serializing direct sql commands isn't important right?
    print("MR BEAST")
    print(request.json)
    try:
        cur.execute(request.json['statement'])
    except Exception as e: 
        print("error", e)
        return jsonify({
            "ok" : False,
            "message" : str(e)
        })
    result = getResult()
    print(result)
    return jsonify({
        "ok" : True,
        "data" : result
    })



if __name__ == "__main__":
    app.run(port=1234)