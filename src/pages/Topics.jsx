import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusOutlined, FireOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

const mockTopics = [
  { id: 1, name: '#新手养猫', count: 1245, description: '为刚入门的铲屎官提供养猫基础知识' },
  { id: 2, name: '#猫咪健康', count: 892, description: '分享猫咪疾病预防、日常护理经验' },
  { id: 3, name: '#猫咪日常', count: 2103, description: '记录猫咪的可爱日常瞬间' },
  { id: 4, name: '#猫咪领养', count: 342, description: '发布领养信息，为流浪猫寻找新家' },
  { id: 5, name: '#猫咪用品', count: 567, description: '推荐优质猫咪用品和使用心得' },
  { id: 6, name: '#猫咪行为', count: 432, description: '解读猫咪行为背后的含义' }
];

const Topics = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = mockTopics.filter(topic => 
    topic.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-surface rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-textPrimary flex items-center">
            <FireOutlined className="text-primary mr-2" />
            话题讨论区
          </h1>
          
          <div className="flex items-center gap-3">
            <Input 
              placeholder="搜索话题..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 rounded-full border-border"
            />
            <Button 
              type="primary" 
              icon={<PlusOutlined />} 
              className="bg-primary border-primary hover:bg-pink-300 hover:border-pink-300"
            >
              新建话题
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTopics.map(topic => (
            <Link 
              key={topic.id} 
              to={`/topics/${topic.id}`}
              className="block bg-surface border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">{topic.name}</h3>
                  <p className="text-textSecondary text-sm mb-2">{topic.description}</p>
                </div>
                <span className="bg-primary bg-opacity-20 text-primary px-2 py-1 rounded-full text-xs">
                  {topic.count} 动态
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
