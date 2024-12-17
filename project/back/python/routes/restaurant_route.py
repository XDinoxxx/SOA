from flask import Blueprint, request, jsonify
from models import Restaurant
from db import db

restaurant_routes = Blueprint('restaurants', __name__)

@restaurant_routes.route('/', methods=['GET'])
def get_restaurant():
    restaurants = Restaurant.query.all()
    return jsonify([{
        'id': restaurant.id,
        'name': restaurant.name,
        'description': restaurant.description,
        'price_category': restaurant.price_category,
        'city': restaurant.city,
        'address': restaurant.address,
        'rating': restaurant.rating
    } for restaurant in restaurants])