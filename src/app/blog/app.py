from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  

DB_PATH = "blog.db"

def get_blog_posts():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row  
    cursor = conn.cursor()
    
    rows = cursor.execute("SELECT id, title, description AS content, author FROM blogposts")
    
    posts = [dict(row) for row in rows]  
    conn.close()
    return posts

@app.route("/api/blog", methods=["GET"])
def get_blog():
    posts = get_blog_posts()
    return jsonify(posts)

@app.route("/api/blog", methods=["POST"])
def create_blog():
    """Add a new blog post."""
    data = request.get_json()
    title = data.get("title")
    content = data.get("content")
    author = data.get("author")
    
    if not title or not content or not author:
        return 400
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO blogposts (title, description, author) VALUES (?, ?, ?)",
        (title, content, author)
    )
    conn.commit()
    conn.close()
    
    return jsonify({
        "title": title,
        "content": content,
        "author": author
    }), 200

if __name__ == "__main__":
    app.run(debug=True)
