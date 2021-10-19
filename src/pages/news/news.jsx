import React from "react"
import axios from 'axios'
import Pnews from './Pnews'
import './news.css'
export default class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
            datas:[],
            key:"045b0d1304f2da91be42a4fddf23fbf8",
            isValue:true,
        }
    }
    async componentDidMount(){
        await axios({
            method:'GET',
            url:'/toutiao/index',
            params:{
                key:this.state.key
            }
        }).then((res) =>{
            console.log(res.data.result.data)
                this.setState({
                    datas:res.data.result.data,
                })
            })
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.datas.map((value,key)=>

                            <div key={key}>
                            <Pnews 
                                title={value.title}
                                date={value.date}
                                author_name={value.author_name}
                                url={value.url}
                                image={value.thumbnail_pic_s}
                            />
                              </div>
                            
                        )
                    }
                </ul>
            </div>
        )}
        
}