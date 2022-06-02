import React from 'react'
import db from "./config"

class Table extends React.Component {
  constructor(){
    super();
    this.state={
      all_data:[]
    }
  }

  db1 = async()=>{
    console.log('check db');
    var all_data=[]
    var bkresponse;
    const bookRef = await db.collection('customers').get();
    
    bookRef.docs.map((doc) => {
        bkresponse = doc.data();
        all_data.push(bkresponse);
        
        this.setState({all_data:all_data})
      });
    
    };

    componentDidMount(){
      this.db1()
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.name !== this.state.all_data) {
        this.db1();
      }
    }
  

    render(){
      if(Object.keys(this.state.all_data).length === 0){
        return(
          <p>loading...</p>
      )
    }else {
      console.log(this.state.all_data)
      const DisplayData=this.state.all_data.map(
        (info)=>{
          return(
            
            <tr>
              <td>{info.task}</td>
              <td>{info.priority}</td>
              <td>{info.status}</td>
              <td>{info.s_date}</td>
              <td>{info.d_date}</td>
              <td>{info.complete}</td>
              <td>{info.Done}</td>
              <td>{info.notes}</td>
              <td>
                <button 
                onClick={async () => {
                  console.log(info.task);
                  var snapshot = await db
                    .collection('customers')
                    .limit(1).where("task","==",info.task)
                    .get();
                  const doc = snapshot.docs[0]
                  doc.ref.delete()
                }}
                >DONE</button>
              </td>
            </tr>
            
          )
        }
      )
      const myStyle = {
        backgroundColor: "yellow",
        fontSize:"20px",
      };
    
      return(
        <div style={{backgroundColor: "lightblue"}} >
            

          <table class="table table-striped">
            <thead>
              <tr style={myStyle}>
              <th style={{padding:"20px"}} >Task</th>
              <th style={{padding:"20px"}} >Priority</th>
              <th style={{padding:"20px"}} >Status</th>
              <th style={{padding:"20px"}} >Start Date</th>
              <th style={{padding:"20px"}} >Due Date</th>
              <th style={{padding:"20px"}} >%Complete</th>
              <th style={{padding:"20px"}} >Done</th>
              <th style={{padding:"20px"}} >Notes</th>
              <th style={{padding:"20px"}} >DONE/CANCEL</th>
              </tr>
            </thead>
            <tbody>
              {DisplayData}
              
            </tbody>
          </table>
		    </div>
	    )
    }
    }
}

export default Table;
