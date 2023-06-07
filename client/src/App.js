import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import Discussions from "./Pages/Discussions.js";
import AddDiscussion from "./Pages/AddDiscussion.js";
import DiscussionDetail from "./Components/DiscussionDetail";
import SearchDiscussion from "./Pages/SearchDiscussion.js";

import Notices from "./Components/Notices";

import "./App.css";
import "./global-style.css";

const App = (props) => {
  const [discussions, setDiscussions] = useState([]);

  // 새로운 토론을 추가하는 함수
  const addDiscussion = (newDiscussion) => {
    setDiscussions([newDiscussion, ...discussions]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Sidebar />
          <section className="features">
            <Routes>
              <Route
                path="/"
                element={<Discussions discussions={discussions} />}
              />
              <Route
                path="/discussions"
                element={<Discussions discussions={discussions} />}
              />
              <Route path="/discussions/:id" element={<DiscussionDetail />} />
              <Route
                path="/discussions/Add"
                element={<AddDiscussion onAddDiscussion={addDiscussion} />}
              />
              <Route
                path="/discussions/search"
                element={<SearchDiscussion discussions={discussions} />}
              />
              <Route
                path="/discussions/notices"
                element={<Notices discussions={discussions} />}
              />
            </Routes>
          </section>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
