# import Sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template
from config import user, pw, port
import pandas as pd


# Create engine
engine = create_engine(f'postgresql://{user}:{pw}@localhost:{port}/slam_dunk_analytics_db')
connection = engine.connect()

app = Flask(__name__)

# Home page
@app.route("/")
@app.route("/index.html")
def home():
    print("Server received request for 'Home' page...")
    return render_template("index.html")

@app.route("/3yearsdata")
def visualizationsall():
    sql = """
    SELECT * FROM combined WHERE draft_year > 2016 AND draft_year < 2020 AND pick is not NULL
    """

    print(sql)
    results = pd.read_sql(sql, connection)
    return jsonify(results.to_dict("data"))

@app.route("/2017data")
def visualizations2017():
    sql = """
    SELECT * FROM combined WHERE draft_year = 2017 AND pick is not NULL
    """

    print(sql)
    results = pd.read_sql(sql, connection)
    return jsonify(results.to_dict("data"))

@app.route("/2018data")
def visualizations2018():
    sql = """
    SELECT * FROM combined WHERE draft_year = 2018 AND pick is not NULL
    """

    print(sql)
    results = pd.read_sql(sql, connection)
    return jsonify(results.to_dict("data"))

@app.route("/2019data")
def visualizations2019():
    sql = """
    SELECT * FROM combined WHERE draft_year = 2019 AND pick is not NULL
    """

    print(sql)
    results = pd.read_sql(sql, connection)
    return jsonify(results.to_dict("data"))


if __name__ == "__main__":
    app.run(debug=True)