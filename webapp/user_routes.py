from app import db, ma, app, cross_origin, request


class Users(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_email = db.Column(db.String(255), unique=True)
    name = db.Column(db.Text)

    def __init__(self, email, name):
        self.user_email = email
        self.name = name


class UserSchema(ma.Schema):
    class Meta:
        fields = ('user_id', "user_email", "name")


user_schema = UserSchema()
users_schema = UserSchema(many=True)


@app.route('/users', methods=['POST'])
@cross_origin()
def add_user():
    user_email = request.json['user_email']
    name = request.json['name']
    new_user = Users(user_email, name)
    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user)


@app.route('/users/byEmail/<email>', methods=['GET'])
@cross_origin()
def get_user_by_email(email):
    user = Users.query.filter(Users.user_email == email).first()
    return user_schema.jsonify(user)