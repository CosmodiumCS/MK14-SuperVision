#!/bin/python3
# MK14-SuperVision
# created by : bluecosmo

# imports
import os
import requests
import xmltodict
from dotenv import load_dotenv
from flask import Flask, render_template, jsonify

# environment variables
load_dotenv()
CTA_KEY = os.getenv("CTA_KEY")

app = Flask(__name__)

# main page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/transit')
def transit():
    cta_routes_url = f'http://www.ctabustracker.com/bustime/api/v2/getroutes?key={CTA_KEY}'
    cta_bus_url = f'http://ctabustracker.com/bustime/api/v2/getvehicles?key={CTA_KEY}&rt='
    vehicles_info = []

    try:
        response = requests.get(cta_routes_url)
        response.raise_for_status()  # Raise an exception for bad responses

        xml_dict = xmltodict.parse(response.content)
        rt_numbers = [str(route['rt']) for route in xml_dict.get('bustime-response', {}).get('route', [])]

        for route in rt_numbers:
            bus_url = cta_bus_url + str(route)
            cta_bus = requests.get(bus_url)
            cta_bus_json = xmltodict.parse(cta_bus.content)

            # works up to here :)
            vehicles = cta_bus_json.get('bustime-response', {}).get('vehicle', [])
            if isinstance(vehicles, dict): 
                vehicles = [vehicles]

            for vehicle in vehicles:
                vid = int(vehicle.get('vid'))
                lat = float(vehicle.get('lat'))
                lon = float(vehicle.get('lon'))
                vehicles_info.append({'vid': vid, 'lat': lat, 'lon': lon})

        return jsonify(vehicles_info)

    except requests.exceptions.RequestException as e:
        # Handle request exceptions (e.g., connection error, timeout)
        return jsonify({'error': str(e)}), 500  # Return an error response with HTTP status code 500

    except xmltodict.expat.ExpatError as e:
        # Handle XML parsing errors
        return jsonify({'error': 'Error parsing XML: ' + str(e)}), 500  # Return an error response with HTTP status code 500

# main code, run app
if __name__ == '__main__':
    app.run(debug=True)

