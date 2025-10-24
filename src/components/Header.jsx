import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined, UserOutlined, HomeOutlined, MessageOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-4 px-6 sticky top-0 z-10 transition-all duration-300 ease-in-out ${
      scrolled ? 'bg-white shadow-md' : 'bg-surface'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <span className="mr-2">🐱</span>
            喵友圈
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center text-textPrimary hover:text-primary">
              <HomeOutlined className="mr-1" />
              <span>首页</span>
            </Link>
            <Link to="/topics" className="flex items-center text-textPrimary hover:text-primary">
              <MessageOutlined className="mr-1" />
              <span>话题</span>
            </Link>
            <Link to="/following" className="flex items-center text-textPrimary hover:text-primary">
              <UserOutlined className="mr-1" />
              <span>关注</span>
            </Link>
            <Link to="/profile" className="flex items-center text-textPrimary hover:text-primary">
              <UserOutlined className="mr-1" />
              <span>我的</span>
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Input 
              placeholder="搜索动态、话题或用户..." 
              prefix={<SearchOutlined />} 
              className="w-64 rounded-full border-border"
            />
          </div>
          
          <Link to="/create">
            <Button 
              type="primary" 
              shape="circle" 
              icon={<PlusCircleOutlined />} 
              className="bg-primary border-primary hover:bg-pink-300 hover:border-pink-300"
            />
          </Link>
          
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
            <UserOutlined />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
