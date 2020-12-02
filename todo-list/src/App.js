import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.TodoItem = [
      {title: 'Mua bimbim', isComplete: true},
      {title: 'Di da bong'},
      {title: 'di do xang'}
    ];
  }

  onItemClicked(item){
    return (event)=>{
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete:!isComplete
          },
          ...todoItems.slice(index+1)
        ]
      });
    };
  }

  render(){
    const { todoItems } = this.state;
    if(TodoItem.length){
      return (
        <div className="App">
          {
            todoItems.length && todoItems.map((item,index)=>
            <TodoItem
              key={index} 
              item={item} 
              onClick={this.onItemClicked}/>
             )
          }
        </div>
      );
    }
  }
}

export default App;
