import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Discussions from "./Pages/Discussions";

function App() {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/discussions", { method: "GET" })
      .then((res) => res.json())
      .then((json) => setDiscussions(json));
  }, []);

  return (
    <BrowserRouter>
      <div>
        <div className="App">
          <Navbar />
          <main>
            <Sidebar />
            <section className="features">
              <Routes>
                <Route path="/" element={<Discussions data={discussions} />} />
              </Routes>
            </section>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
