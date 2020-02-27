// TODO list is great for:
// Database for holding items
// Learn state and props functions
// Dynamically change the state values

import React, {Component} from "react";


class App extends Component{

  

  // At first we need a constructor
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  
  updateInput(key,value){
    // Update react state
    this.setState({
      [key]:value
    });
  }

  addItem(){
    //Create new item with unique ID
    const newItem={
      id: 1+Math.random(),
      value: this.state.newItem.slice()
    }

    // Copy the current list of items
    const list = [...this.state.list];

    //Add new item
    list.push(newItem);


    // Update state with new list and reset the input
    this.setState({
      list,
      newItem:""
    });

  }
  // Function to delete items from the list/database
  deleteItem(id){
    // Copy the current list of items
    const list = [...this.state.list];

    // Filter item being deleted
    const updatedList = list.filter(item=>item.id !== id);

    // Updating state
    this.setState({list:updatedList});
  }
  // This is some basic JSX for templating the needed normal JS
render(){
return(
    <div className="App">
        <div>
          Add an Item...
          <br/>
          <input
            type="text"
            placeholder="Type item here...."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
          onClick={() =>this.addItem()}>
          Add..
          </button>
          <br/>
          <ul>
            {this.state.list.map(item =>{
              return(
                <li key={item.id}>
                  {item.value}
                  <button
                  onClick={()=>this.deleteItem(item.id)}

                  >X</button>
                </li>
              )
            })}
          </ul>
        </div>
    </div>

    );
}

}

export default App;
