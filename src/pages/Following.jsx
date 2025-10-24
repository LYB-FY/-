import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

// 模拟关注的用户动态
const mockFollowingPosts = [
  {
    id: 101,
    user: { name: '猫咪摄影师', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,photographer&width=100&height=100&random=cat_photographer_1' },
    time: '30分钟前',
    content: '今天拍了一组布偶猫的写真，太美了！',
    image: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,photoshoot&width=600&height=400&random=cat_photoshoot_1',
    likes: 128,
    comments: 24,
    isLiked: true
  },
  {
    id: 102,
    user: { name: '流浪猫救助站', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,rescue&width=100&height=100&random=cat_rescue_2' },
    time: '2小时前',
    content: '新救助的三只小猫正在寻找爱心家庭，有意者请联系。',
    image: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,rescue,babies&width=600&height=400&random=cat_rescue_babies_1',
    likes: 87,
    comments: 15,
    isLiked: false
  }
];

const Following = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 模拟数据加载
    setPosts(mockFollowingPosts);
  }, []);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 } 
        : post
    ));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-surface rounded-xl shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-textPrimary mb-6">我关注的动态</h1>
        
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map(post => (
              <PostCard key={post.id} post={post} onLike={handleLike} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🐾</div>
            <h3 className="text-xl font-bold text-textPrimary mb-2">还没有关注任何人</h3>
            <p className="text-textSecondary mb-6">关注一些用户，查看他们的最新动态</p>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-pink-400 transition">
              去发现用户
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Following;
