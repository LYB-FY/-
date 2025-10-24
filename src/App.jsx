import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Following from './pages/Following';
import Profile from './pages/Profile';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-base">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/following" element={<Following />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
