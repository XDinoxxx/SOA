from db import db

class Restaurant(db.Model):
    __tablename__ = 'restaurant'
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    price_category = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    rating = db.Column(db.Float, nullable=False)