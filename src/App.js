import { Layout, Menu, Breadcrumb } from 'antd';
import { Image } from 'antd';
import './App.css';
import  App1 from './myText';
import {MenuRoot} from "./constants";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
     <Layout className="layout">
     <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        {
          MenuRoot.map((menu,index) => {
            return (
              <Menu.Item key={menu.id}>
                  <Link to={menu.path}>{menu.name}</Link>
              </Menu.Item>
            )
          })

        }
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Switch>
        <Route path="/tony">
          <div className="site-layout-content">
            <Image width={250} src="https://images.immediate.co.uk/production/volatile/sites/3/2018/05/IRON-2008-d7a2706.jpg?quality=90&resize=768,574"/>
            <Image width={250} src="https://cdn.vox-cdn.com/thumbor/rJcbF72KYppDls3yVsDPTODib7g=/0x0:2400x1194/1200x800/filters:focal(1101x111:1485x495)/cdn.vox-cdn.com/uploads/chorus_image/image/65948069/Screen_Shot_2019_12_20_at_2.19.38_PM.0.png"/>
            <Image width={250} src="https://media.wired.com/photos/59339b139aae0b5821d6cdcb/191:100/w_1280,c_limit/ironman-2.jpg"/>
          </div>
        </Route>
        <Route path="/bruce">
          <div className="site-layout-content">
            <Image width={250} src="https://cdn.vox-cdn.com/thumbor/K1WKyMb31K-K1vvseGAyFsjfYYE=/0x0:1200x675/1200x800/filters:focal(478x31:670x223)/cdn.vox-cdn.com/uploads/chorus_image/image/60384393/0_c9S8ajFBpwX89ZuU.0.jpeg"/>
            <Image width={250} src="https://cdn.smartfacts.ru/215702/temnyy-rycar-vozrozhdenie-legendy_0.jpg"/>
            <Image width={250} src="https://lh3.googleusercontent.com/proxy/9gKKYqWJd6sHt04Vi1DGc9tYtBCi4QI3gFnbQTk0rjW8nWV689eQ7v_Ye3iOijQSWNabX0kxafDQKQQmlJg8nXZKdipKn39JrdHXU1LqE2qILIvrd9STEDYSBfeVEQDmc77vTfaDF7Ig0mQf1Lf-elJUZO-nUFg"/>
          </div>
        </Route>
        <Route path="/logan">
          <div className="site-layout-content">
            <Image width={250} src="https://assets.puzzlefactory.pl/puzzle/339/919/original.jpg"/>
            <Image width={250} src="http://media.comicbook.com/2016/07/wolverine-192778.jpg"/>
            <Image width={250} src="https://www.wallpapertip.com/wmimgs/9-93672_logan-hd-wallpaper.jpg"/>
          </div>
        </Route>

        <Route path="/spam">
          <div className="site-layout-content">
            <h3>Something text</h3>
          </div>
        </Route>

        {App1}

      </Switch>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
 </Router>
     
  );
}

export default App;
