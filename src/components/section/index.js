import React, { Component } from 'react'
import './section.css'
import { Title } from '../title'
import { Input } from '../input'
import { ListBody } from '../list-body'


export default class Section extends Component {

    state = {
        dates: []
    }

    inputData = (value, input) => {
        this.setState((state) => {
            return {
                dates: [...state.dates, value]
            }
        })
        input.value = ''
    }
    deleteData = (data, index) => {
        if (data) {
            const updatedDates = [...this.state.dates];
            updatedDates.splice(index, 1);
            this.setState((state) => {
                return {
                    dates: updatedDates
                }
            })
        } else {
            console.log("error")
        }
    }
    editData = (data) => {
        if (data) {
            console.log(data)
        } else {
            console.log("editFunctionNoData")
        }
    }

    render() {
        return (
            <section className='to-do-list'>
                <Title></Title>
                <Input inputData={this.inputData}></Input>
                <ListBody deleteData={this.deleteData} editData={this.editData} dates={this.state.dates}></ListBody>
            </section>
        )
    }
}
