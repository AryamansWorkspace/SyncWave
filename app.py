from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/first-time")
def first_time():
    return render_template("first_time.html")

@app.route("/mood")
def mood():
    return render_template("mood.html")

@app.route("/history")
def history():
    return render_template("history.html")

if __name__ == "__main__":
    app.run(debug=True)
