import React from 'react';
import { Link } from 'react-router-dom';
import { HeartOutlined, MessageOutlined, HeartFilled } from '@ant-design/icons';

const PostCard = ({ post, onLike }) => {
  return (
    <div className="bg-surface rounded-xl shadow-sm overflow-hidden border border-border">
      {/* 用户信息 */}
      <div className="p-4 flex items-center">
        <img 
          src={post.user.avatar} 
          alt={post.user.name} 
          className="w-10 h-10 rounded-full mr-3 border-2 border-primary"
        />
        <div>
          <div className="font-bold">{post.user.name}</div>
          <div className="text-textSecondary text-sm">{post.time}</div>
        </div>
      </div>
      
      {/* 内容 */}
      <div className="px-4 pb-3">
        <p className="text-textPrimary">{post.content}</p>
      </div>
      
      {/* 图片 */}
      {post.image && (
        <div className="px-4 pb-3">
          <img 
            src={post.image} 
            alt="post" 
            className="w-full h-auto rounded-lg object-cover max-h-96"
          />
        </div>
      )}
      
      {/* 互动按钮 */}
      <div className="px-4 py-3 border-t border-border flex items-center justify-between">
        <button 
          onClick={() => onLike(post.id)}
          className={`flex items-center ${post.isLiked ? 'text-red-500' : 'text-textSecondary'} hover:text-red-500`}
        >
          {post.isLiked ? <HeartFilled /> : <HeartOutlined />}
          <span className="ml-1">{post.likes}</span>
        </button>
        
        <Link 
          to={`/post/${post.id}`} 
          className="flex items-center text-textSecondary hover:text-primary"
        >
          <MessageOutlined className="mr-1" />
          <span>{post.comments} 条评论</span>
        </Link>
        
        <button className="text-textSecondary hover:text-primary">
          分享
        </button>
      </div>
    </div>
  );
};

export default PostCard;
