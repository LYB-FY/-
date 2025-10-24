import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeartOutlined, MessageOutlined, HeartFilled, SendOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

const mockPost = {
  id: 1,
  user: { name: '猫咪小助手', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,avatar&width=100&height=100&random=cat_avatar_2' },
  time: '2小时前',
  content: '我家布偶猫今天学会了握手！太聪明了～',
  image: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,handshake&width=600&height=400&random=cat_handshake_2',
  likes: 24,
  comments: 8,
  isLiked: false
};

const mockComments = [
  {
    id: 1,
    user: { name: '铲屎官日记', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,owner&width=50&height=50&random=cat_owner_comment_1' },
    time: '1小时前',
    content: '太聪明了！我家猫咪什么时候能学会呢？'
  },
  {
    id: 2,
    user: { name: '猫咪营养师', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=cat,nutritionist&width=50&height=50&random=cat_nutritionist_comment_1' },
    time: '45分钟前',
    content: '握手是个不错的训练项目，有助于增进人猫感情！'
  }
];

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(mockPost);
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setPost({
      ...post,
      isLiked: !post.isLiked,
      likes: post.isLiked ? post.likes - 1 : post.likes + 1
    });
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const comment = {
        id: comments.length + 1,
        user: { name: '当前用户', avatar: 'https://www.weavefox.cn/api/bolt/unsplash_image?keyword=user,avatar&width=50&height=50&random=user_avatar_1' },
        time: '刚刚',
        content: newComment
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-surface rounded-xl shadow-sm overflow-hidden mb-6">
        {/* 用户信息 */}
        <div className="p-4 flex items-center">
          <img 
            src={post.user.avatar} 
            alt={post.user.name} 
            className="w-12 h-12 rounded-full mr-3 border-2 border-primary"
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
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}
        
        {/* 互动按钮 */}
        <div className="px-4 py-3 border-t border-border flex items-center justify-between">
          <button 
            onClick={handleLike}
            className={`flex items-center ${post.isLiked ? 'text-red-500' : 'text-textSecondary'} hover:text-red-500`}
          >
            {post.isLiked ? <HeartFilled /> : <HeartOutlined />}
            <span className="ml-1">{post.likes} 赞</span>
          </button>
          
          <button className="flex items-center text-textSecondary hover:text-primary">
            <MessageOutlined className="mr-1" />
            <span>{post.comments} 条评论</span>
          </button>
          
          <button className="text-textSecondary hover:text-primary">
            分享
          </button>
        </div>
      </div>
      
      {/* 评论区 */}
      <div className="bg-surface rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-textPrimary mb-4">评论 ({comments.length})</h3>
        
        <div className="flex mb-6">
          <img 
            src="https://www.weavefox.cn/api/bolt/unsplash_image?keyword=user,avatar&width=40&height=40&random=user_avatar_2" 
            alt="当前用户" 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex-grow flex">
            <Input 
              placeholder="添加评论..." 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-grow rounded-l-full"
            />
            <Button 
              type="primary" 
              icon={<SendOutlined />} 
              onClick={handleAddComment}
              className="bg-primary border-primary hover:bg-pink-300 hover:border-pink-300 rounded-r-full"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          {comments.map(comment => (
            <div key={comment.id} className="flex">
              <img 
                src={comment.user.avatar} 
                alt={comment.user.name} 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-grow">
                <div className="bg-gray-100 rounded-xl p-3">
                  <div className="font-bold">{comment.user.name}</div>
                  <p className="text-textPrimary">{comment.content}</p>
                </div>
                <div className="text-textSecondary text-sm mt-1 ml-2">
                  {comment.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
