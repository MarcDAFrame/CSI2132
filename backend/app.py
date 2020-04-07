from flask import Flask
from models import cur

app = Flask(__name__)


@app.route('/')
def addCar():
    print(cur)
    cur.execute("""CREATE DATABASE databasename""")
    return 'Added'

if __name__ == "__main__":
    app.run(port=1234)