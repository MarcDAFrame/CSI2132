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


@app.route('/uploadProperty', methods=["POST"])
def uploadProperty():
    data = request.json
    print(data)
    try:

        cur.execute("""
            INSERT INTO Property (hostID, accommodationType, roomType, maxGuests, numBathrooms, numBedrooms, numBeds, pricing, isOccupied, rules)
            VALUES (%(hostID)s, %(accommodationType)s, %(roomType)s, %(maxGuests)s, %(numBathrooms)s, %(numBedrooms)s, %(numBeds)s, %(pricing)s, %(isOccupied)s, %(rules)s) RETURNING propertyID;
        """, data)
    except Exception as e: 
        print(e)
        return jsonify({
            "ok" : False,
            "message" : str(e)
        })
    # propertyID = cur.fetchone()[0]

    return jsonify({
        "ok": True,
        "message" : "successfully added"
    })


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