from flask import Flask
from models import db, CarsModel

app = Flask(__name__)


@app.route('/add')
def addCar():
    print(db)
    new_car = CarsModel(name="testName", model="testModel", doors="doors")
    db.session.add(new_car)
    db.session.commit()
    return 'Added'

@app.route('/')

def queryCar():
    print(db)
    cars = CarsModel.query.all()
    results = [
        {
            "name": car.name,
            "model": car.model,
            "doors": car.doors
        } for car in cars]
    return {"cars": results, "count": len(results)}


if __name__ == "__main__":
    app.run(port=1234)