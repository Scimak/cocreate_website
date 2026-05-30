import React, { useState } from "react";

function Admin({ base_URL }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);
  const [date, setDate] = useState("");
  const [eventOrAchievement, setEventOrAchievement] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [imageError, setImageError] = useState("");

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
    setDate("");
    setEventOrAchievement("");
    setEventImage(null);
    setImageError("");
  };

  const handleUpload = (e) => {
    e.preventDefault();

    setImageError("");

    if (eventOrAchievement.trim() !== "" && !eventImage) {
      setImageError("Please add an image for the event/achievement");
      return;
    }

    const data = new FormData();
    data.append("name", title);
    data.append("description", desc);
    data.append("date", date);

    if (eventOrAchievement) {
      data.append("eventOrAchievement", eventOrAchievement);
    }

    if (img) {
      data.append("image", img);
    }

    if (eventImage) {
      data.append("eventImage", eventImage);
    }

    fetch(base_URL + "/add_project.php", {
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
        alert("Uploaded successfully!");
        console.log(resData);
        setTitle("");
        setDesc("");
        setImg(null);
        setDate("");
        setEventOrAchievement("");
        setEventImage(null);
        setImageError("");
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach((input) => (input.value = ""));
      })
      .catch((err) => {
        console.error("Upload failed:", err);
        alert("Upload failed: " + err.message);
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
        {/* <br /> */}

        {/* <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        /> */}
        <br />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="YYYY (year the project started)"
          min="2020"
          max="2099"
          step="1"
          required
        />

        <br />

        <h3>Event/Achievement (Optional)</h3>

        <textarea
          placeholder="Optional: Describe an event and/or recall any achievements related to this project"
          value={eventOrAchievement}
          onChange={(e) => setEventOrAchievement(e.target.value)}
        />
        <br />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setEventImage(e.target.files[0])}
        />

        {imageError && (
          <p style={{ color: "red", fontSize: "0.8rem" }}>{imageError}</p>
        )}

        {eventOrAchievement.trim() !== "" && (
          <small
            style={{ color: "#fecd1f", display: "block", marginTop: "5px" }}
          >
            An image is required to be displayed on the project page.
          </small>
        )}

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
