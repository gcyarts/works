import React from "react"
import {Link} from "react-router-dom"
import { Layout, Menu } from 'antd';
const { Header } = Layout;
export default class Home extends React.Component{
    render(){
        return(
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" >
                    <Menu.Item key="1" >
                        <Link to='/weather'>
                        天气预报
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                    <Link to='/idiom'>
                        成语接龙
                        </Link>
                        </Menu.Item>
                    <Menu.Item key="3">
                    <Link to='/phone'>
                        手机号码归属地
                        </Link>
                        </Menu.Item>
                    <Menu.Item key="4">
                    <Link to='/news'>
                        新闻头条
                        </Link>
                        </Menu.Item>
                </Menu>
                </Header>
            </Layout>
        );
    }
}