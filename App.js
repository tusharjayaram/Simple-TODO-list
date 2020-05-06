import React from 'react'
import {View, Button, Text, ScrollView} from 'react-native'

let id = 0

const Todo = props => (
  <View>
    <Button onPress = {props.onDelete} title = "delete" />
    <Text>{props.todo.text} </Text>
  </View>
)
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    } 
  }

  addTodo() {
    id++
    const text = 'TODO number ' + id
    this.setState({
      todos: [...this.state.todos, {id: id, text: text, checked: false}]
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      <View>
        <Text> Todo count: {this.state.todos.length} </Text>
         <Text> Unchecked todo count: {this.state.todos.filter
         (todo => !todo.checked).length}</Text>
        <Button onPress = {() => this.addTodo()} title = "Add TODO"/>
        <ScrollView>
          {this.state.todos.map(todo => (
            <Todo
              onDelete = {() => this.removeTodo(todo.id)}
              onToggle = {() => this.toggleTodo(todo.id)}
              todo = {todo}
            />
          ))}
          </ScrollView>
        </View>
  
    )
  }
}
