import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
    state = {
        name: '',
        age: '',
    }

    addPerson = () => {
        const { name, age } = this.state
        const id = new Date()
        console.log(name, age, id);
        this.props.addPerson({ name, age, id })
    }
    savePersonData = (type) => {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }
    render() {
        return (
            <div>
                <h2>Person</h2>
                <h3>Count的组件的和是：{this.props.sum}</h3>
                <input onChange={this.savePersonData('name')} type="text" placeholder='名字' />
                <input onChange={this.savePersonData('age')} type="text" placeholder='年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map(person => {
                            return <li key={person.id}>{person.name}--{person.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        sum: state.he,
        persons: state.persons
    }),
    {
        addPerson: createAddPersonAction
    }
)(Person)
