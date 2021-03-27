import React from "react"
export default class Pnews extends React.Component{
    render(){
        const { title,author_name,date,url,image} = this.props;
        return (
            <a href={url} rel="noreferrer" target="_blank" className="x1">
                    <img src={image} alt="新闻图片" id="x2"/>
                <h2>
                <span className="x3">
                {title}
                </span>
                </h2>
                <div>
                <h5>
                    author：<span>{ author_name }</span>
                </h5>
                <h5>
                    date：<span>{ date }</span>
                </h5>
                </div>
            </a>
        );
    }
}