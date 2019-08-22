import React, {Component} from 'react';
import ToDoItem from './toDoItem.js'
import Checkbox from './checkbox.js'

//convert back to functional compoenet?
class Todo extends Component {
// const Todo = ({item, onChange}) => {
//add colors
constructor(props) {
    super(props);
    this.state = {
      buttons: [{number:0, class: "preset1"}],
      targetbox: null
    }
}

dragEnd = (e) => {
    this.setState({targetbox: null})
  }
dragStart = (e) => {
  console.log(e.target);
    e.dataTransfer.setData("text", e.target.id)
    this.setState({targetbox: true})
  }
drop = (e) => {
  console.log(e.target);
    if (e.target.id) {
      this.props.swap(parseInt(e.dataTransfer.getData("text")), parseInt(e.target.id))
      e.dataTransfer.clearData()
    }
  }
priorityClicked = () => {

}
render(){
  return (<ul>
  {
     this.props.item.map((item, id) => (
       <div className='card' key={'b'+item.id} id={item.id} draggable={true} onDragOver={(event) => event.preventDefault()} onDragStart={this.dragStart} onDrop={this.drop}  onDragEnd={this.dragEnd}>
       <li>
       <div className='right'>
       <ToDoItem description={item.description} title={item.title} onChange={(e,id)=> {this.props.onChange(e, item.id)}} onUpdate={(e,id)=> {this.props.onUpdate(e, item.id)}} identifier={item.id} status={item.status}  key={id} />
       </div>
       <div className='left'>
       <Checkbox status={item.status} onClick={(e, id)=>{this.props.onClick(e, item.id)}} identifier={item.id} key={'a'+item.id} />
       <button><i className="fas fa-exclamation" ></i> </button>
       <button><i className="fas fa-exclamation"></i><i className="fas fa-exclamation"></i>  </button>
       <button><i className="fas fa-exclamation"></i><i className="fas fa-exclamation"></i><i className="fas fa-exclamation"></i></button>
       </div>
       </li>
       </div>
   ))
  }
  </ul>)

  }
};



export default Todo;
