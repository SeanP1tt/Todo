import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo.js'
import Header from './header.js'

var idCounter = 0;
const initialState= {
      idCounter:0,
      name:'',
      allSelected: false,
      todo:[{
        id:0,
        title:'',
        description:'',
        status: false,
        priority: 0
      }]
};
const cache= localStorage
const key='cachedState';
const cachedHits = cache.getItem(key);

class App extends Component {
    state =  cachedHits? JSON.parse(cachedHits) : initialState;
addTodo = () =>{
  const todos = this.state.todo;
  todos.push({id: idCounter+1, status:false});
  this.setState({
    todo:todos
  })
idCounter++;
console.log(this.state);
let test = cache.getItem(key)
console.log(JSON.parse(test));
}

deleteTodo = () =>{
  const todo = this.state.todo.filter((item) => item.status !== true);
  if(this.state.allSelected===true){
    this.setState({
  todo,
  allSelected:false
})
} else {
  this.setState({
todo
})
}

      console.log(todo);

console.log(this.state);
}

onChange = (e) => {
   this.setState({name: e.target.value})
}

updateTitle = (e, id) => {
  // const todo = {...this.state.todo};
  let value = e.target.value;
  console.log(value);
  console.log(id);
  const list = this.state.todo.map((item, j) => {
    if (item.id === id) {
      item.title = value;
    }
      return item;

  });
  this.setState({
        todo:list
      })
}

updateDescription = (e, id) => {
  // const todo = {...this.state.todo};
  let value = e.target.value;
  console.log(value);
  console.log(id);
  const list2 = this.state.todo.map((item, j) => {
    if (item.id === id) {
      item.description = value;
  }
      return item;

  });

  this.setState(
       {
        todo:list2
})
}

handleClick = (e, id) => {
  console.log(id);
  const list3 = this.state.todo.map((item, j) => {
    if (item.id === id) {
      item.status = !item.status;
    }
      return item;
  });
  console.log(list3);
this.setState({
      todo:list3
})
}

//select all
selectAll = () => {
  const list = this.state.todo.map((item, j) => {
      item.status = !item.status;
      return item;
    });
  this.setState({
        todo:list,
        allSelected:!this.state.allSelected
  })
}
//Future Additions:
//priority
//Sorting/ordering based on priority

componentWillUpdate(nextProps, nextState) {
  console.log('logging old state');
console.log(nextState);
cache.setItem(key, JSON.stringify(nextState));
}

componentDidUpdate(prevProps, prevState){
if(cachedHits){
  console.log();
}
}

render(){
  return (
    <div className="App">
        <Header name={this.state.name} addTodo={this.addTodo} onChange={this.onChange} deleteTodo={this.deleteTodo} selectAll={this.selectAll} allSelected={this.state.allSelected}/>
        <Todo item={this.state.todo} onChange={this.updateTitle} onUpdate={this.updateDescription} onClick={this.handleClick} />
 
    </div>
  );
}
}

export default App;
