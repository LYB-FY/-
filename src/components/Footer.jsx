import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">🐱 喵友圈</h3>
            <p className="text-textSecondary text-sm">
              专属于猫咪爱好者的温馨社区，分享养猫经验，寻找猫咪玩伴，交流猫咪医疗知识。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">快速导航</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-textSecondary hover:text-primary text-sm">首页</Link></li>
              <li><Link to="/topics" className="text-textSecondary hover:text-primary text-sm">话题讨论</Link></li>
              <li><Link to="/following" className="text-textSecondary hover:text-primary text-sm">我的关注</Link></li>
              <li><Link to="/profile" className="text-textSecondary hover:text-primary text-sm">个人中心</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">社区功能</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-textSecondary hover:text-primary text-sm">动态发布</a></li>
              <li><a href="#" className="text-textSecondary hover:text-primary text-sm">图片分享</a></li>
              <li><a href="#" className="text-textSecondary hover:text-primary text-sm">话题讨论</a></li>
              <li><a href="#" className="text-textSecondary hover:text-primary text-sm">领养信息</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">联系我们</h4>
            <ul className="space-y-2">
              <li className="text-textSecondary text-sm">邮箱: contact@meowcircle.com</li>
              <li className="text-textSecondary text-sm">客服: 400-CAT-LOVE</li>
              <li className="text-textSecondary text-sm">地址: 猫咪星球爱心社区</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-textHint text-sm">
          <p>© 2025 喵友圈 - 猫咪爱好者的温馨社区. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
