import React from 'react';
import { Layout, Typography } from 'antd';
export const Footer: React.FC = () => {
  return (
    <div>
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          版权所有 @ PaceMake1r 旅游网
        </Typography.Title>
      </Layout.Footer>
    </div>
  )
};
