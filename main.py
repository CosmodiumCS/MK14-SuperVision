#!/bin/python3
# MK14-SuperVision
# created by : bluecosmo

# imports
import random
from flask import Flask, render_template, jsonify

app = Flask(__name__)

# main page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/transit')
def transit():
    markers = [
        {'lat': 51.5074 + random.uniform(-0.1, 0.1), 'lon': -0.1278 + random.uniform(-0.1, 0.1), 'popup': 'Camera 1'},
        {'lat': 51.5074 + random.uniform(-0.1, 0.1), 'lon': -0.1278 + random.uniform(-0.1, 0.1), 'popup': 'Bus 1'},
    ]
    return jsonify(markers)

# main code, run app
if __name__ == '__main__':
    app.run(debug=True)

