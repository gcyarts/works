import React from "react"
import { Input } from 'antd';
import axios from 'axios'
import Pweather from './Pweather'
const { Search } = Input;
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            address:"",
            isValue:false,
            key:"b60cc5f0692e3db5e1f072658846bd35",
            city:"",
            users:[],
            datas:[],
        }
    }
         onSearch = (value) => {
            axios({
                method:'GET',
                url:'/simpleWeather/query',
                params:{
                    city:this.state.address,
                    key:this.state.key
                }
            }).then(res=>{
                if(res.data.error_code===207301)
                {
                    alert("城市名输入错误");
                }
                if(res.data.error_code===207302)
                {
                    alert("查询不到该城市的相关信息");
                }
                if(res.data.error_code===207303)
                {
                    alert("网络错误请重试");
                }
                if(res.data.error_code===0){
                    console.log(res.data.result)
                    this.setState({
                        isValue:true,
                        users:res.data.result.future,
                        datas:res.data.result.realtime
                    })
                }
            })
         }
        OnChange= (e) => {
            this.setState({
                address:e.target.value
            })
           }
    render(){
        const isValue=this.state.isValue;
            if(isValue===false){
            return(
            <Search class
             placeholder="请输入地点"
            allowClear
            enterButton="查询"
            onChange={this.OnChange}
            size="large"
            onSearch={this.onSearch}
            />
        );}
        else{
            return(
                <div>
                    <h2 >地点：{this.state.address}</h2>
                    <ul>
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前温度:{this.state.datas.temperature}
                        &nbsp;
                        当前湿度:{this.state.datas.humidity}
                        &nbsp;
                        当前空气指数:{this.state.datas.aqi}
                        &nbsp;
                        当前风向:{this.state.datas.direct}
                        &nbsp;
                        当前天气:{this.state.datas.info}
                        &nbsp;
                        当前温度:{this.state.datas.temperature}
                        </h3>
                    </ul>
                     <ul>
                    {
                            this.state.users.map((value,key)=>
                            <div key={key}>
                            <Pweather
                                temperature={value.temperature}
                                date={value.date}
                                direct={value.direct}
                                weather={value.weather}
                            />
                              </div>
                        )
                    }
                </ul>
                </div>
            )
        }

    }
}