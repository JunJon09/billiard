from flask import Flask, render_template, jsonify, request, abort
app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False  # 日本語などのASCII以外の文字列を返したい場合は、こちらを設定しておく

# http://127.0.0.1:5000/
# @app.route('/')
# def index():
#     return render_template("index.html")

@app.route('/')
def jpaForm():
    return render_template("jpa-form.html")

@app.route('/jpa', methods=['GET', 'POST'])
def jpa():
    
    #GETで来た場合
    if request.method == 'GET':
        # トップページにリダイレクト
         return render_template("jpa-form.html")
    elif request.method == 'POST':
        myName = request.form['myName']
        myLevel = request.form['mySkillLevel']
        yourName = request.form['yourName']
        yourLevel = request.form['yourSkillLevel']
        myMore = myLevel[2:-1]
        yourMore = yourLevel[2:-1]
        print(myMore)
        return render_template("jpa.html", myName=myName, myLevel=myLevel, yourLevel=yourLevel, yourName=yourName, myMore=myMore, yourMore=yourMore)
    else:
        return abort(400)

@app.route('/japan9')
def japan9():
    return render_template("japan9.html")
  
@app.route('/japan10')
def japan10():
    return render_template("japan10.html")


if __name__ == "__main__":
    # debugモードが不要の場合は、debug=Trueを消してください
    app.run(debug=True)