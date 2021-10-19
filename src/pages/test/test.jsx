import React from "react"
import {Input} from 'antd';
import JSEncrypt from 'jsencrypt'
const { Search } = Input;

export default class Phone extends React.Component{
    constructor(props){
        super(props);
        this.state={
            password:"",
        }
    }
    OnChange= (e) => {
        this.setState({
            password:e.target.value
        })
       }
    onSearch=()=>{
        let {password}=this.state;
        var encryptor = new JSEncrypt()  // 创建加密对象实例
        //之前ssl生成的公钥，复制的时候要小心不要有空格
        var pubKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCfAv6nksOCFodvfL+nl0z3QAphLkUpz26pYlelZDfDQIcN1eEXAk5p9j827p12tPwiYiRQjgK+Cld+4u5Z6ugqhSw0bkjeNMVDTE4p34ZTz7CNd59e8OJf0TrRp0BXUdSFMTIY83s9XQ53JCNYlm9hMBFAmXJQmk3XnO/aO6L5TQIDAQAB'
        encryptor.setPublicKey(pubKey)//设置公钥
        password= encryptor.encrypt(password)  // 对内容进行加密
        console.log(password);
        console.log("-----------------");
    var decrypt = new JSEncrypt()//创建解密对象实例
    //之前ssl生成的秘钥
    var priKey  = 'MIICXQIBAAKBgQCfAv6nksOCFodvfL+nl0z3QAphLkUpz26pYlelZDfDQIcN1eEXAk5p9j827p12tPwiYiRQjgK+Cld+4u5Z6ugqhSw0bkjeNMVDTE4p34ZTz7CNd59e8OJf0TrRp0BXUdSFMTIY83s9XQ53JCNYlm9hMBFAmXJQmk3XnO/aO6L5TQIDAQABAoGAYQ8P57Ni2Q3tX3TS+3YUCbuyWj1HBE1Ua9nWS+MPUoQZq61IdqX2vSEM1vfxb5rraAVlyzHTpLJlU9Mq0AHd8dfvYytSg7+x4teCg6TfWoW+Cg0SrU/GBg0noqsDBDDMGmu7LZtVKHGp98FUNbCYyurBk56c9EZB1LZXFOGnVLUCQQDPZKVu55vH5+2ESnHTwX6ztsd26/5FV8eLjSRbYOTbOX3GYgBAOTxHrq3ral2UtIIqC5YQaMyGHhdQQJKXijLHAkEAxEeELYdkzViZZWbsXbBr/x3clf8wtY3zBCfe2aFw3Vdy2nsNFPKwpIW7hK9jMtY4LZmZ+N14AGlNYDlHFgAfSwJBALEW9vBZkrrDPxxcWRABRIh+hZn1b5yUlM6DyczBUwoi8FQqsJ4mgWOQM/A2Vgw5ioAOfqgqZKINJckgKkx99FcCQQCGFVzkRVPFO7s+nDroHbcJBntENJovzJKwyhPgk/qoGi8ptVnQb6HgIkNhdvbLKbAi5oVajuCFV2o2S6qWCutVAkBQJ9nd6AWSrcAVQwUj81fLYQ0F8ZrJ4LRSYJgG79HNzXv2K8VFLCu3nIe5DQrskr8bqZS8ZTDIMD54HeZH/GW2'
    decrypt.setPrivateKey(priKey)//设置秘钥
    password = decrypt.decrypt(password)//解密之前拿公钥加密的内容
    console.log(password);
    }  
    render(){
       return(
        <Search class
        placeholder="请输入密码"
       allowClear
       enterButton="查询"
       onChange={this.OnChange}
       size="large"
       onSearch={this.onSearch}
       />
       )
    }
        
}