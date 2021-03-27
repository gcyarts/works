import React from "react"
import { Input } from 'antd';
import axios from 'axios'
import Pidiom from "./Pidiom"
const { Search } = Input;
export default class Idiom extends React.Component{
    constructor(props){
        super(props);
        this.state={
            idiom:"",
            key:"8a6a432224110e6587f48dc81ee12856",
            isValue:false,
            datas:[],
            total:"",
            word:"",
        }
    }onSearch = (value) => {
        if(this.CheckChinese(value)==false)
        {
            alert("请输入正确的中文");
        }
        else
        {
        axios({
            method:'GET',
            url:'/idiomJie/query',
            params:{
                wd:this.state.idiom,
                key:this.state.key
            }
        }).then(res=>{
            if(res.data.error_code===0){
                console.log(res.data.result)
                this.setState({
                    isValue:true,
                    datas:res.data.result.data,
                    total:res.data.result.total_count,
                    word:res.data.result.last_word
                })
            }
        })
        }
     }
    OnChange= (e) => {
        this.setState({
            idiom:e.target.value
        })
       }
        CheckChinese(val){    
        　　var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
        　　if(reg.test(val)){    
               return true;
            }
            return false;
        }
    render(){
        const isValue=this.state.isValue;
        if(isValue===false)
        {
        return(
            <Search class
             placeholder="请输入成语或成语的最后一个字"
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
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前字:{this.state.word}</h3>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;词数:{this.state.total}</h3>
                     <ul>
                    {
                            this.state.datas.map((value,key)=>
                            <div key={key}>
                            <Pidiom
                                data={value}
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