from flask import Flask
from flask import request
from flask import render_template

import os
import json

app = Flask(__name__, template_folder='./', static_folder='./')

@app.route('/experiment')
def experiment():
    return render_template('experiment.html')

@app.route('/save_data', methods=['POST'])
def save_data():
    data = request.get_json()
    user_id = data.get('user_id', '')
    results = data.get('data', {})
    print(user_id, results)
    with open(os.path.join('data', user_id + '.json'), 'w') as f:
        f.write(results)
    
    return json.dumps({'success': True}), 200, {'ContentType':'application/json'}