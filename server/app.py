# pip install flask
import json
from flask import Flask, render_template, request
from data.resources import modules

app = Flask(__name__)
@app.route("/")
def index(): 
    name_ = "page"
    module = ""

    with open("data/resources/content.json") as f:
        data = json.load(f)

    for char in data.get(name_, []):
        context = {
            "title": char.get("title"),
            "text": char.get("text"),
            "page_name": name_,
        }

        module_function = getattr(modules, char.get("type"), None)
        if module_function:
            module += module_function(**context)

    return render_template("index.html", modules = module)