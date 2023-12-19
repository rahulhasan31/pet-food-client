
import { UploadOutlined, UserOutlined,  } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Navbar from '../../../shared/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../../shared/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProviders';
import Loading from '../../../Loading/Loading';
import useAdmin from '../../../hooks/useAdmin'
import useSeller from '../../../hooks/useSeller';
const { Content,  Sider } = Layout;

const DashboardLayout = () => {

  const {user,loading}=useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email);
  const[isSeller]= useSeller(user?.email)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

console.log(isAdmin);
  const menuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <Link to={`/dashboard`}>My Profile</Link>,
    },
    {
      key: "reveiw",
      icon: <UserOutlined />,
      label: <Link to={`/dashboard/review`}>My Review</Link>,
    },
    {
      key: "my-order",
      icon: <UploadOutlined />,
      label: <Link to={`/dashboard/my-add-cart`}>My Add Cart</Link>,
    },
    {
      key: "checkout",
      icon: <UploadOutlined />,
      label: <Link to={`/dashboard/checkout`}>CheckOut Page</Link>,
    },
    {
      key: "myOrders",
      icon: <UploadOutlined />,
      label: <Link to={`/dashboard/my-payments`}>My-payments</Link>,
    },
  ];
  
  // Conditionally add admin-only items
  if (isAdmin===true) {
    menuItems.push(
      {
        key: "all-Seller",
        icon: <UploadOutlined />,
        label: <Link to={`/dashboard/seller`}>All-Seller</Link>,
      },
      {
        key: "all-User",
        icon: <UploadOutlined />,
        label: <Link to={`/dashboard/User`}>All-User</Link>,
      },
      {
        key: "all-Payment",
        icon: <UploadOutlined />,
        label: <Link to={`/dashboard/all-payment`}>All-Payment</Link>,
      },
      {
        key: "Confirm Order",
        icon: <UploadOutlined />,
        label: <Link to={`/dashboard/confirm-order`}>All-Confirm Order</Link>,
      }
    );
  }
  if (isSeller===true && isAdmin===false) {
    menuItems.push(
      {
        key: "add-food",
        icon: <UploadOutlined />,
        label: <Link to={`/dashboard/add-food`}>Add Foods</Link>,
      },
      {
        key: "seller-add-food",
        icon: <UploadOutlined />,
        label: <Link to={`/dashboard/seller-add-food`}>Seller Add Food</Link>,
      },
     
    );
  }

  
  return (
    <>
    {
      loading ?<> <Loading/></>:<Layout className='mt-20'>
      <Sider
     
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={menuItems}
        />
      </Sider>
      <Layout>
       <Navbar/>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
            }}
          >
            <Outlet/>
          </div>
        </Content>
       <Footer></Footer>
      </Layout>
    </Layout>
    }
    </>
  );
};
export default DashboardLayout;