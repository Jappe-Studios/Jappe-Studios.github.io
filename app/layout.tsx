'use client';

import './globals.css';
import {
  ReactNode,
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import {
  Button,
  ConfigProvider,
  Dropdown,
  Layout,
  Menu,
  Divider,
  theme,
  Tooltip,
} from 'antd';
import Link from 'next/link';
import {
  EllipsisOutlined,
  GithubOutlined,
  DiscordOutlined,
  BookOutlined,
} from '@ant-design/icons';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import SubMenu from 'antd/es/menu/SubMenu';
import { defaultPagePaddingHorizontal, discordLink, githubLink, primaryColor } from './constants';
import { usePathname } from 'next/navigation';
import ResizeObserver from 'resize-observer-polyfill';
import Paragraph from 'antd/es/typography/Paragraph';

const { Header, Footer, Content } = Layout;

// Define a type for Menu Items
interface MenuItem {
  key: string;
  label: ReactNode;
  children?: MenuItem[]; // Optional children
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [overflowItems, setOverflowItems] = useState<MenuItem[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuWidth, setMenuWidth] = useState<number>(0);

  const isHomePage = pathname === '/';

  // Items for the navigation menu with type annotation
  const menuItems: MenuItem[] = useMemo(
    () => [
      { key: '1', label: <Link href="/">Home</Link> },
      { key: '2', label: <Link href="/">Jappe OS</Link> },
      {
        key: '3',
        label: 'Apps & Tools',
        children: [
          { key: '3-1', label: <Link href="/">coming soon</Link> },
        ],
      },
      {
        key: '4',
        label: 'Games',
        children: [
          { key: '4-1', label: <Link href="/product/stranded_survival">Stranded Survival</Link> },
        ],
      },
      { key: '5', label: <Link href="/about">About</Link> },
      { key: '6', label: <Link href="/contact">Contact</Link> },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    const handleResize = () => {
      if (menuRef.current) {
        setMenuWidth(menuRef.current.offsetWidth);
      }
    };

    const observer = new ResizeObserver(() => {
      handleResize();
    });

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial width on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (pathname === '/') {
      setSelectedKey('1');
      setOpenKeys([]);
    } else if (pathname.startsWith('/product/stranded_survival')) {
      setSelectedKey('4-1');
      setOpenKeys([]);
    } else if (pathname.startsWith('/about')) {
      setSelectedKey('5');
      setOpenKeys([]);
    } else if (pathname.startsWith('/contact')) {
      setSelectedKey('6');
      setOpenKeys([]);
    } else {
      setSelectedKey(null);
      setOpenKeys([]);
    }
  }, [pathname]);

  // Handle overflow logic: dynamically move items into "overflow" menu if there isn't enough space
  useEffect(() => {
    const itemWidth = 100; // Assume each menu item is about 120px wide (can be adjusted)
    const availableItems = Math.floor(Math.max(menuWidth - 156.35, 0) / itemWidth); // Number of items that fit
    const newOverflowItems = availableItems < menuItems.length ? menuItems.slice(availableItems) : []; // Get overflow items
    setOverflowItems(newOverflowItems);
  }, [menuWidth, menuItems]);

  const handleSubMenuOpen = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
              token: {
                colorPrimary: primaryColor,
                //borderRadius: 2,
                colorBgContainer: 'rgba(255, 255, 255, 0.033)',
                colorFillContent: '#101010FF5',
                colorBgLayout: '#000000FF5',
              },
            }}
          >
            <Layout style={{ minHeight: '100vh' }}>
              <Header
                className={`header ${scrolled ? 'scrolled' : ''}`}
                style={{
                  position: 'fixed',
                  zIndex: 10,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: `0 ${defaultPagePaddingHorizontal}px`,
                  transition: 'background-color 0.3s, backdrop-filter 0.3s',
                  backgroundColor: 'transparent',
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                  <Link href={'/'} style={{ color: primaryColor }}>Jappe Studios</Link>
                </div>

                <div
                  ref={menuRef}
                  style={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <Menu
                    className="custom-menu"
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[selectedKey || '']}
                    openKeys={openKeys}
                    onOpenChange={handleSubMenuOpen}
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                      backgroundColor: 'transparent',
                    }}
                  >
                    {/* Render only the visible items */}
                    {menuItems.slice(0, menuItems.length - overflowItems.length).map((item) =>
                      item.children ? (
                        <SubMenu key={item.key} title={item.label}>
                          {item.children.map((subItem: MenuItem) => ( // Explicitly type subItem
                            <Menu.Item key={subItem.key}>{subItem.label}</Menu.Item>
                          ))}
                        </SubMenu>
                      ) : (
                        <Menu.Item key={item.key}>
                          {item.label}
                        </Menu.Item>
                      )
                    )}
                  </Menu>

                  {/* Overflow Dropdown */}
                  {overflowItems.length > 0 && (
                    <Dropdown
                      overlay={
                        <Menu>
                          {overflowItems.map((item) =>
                            item.children ? (
                              <SubMenu key={item.key} title={item.label}>
                                {item.children.map((subItem: MenuItem) => ( // Explicitly type subItem
                                  <Menu.Item key={subItem.key}>{subItem.label}</Menu.Item>
                                ))}
                              </SubMenu>
                            ) : (
                              <Menu.Item key={item.key}>{item.label}</Menu.Item>
                            )
                          )}
                        </Menu>
                      }
                    >
                      <EllipsisOutlined style={{ fontSize: 24, color: 'white', paddingLeft: 10, cursor: 'pointer' }} />
                    </Dropdown>
                  )}

                  {/* Separator */}
                  <Divider type="vertical" style={{ backgroundColor: 'white', height: '30px', margin: '0 10px' }} />

                  {/* Community Guidelines Button */}
                  <Tooltip title="Check the Community Guidelines">
                    <Link href="/community_guidelines">
                      <Button
                        type="text"
                        icon={<BookOutlined style={{ color: 'white' }} />}
                        style={{ display: 'flex', alignItems: 'center' }}
                      />
                    </Link>
                  </Tooltip>

                  {/* Separator */}
                  <Divider type="vertical" style={{ backgroundColor: 'white', height: '30px', margin: '0 10px' }} />

                  {/* GitHub Button */}
                  <Tooltip title="Visit GitHub Repository">
                    <Button
                      type="text"
                      icon={<GithubOutlined style={{ color: 'white' }} />}
                      onClick={() => window.open(githubLink, '_blank')}
                      style={{ display: 'flex', alignItems: 'center' }}
                    />
                  </Tooltip>
                  
                  {/* Discord Button */}
                  <Tooltip title="Join Discord Server">
                    <Button
                      type="text"
                      icon={<DiscordOutlined style={{ color: 'white' }} />}
                      onClick={() => window.open(discordLink, '_blank')}
                      style={{ display: 'flex', alignItems: 'center' }}
                    />
                  </Tooltip>
                </div>
              </Header>

              <center>
                <Content style={{
                  marginTop: isHomePage ? '0' : '64px',
                  padding: isHomePage ? '0' : `0 ${defaultPagePaddingHorizontal}px`,
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '1500px',
                  height: '100%',
                  textAlign: 'left',
                }}>
                  <div id="root" style={{ flexGrow: 1 }}>
                    {children}
                  </div>
                </Content>
              </center>

              <Footer style={{ textAlign: 'center' }}>
                <Paragraph>
                  Jappe Studios ©2019-2024
                </Paragraph>
                {isHomePage && (
                  <Paragraph style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    Home page background by <Link href="https://freepik.com">Freepik</Link>
                  </Paragraph>
                )}
              </Footer>
            </Layout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
