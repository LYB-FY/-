import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { PlusOutlined, FireOutlined, HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';

// 模拟数据
const mockPosts = [
  {
    id: 1,
    user: { name: '猫咪小助手', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,avatar&width=100&height=100&random=cat_avatar_1' },
    time: '2小时前',
    content: '我家布偶猫今天学会了握手！太聪明了～',
    image: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,handshake&width=600&height=400&random=cat_handshake_1',
    likes: 24,
    comments: 8,
    isLiked: false
  },
  {
    id: 2,
    user: { name: '铲屎官日记', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,owner&width=100&height=100&random=cat_owner_1' },
    time: '5小时前',
    content: '分享一个自制猫咪玩具教程，用纸箱就能做！',
    image: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,toy,diy&width=600&height=400&random=cat_toy_1',
    likes: 142,
    comments: 31,
    isLiked: true
  },
  {
    id: 3,
    user: { name: '宠物医生王', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=veterinarian&width=100&height=100&random=veterinarian_1' },
    time: '1天前',
    content: '夏季猫咪中暑预防指南，铲屎官必看！',
    likes: 87,
    comments: 22,
    isLiked: false
  }
];

const mockTopics = [
  { id: 1, name: '#新手养猫', count: 1245 },
  { id: 2, name: '#猫咪健康', count: 892 },
  { id: 3, name: '#猫咪日常', count: 2103 },
  { id: 4, name: '#猫咪领养', count: 342 }
];

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [topics] = useState(mockTopics);

  useEffect(() => {
    // 模拟数据加载
    setPosts(mockPosts);
  }, []);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 } 
        : post
    ));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* 主内容区 */}
      <div className="md:w-2/3">
        <div className="bg-surface rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-textPrimary">最新动态</h2>
            <Link to="/create">
              <Button type="primary" icon={<PlusOutlined />} className="bg-primary border-primary hover:bg-pink-300 hover:border-pink-300">
                发布动态
              </Button>
            </Link>
          </div>
          
          <div className="space-y-6">
            {posts.map(post => (
              <PostCard key={post.id} post={post} onLike={handleLike} />
            ))}
          </div>
        </div>
      </div>
      
      {/* 侧边栏 */}
      <div className="md:w-1/3 space-y-6">
        {/* 热门话题 */}
        <div className="bg-surface rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-textPrimary flex items-center">
              <FireOutlined className="text-primary mr-2" />
              热门话题
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.map(topic => (
              <Link 
                key={topic.id} 
                to={`/topics/${topic.id}`} 
                className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm hover:bg-opacity-30 transition"
              >
                {topic.name} ({topic.count})
              </Link>
            ))}
          </div>
        </div>
        
        {/* 推荐关注 */}
        <div className="bg-surface rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-textPrimary flex items-center">
              <HeartOutlined className="text-primary mr-2" />
              推荐关注
            </h3>
          </div>
          <div className="space-y-3">
            {[
              { name: '流浪猫救助站', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,rescue&width=50&height=50&random=cat_rescue_1' },
              { name: '猫咪营养师', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,nutritionist&width=50&height=50&random=cat_nutritionist_1' },
              { name: '喵星人摄影', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,photography&width=50&height=50&random=cat_photography_1' }
            ].map((user, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
                  <span className="font-medium">{user.name}</span>
                </div>
                <Button size="small" className="border-primary text-primary hover:bg-primary hover:text-white">
                  关注
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        {/* 签到奖励 */}
        <div className="bg-surface rounded-xl shadow-sm p-4">
          <div className="text-center py-4">
            <div className="text-4xl mb-2">🐾</div>
            <h3 className="font-bold text-textPrimary mb-2">每日签到</h3>
            <p className="text-textSecondary text-sm mb-4">签到获得积分，兑换精美礼品</p>
            <Button type="primary" className="bg-primary border-primary hover:bg-pink-300 hover:border-pink-300 w-full">
              立即签到
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
