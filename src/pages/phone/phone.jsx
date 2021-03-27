import React from "react"
import {Input} from 'antd';
import axios from 'axios'
import Pphone from './Pphone'
const { Search } = Input;
export default class Phone extends React.Component{
    constructor(props){
        super(props);
        this.state={
            phone:"",
            key:"67c9a8ca01d8b50331387c00f039290c",
            isValue:false,
            datas:[]
        }
    }onSearch = (value) => {
        axios({
            method:'GET',
            url:'/mobile/get',
            params:{
                phone:this.state.phone,
                key:this.state.key
            }
        }).then(res=>{
            console.log(res.data)
            if(res.data.error_code===201101)
            {
                alert("手机号码不能为空")
            }
            if(res.data.error_code===201102)
            {
                alert("请输入正确的手机号码")
            }
            if(res.data.error_code===201103)
            {
                alert("查询无结果")
            }
            if(res.data.error_code===0)
                this.setState({
                    isValue:true,
                    datas:res.data.result
                })
        })
     }
    OnChange= (e) => {
        this.setState({
            phone:e.target.value
        })
       }
    render(){
        const {datas}=this.state;
        const isValue=this.state.isValue;
        if(isValue===false)
        {
        return(
            <Search class
             placeholder="请输入手机号"
            allowClear
            enterButton="查询"
            onChange={this.OnChange}
            size="large"
            onSearch={this.onSearch}
            />
        );
        }
        else
        {
            return(
                <div>
                            <Pphone 
                                province={datas.province}
                                city={datas.city}
                                company={datas.company}
                                zip={datas.zip}
                                areacode={datas.areacode}
                            />

                </div>
            )
        }
    }
        
}