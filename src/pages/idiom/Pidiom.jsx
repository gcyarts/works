import React from "react"
export default class Pidiom extends React.Component{
    render(){
        const {data} = this.props;
        return (
            <div>
                <h5>
                    <span>{ data }</span>
                </h5>
            </div>
        );
    }
}