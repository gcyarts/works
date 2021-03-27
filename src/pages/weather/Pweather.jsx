import React from "react"
export default class Pweather extends React.Component{
    render(){
        const { temperature,direct,weather,date} = this.props;
        return (
            <div className="x1">
                <div>
                    <h3>日期:{ date }</h3>
                    <h3>温度:{temperature }</h3>
                    <h3>风向:{ direct }</h3>
                    <h3>天气:{ weather }</h3>
                </div>
            </div>
        );
    }
}