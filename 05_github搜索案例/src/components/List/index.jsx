import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const { items, isFirst, isLoading, error } = this.props
        console.log(isFirst, isLoading, error);
        return (
            <div className="row">
                {
                    isFirst ? <h1>欢迎使用</h1> :
                        isLoading ? <h1>Loading...</h1> :
                            error ? <h1>{error}</h1> :
                                items.map(item => {
                                    return (
                                        <div className="card" key={item.id}>
                                            <a href={item.html_url} target="_blank">
                                                <img src={item.avatar_url} style={{ width: "100px" }} />
                                            </a>
                                            <p className="card-text">{item.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
