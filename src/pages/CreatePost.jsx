import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadOutlined, PictureOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

const CreatePost = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [topic, setTopic] = useState('');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = () => {
    if (content.trim() !== '' || images.length > 0) {
      // 这里应该调用API保存帖子
      console.log('发布内容:', { content, images, topic });
      // 发布成功后返回首页
      navigate('/');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-surface rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold text-textPrimary mb-6">发布新动态</h1>
        
        <div className="mb-6">
          <Input.TextArea
            rows={4}
            placeholder="分享你的猫咪日常..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="text-textPrimary mb-4"
          />
          
          {images.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mb-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img 
                    src={image} 
                    alt={`upload-${index}`} 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button 
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-1"
                  >
                    <CloseOutlined />
                  </button>
                </div>
              ))}
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            <label className="flex items-center px-4 py-2 bg-primary bg-opacity-20 text-primary rounded-full cursor-pointer hover:bg-opacity-30">
              <PictureOutlined className="mr-1" />
              添加图片
              <input 
                type="file" 
                accept="image/*" 
                multiple 
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            
            <select 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="px-4 py-2 bg-primary bg-opacity-20 text-primary rounded-full cursor-pointer hover:bg-opacity-30"
            >
              <option value="">选择话题</option>
              <option value="#新手养猫">#新手养猫</option>
              <option value="#猫咪健康">#猫咪健康</option>
              <option value="#猫咪日常">#猫咪日常</option>
              <option value="#猫咪领养">#猫咪领养</option>
            </select>
          </div>
        </div>
        
        <div className="flex justify-end gap-3">
          <Button onClick={() => navigate(-1)}>
            取消
          </Button>
          <Button 
            type="primary" 
            onClick={handleSubmit}
            disabled={content.trim() === '' && images.length === 0}
            className="bg-primary border-primary hover:bg-pink-300 hover:border-pink-300"
          >
            发布
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
