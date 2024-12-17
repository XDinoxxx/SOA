from flask import Flask
from flask_cors import CORS
from db import db
from routes.restaurant_route import restaurant_routes

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1703@localhost:5432/h'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db.init_app(app)

app.register_blueprint(restaurant_routes, url_prefix='/restaurant')

CORS(app)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, port=3002)