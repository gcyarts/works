import React from "react"
export default class Pphone extends React.Component{
    render(){
        const {province,city,company,zip,areacode} = this.props;
        return (
            <div>
                    <h2>省份:{ province }</h2>
                    <h2>黑龙江省:{ city }</h2>
                    <h2>公司：{ company }</h2>
                    <h2>编号:{ zip }</h2>
                    <h2>电话地区号{ areacode }</h2>
            </div>
        );
    }
}