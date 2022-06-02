import * as React from 'react';
import db from "./config"

export default class Add_Meeting extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
      s_date: '',
      d_date: '',
      priority: '',
      complete:'',
      notes:'',
      Done:'',
    };
  }
  
  render() {
    return (
      <div style={styles.container}>
        <text style={styles.text1}> ADD NEW TASK </text>
        <div></div>
        <input
          placeholder="Enter the Task"
          style={styles.inputBox}
        
          onChange={(task_) => {
            //   console.log("new value", evt.target.value);
            this.setState({task:task_.target.value});
            console.log(this.state.task);
          }}
                  />
        <input
          placeholder="Enter Start Date"
          style={styles.inputBox2}
          onChange={(s_date_) => {
            this.setState({ s_date: s_date_.target.value });
          }}
          
        />
        <input
          placeholder="Due date"
          style={styles.inputBox2}
          onChange={(d_date) => {
            this.setState({ d_date: d_date.target.value });
          }}
                  />
        <input
          placeholder=" priority"
          style={styles.inputBox4}
          onChange={(a) => {
            this.setState({ priority: a.target.value });
          }}
                  />
        <input
          placeholder="Complete"
          style={styles.inputBox4}
          onChange={(a) => {
            this.setState({ complete: a.target.value });
          }}
        />
        <input
          placeholder=" Notes"
          style={styles.inputBox4}
          onChange={(a) => {
            this.setState({ notes: a.target.value });
          }}
                  />
        <input
          placeholder=" Done"
          style={styles.inputBox4}
          onChange={(a) => {
            this.setState({ Done: a.target.value });
          }}
                  />

<div></div>
 <button onClick={() => {
     alert('alert');
    db.collection('customers').add({
      task: this.state.task,
      s_date: this.state.s_date,
      d_date: this.state.d_date,
      priority:this.state.priority,
      complete:this.state.complete, 
      notes:this.state.notes, 
      Done:this.state.Done, 
      Cancel: "No",
    })
    alert('alert');
  }}>
          ADD
        </button>
      </div>
    );
  }
}

const styles = {
  text1: {
    textAlign: 'center',
    color: 'black',
    marginTop: '10px',
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputBox: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  inputBox2: {
    marginTop: 5,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  inputBox3: {
    marginTop: -25,
    width: 200,
    alignSelf: 'right',
    height: 120,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  Button2: {
    color: 'red',
    marginLeft: 250,
    backgroundColor: 'red',
    width: 65,
    height: 40,
    borderWidth: 2,
    marginTop: 40,
  },
  text2: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputBox4: {
 marginTop: 5,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  container: {
    backgroundColor:"yellow",
    textAlign:'center'
  }
}
