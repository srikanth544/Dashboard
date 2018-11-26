import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import layoutdata from './layoutData.json';
import Graph from './Graph';
import Grid from './Grid';

var rtcount =0;

class App extends Component {
 cols=1;
 divcount=0;
  constructor(props){
    super(props);
    this.state = { 
     rows : [...layoutdata],
     test:""
    };
    this.createGridRow=this.createGridRow.bind(this);
    this.test=this.test.bind(this);
    this.newtest=this.newtest.bind(this);
   
  }

 newtest= (data1) => {
 
var data1=data1;

   setInterval((function(){
    var linedata ="";
   this.state.rows.map(function(val,i){
     // alert(val.id)
      if(val.id == data1.id){
         val.divs.map(function(val1,i1){
           if(val1.title == data1.title){
            linedata=   val1.data.map(function(val2,i2){
                  val2.value= Math.floor(Math.random() * 6) + 1  ;
                  return val2;
               });
           }
         })
      }
      });
    
    this.setState({rows:[...this.state.rows],"test":""});

    }).bind(this),5000);
   
  }

  test=()=>{
    var newtest = this.newtest;
   var data = this.state.rows.map(function(v,i){

     return (
          <Grid key={i} count={v} rtcount={rtcount} test={newtest}></Grid>
     );
    });
    setTimeout(function(){
      rtcount =1;
    },1000)
    
    return data;
  }
 
createGridRow(){
  //alert();
  if(this.cols > 0 && this.cols <=4){
    if(this.cols == 1){
    this.state.rows.push({id:this.divcount++,divs:this.cols,graph:"line"});
    }
    else{
      this.state.rows.push({id:this.divcount++,divs:this.cols,graph:"line"});
    }
  
    this.setState({rows:[...this.state.rows]});
  

  }

  
  
  
}



	render () {
 
  	return (
      <div>
       
      {this.state.rows.length > 0 ? this.test():""}
      </div>
    );
  }

}



export default App;






