import webview
import threading
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/Editor")
def editor():
    return render_template("editor.html")

@app.route("/View-tabels")
def view_tabels():
    return render_template("view-tabels.html")

def run_flask():
    app.run(debug=False, use_reloader=False)

if __name__ == "__main__":
    # app.run(debug=True)
    flask_thread = threading.Thread(target=run_flask)
    flask_thread.start()

    webview.create_window("QueriFlow", "http://127.0.0.1:5000", width=1920, height=1080)
    webview.start()
