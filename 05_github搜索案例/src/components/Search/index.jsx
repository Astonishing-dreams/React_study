import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    keyWordContainer = React.createRef()

    search = () => {
        // 获取输入数据
        const { value } = this.keyWordContainer.current
        // 判断是否为空
        if (!value.trim()) return alert("输入不能为空")
        // 改变状态数据
        this.props.getItems({ isFirst: false, isLoading: true })
        // 发送请求
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            res => {
                const items = res.data.items
                // 存储数据，数据处理

                this.props.getItems({ items: items, isLoading: false })
            },
            err => { this.props.getItems({ error: err.message, isLoading: false }) }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text"
                        ref={this.keyWordContainer}
                        placeholder="enter the name you search"
                    />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
