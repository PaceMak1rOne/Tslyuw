import React from 'react';
import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd';
import { GifOutlined } from "@ant-design/icons";
export const SideMenu: React.FC = () => {
  return (
    <div>
      <Menu mode="vertical" className={styles['side-menu']}>
        {sideMenuList.map((m, index) => {
          return (
            <Menu.SubMenu
              key={`side-menu-${index}`}
              title={<span><GifOutlined />{m.title}</span>}
            >
              {m.subMenu.map((sm, smindex) => {
                return (
                  <Menu.SubMenu
                    key={`sub-menu-${smindex}`}
                    title={<span><GifOutlined />{sm.title}</span>}
                  >
                    {sm.subMenu.map((sms, smsindex) => (
                      <Menu.Item
                        key={`sub-sub-menu-${smsindex}`}
                        title={<span><GifOutlined />{sms}</span>}
                      >

                      </Menu.Item>
                    ))

                    }
                  </Menu.SubMenu>
                )
              })

              }
            </Menu.SubMenu>
          )
        })}
      </Menu>
    </div>
  )
};
