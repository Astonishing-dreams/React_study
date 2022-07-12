import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    state = {
        items: [],
        isFirst: true,
        isLoading: false,
        error: ''
    }

    componentDidMount() {
        this.msgId = PubSub.subscribe('pubItems', (_, data) => {
            this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.msgId)
    }

    render() {
        const { items, isFirst, isLoading, error } = this.state
        // console.log(isFirst, isLoading, error);
        return (
            <div className="row">
                {
                    isFirst ? <h1>欢迎使用</h1> :
                        isLoading ? <h1>Loading...</h1> :
                            error ? <h1>{error}</h1> :
                                items.map(item => {
                                    return (
                                        <div className="card" key={item.id}>
                                            <a href={item.html_url}>
                                                <img src={item.avatar_url} style={{ width: "100px" }} alt='' />
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
