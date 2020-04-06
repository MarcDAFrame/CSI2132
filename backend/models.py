from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

app = Flask(__name__)
# POSTGRES_USER
# POSTGRES_PW
POSTGRES_URL = "127.0.0.1:54320"
POSTGRES_DB = "CSI2132_Postgres_container"
DB_URL = 'postgresql://{url}/{db}'.format(url=POSTGRES_URL,db=POSTGRES_DB)

# engine = create_engine(DB_URL)
# connection = engine.connect()
# cur = connection.cursor()

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
app.config['SQLALCHEMY_DATABASE_URI'] = DB_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
db = SQLAlchemy(app)


class CarsModel(db.Model):
    __tablename__ = 'cars'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    model = db.Column(db.String())
    doors = db.Column(db.Integer())

    def __init__(self, name, model, doors):
        self.name = name
        self.model = model
        self.doors = doors

    def __repr__(self):
        return f"<Car {self.name}>"