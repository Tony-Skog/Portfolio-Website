import os

from bson import ObjectId
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo

load_dotenv()

mongo_uri = os.environ.get("MONGO_URI", "").strip()
db_name = os.environ.get("MONGO_DB_NAME", "portfolio").strip()

if not mongo_uri:
    raise SystemExit(
        "MONGO_URI is not set.\n"
        "Copy backend/.env.example to backend/.env and paste your MongoDB Atlas "
        "connection string into MONGO_URI."
    )

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = mongo_uri

try:
    mongo = PyMongo(app, serverSelectionTimeoutMS=5000)
except Exception as exc:
    raise SystemExit(f"Could not connect to MongoDB.\n{exc}") from exc


def get_db():
    return mongo.cx[db_name]


@app.route("/api/hello")
def hello():
    return jsonify(message="Hello from Flask")


@app.route("/api/health")
def health():
    try:
        mongo.cx.admin.command("ping")
        return jsonify(status="ok", database=db_name)
    except Exception as exc:
        return jsonify(status="error", message=str(exc)), 500


@app.route("/api/projects")
def projects():
    try:
        docs = get_db().projects.find({}, {"_id": 0})
        return jsonify(items=list(docs))
    except Exception as exc:
        return jsonify(status="error", message=str(exc)), 500


@app.route("/api/projects", methods=["POST"])
def add_project():
    body = request.get_json(silent=True) or {}
    if not body:
        return jsonify(status="error", message="Request body is required"), 400

    result = get_db().projects.insert_one(body)
    return jsonify(status="created", id=str(result.inserted_id)), 201


@app.route("/api/projects/<project_id>", methods=["DELETE"])
def delete_project(project_id):
    if not ObjectId.is_valid(project_id):
        return jsonify(status="error", message="Invalid project id"), 400

    result = get_db().projects.delete_one({"_id": ObjectId(project_id)})
    if result.deleted_count == 0:
        return jsonify(status="error", message="Project not found"), 404

    return jsonify(status="deleted")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
