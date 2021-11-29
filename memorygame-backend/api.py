from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
db.init_app(app)

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    score = db.Column(db.Integer)
    
    def __init__(self, score):
        self.score = score


def game_serializer(game):
    return {
        'id':game.id,
        'score':game.score
    }

@app.route('/api', methods=["GET"])
def index():
    return jsonify([*map(game_serializer, Game.query.all())])

@app.route('/api/add', methods=["POST"])
def add():
    request_data =json.loads(request.data)
    game_score = Game(request_data['score'])
    db.session.add(game_score)
    db.session.commit()
    db.session.close()

@app.route('/api/delete', methods=['DELETE'])
def delete():
    game_score = Game.query.all()
    db.session.query(Game).delete()
    db.session.commit()
    db.session.close()

if __name__ == "__main__":
    app.run(debug=True)