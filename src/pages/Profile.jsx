import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EditOutlined, SettingOutlined, CameraOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import PostCard from '../components/PostCard';

const mockUser = {
  name: '铲屎官小王',
  avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,owner&width=150&height=150&random=cat_owner_profile_1',
  bio: '资深猫咪铲屎官，养猫5年，喜欢分享猫咪日常和养猫经验',
  posts: 42,
  followers: 128,
  following: 56
};

const mockPosts = [
  {
    id: 201,
    user: { name: '铲屎官小王', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,owner&width=100&height=100&random=cat_owner_profile_1' },
    time: '1小时前',
    content: '我家猫咪今天第一次成功抓到玩具老鼠，太兴奋了！',
    image: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,play&width=600&height=400&random=cat_play_1',
    likes: 32,
    comments: 5,
    isLiked: true
  },
  {
    id: 202,
    user: { name: '铲屎官小王', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,owner&width=100&height=100&random=cat_owner_profile_1' },
    time: '3天前',
    content: '分享我家猫咪最喜欢的零食排行榜',
    likes: 56,
    comments: 12,
    isLiked: false
  }
];

const Profile = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 } 
        : post
    ));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-surface rounded-xl shadow-sm p-6 mb-6">
        {/* 用户信息卡片 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="relative">
            <img 
              src={mockUser.avatar} 
              alt={mockUser.name} 
              className="w-32 h-32 rounded-full border-4 border-primary"
            />
            <button className="absolute bottom-2 right-2 bg-primary text-white rounded-full p-2 hover:bg-pink-400">
              <CameraOutlined />
            </button>
          </div>
          
          <div className="flex-grow text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h1 className="text-2xl font-bold text-textPrimary">{mockUser.name}</h1>
              <div className="flex gap-2">
                <Button icon={<EditOutlined />}>编辑资料</Button>
                <Button icon={<SettingOutlined />}>设置</Button>
              </div>
            </div>
            
            <p className="text-textSecondary mb-4">{mockUser.bio}</p>
            
            <div className="flex justify-center md:justify-start gap-6">
              <div className="text-center">
                <div className="font-bold text-lg">{mockUser.posts}</div>
                <div className="text-textSecondary">动态</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{mockUser.followers}</div>
                <div className="text-textSecondary">粉丝</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{mockUser.following}</div>
                <div className="text-textSecondary">关注</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 用户动态 */}
        <div>
          <h2 className="text-xl font-bold text-textPrimary mb-4">我的动态</h2>
          
          {posts.length > 0 ? (
            <div className="space-y-6">
              {posts.map(post => (
                <PostCard key={post.id} post={post} onLike={handleLike} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🐾</div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">还没有发布动态</h3>
              <p className="text-textSecondary mb-6">分享你的猫咪日常，让更多人看到</p>
              <Link to="/create">
                <Button type="primary" className="bg-primary border-primary hover:bg-pink-300 hover:border-pink-300">
                  发布第一条动态
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
