import React, { Component } from 'react'
import './section.css'
import { Title } from '../title'
import { Input } from '../input'
import { ListBody } from '../list-body'


export default class Section extends Component {

    state = {
        dates: [],
        editIndex: null,
        editText: null
    }

    inputData = (value, input) => {
        this.setState((state)=>{
            return {
                dates: [...state.dates, value]
            }
        }, () => {
            this.setState({
                editIndex: null
            }, () => {
                console.log(this.state.editIndex);
            });

        });
        input.value = '';
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
    editData = (text, index) => {
        this.deleteData(text,index)
        this.setState({
            editIndex: index,
            editText: text
        }, () => {
            console.log(this.state.editIndex);
            console.log(this.state.editText)
        });
    }


    render() {
        return (
            <section className='to-do-list'>
                <Title></Title>
                <Input inputData={this.inputData} editIndex={this.state.editIndex} editText={this.state.editText}></Input>
                <ListBody deleteData={this.deleteData} editData={this.editData} dates={this.state.dates}></ListBody>
            </section>
        )
    }
}
