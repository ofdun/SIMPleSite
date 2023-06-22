from flask import Flask, render_template, send_file

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
    
@app.route('/list')
def list_():
    return render_template('list.html')

@app.route('/videos/glitch.mp4')
def video():
    return send_file('videos/glitch.mp4', mimetype='video/mp4')

@app.route('/videos/glitch2.mp4')
def video2():
    return send_file('videos/asdasd.mp4', mimetype='video/mp4')

if __name__ == '__main__':
    app.run()
    
