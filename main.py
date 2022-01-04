from flask import Flask, render_template, jsonify, request
import requests
app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False  # 日本語などのASCII以外の文字列を返したい場合は、こちらを設定しておく

# http://127.0.0.1:5000/
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/jpa-form')
def jpaForm():
    return render_template("jpa-form.html")

@app.route('/jpa', methods=['GET', 'POST'])
def jpa():
    
    #GETで来た場合
    if request.method == 'GET':
        # トップページにリダイレクト
         return render_template("jpa-form.html")
    

@app.route('/japan9')
def japan9():
    return render_template("japan9.html")
  
@app.route('/japan10')
def japan10():
    return render_template("japan10.html")


if __name__ == "__main__":
    # debugモードが不要の場合は、debug=Trueを消してください
    app.run(debug=True)