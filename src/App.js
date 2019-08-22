/*
Sean Pitterson
To Do List Application v1.0
Currently able to create, select, delete, and edit todo list items
Future Additions:
o Settings page to adjust app color layout
o Ability to prioritize list items
o Addition of due dates for list items
o Make list items dragable and sortable
*/

import React, {Component} from 'react';

import './App.css';
import Todo from './todo.js'
import Header from './header.js'
import Setting from './settings.js'


const initialState= {
      idCounter:0,
      name:'',
      allSelected: false,
      showSettings:false,
      todo:[{
        id:0,
        title:'',
        description:'',
        status: false,
        priority: 0
      }],
      presets: [{
          name: 'Preset 1',
          isClicked: false
        },
        {
          name: 'Preset 2',
          isClicked: false
        },
        {
          name: 'Preset 3',
          isClicked: false
        },
        {
          name: 'Preset 4',
          isClicked: false
        },
        {
          name: 'Preset 5',
          isClicked: false
        }],
        sortOptions: ["default", "priority", "due date"]
      };
const cache= localStorage
const key='cachedState';
const cachedHits = cache.getItem(key);

class App extends Component {
    state =  cachedHits? JSON.parse(cachedHits) : initialState;


toggleSettings = () => {
  let settings = this.state.showSettings;
  console.log(settings);
this.setState({
  showSettings: !settings
})
}

addTodo = () =>{
  const todos = this.state.todo;
  const counter=this.state.idCounter
  todos.push({id: counter+1, status:false});
  this.setState({
    todo:todos,
    idCounter:counter+1
  })
}

deleteTodo = () =>{
  const todo = this.state.todo.filter((item) => item.status !== true);
  const trueState = {todo,allSelected:false}
  this.state.allSelected===true? this.setState(trueState):   this.setState({todo})
}

onChange = (e) => {
   this.setState({name: e.target.value})
}



updateTitle = (e, id) => {
  let value = e.target.value;
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
  let value = e.target.value;
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
  const list3 = this.state.todo.map((item, j) => {
    if (item.id === id) {
      item.status = !item.status;
    }
      return item;
  });
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
cache.setItem(key, JSON.stringify(nextState));
}

// componentDidUpdate(prevProps, prevState){
// if(cachedHits){
//
// }
// }
swap = (a,b) => {
  let start = this.state.todo.findIndex(e => e.id === a);
  let end= this.state.todo.findIndex(e => e.id === b);
  let list= this.state.todo.map(e => e);
  let pos1 = list[start];
   list[start]= list[end];
   list[end]=pos1;
  this.setState({todo: list})
  // console.log([this.state.todo[end] , this.state.todo[start] ]);
}

render(){
  return (
  <div className="App">
 <div className={this.state.showSettings?"sidebar":"hide"}>
 <Setting presets={this.state.presets} options={this.state.sortOptions}/>
  </div>
  <div className="preset1">
  <Header name={this.state.name} addTodo={this.addTodo} onChange={this.onChange} deleteTodo={this.deleteTodo} selectAll={this.selectAll} allSelected={this.state.allSelected} class='preset1' toggleSettings={this.toggleSettings}/>
  <Todo item={this.state.todo} onChange={this.updateTitle} onUpdate={this.updateDescription} onClick={this.handleClick} class='preset1' swap={this.swap}/>
  </div>
  </div>
  );
}
}

export default App;
