import React, { useState } from "react";

function Admin() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const VALID_USERNAME = "admin";
  const VALID_PASSWORD = "password123";
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setIsLoggedIn(true);
      setLoginError("");
      setUsername("");
      setPassword("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setTitle("");
    setDesc("");
    setImg(null);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", title);
    data.append("description", desc);

    if (img) {
      data.append("image", img);
    }

    fetch("", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Upload failed: " + res.status);
        }
        return res.json();
      })
      .then((resData) => {
        alert("uploaded ok!");
        console.log(resData);
        setTitle("");
        setDesc("");
        setImg(null);
      })
      .catch((err) => {
        console.error("upload failed:", err);
      });
  };
  if (!isLoggedIn) {
    return (
      <div className="admin">
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          {loginError && <p style={{ color: "red" }}>{loginError}</p>}

          <div className="adminButton">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="admin">
      <form onSubmit={handleUpload}>
        <h2>Add New Project</h2>

        <input
          type="text"
          placeholder="Project Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        {/* should there be a word count */}
        <textarea
          placeholder="Project Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <br />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
          required
        />
        <br />
        <div className="adminButton">
          <button type="submit">Submit Project</button>
        </div>
      </form>
      <div className="adminButton">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Admin;
