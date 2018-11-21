import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import layoutdata from './layoutData.json';
import Graph from './Graph';

var data = [
  {
    year: "1991",
    value: Math.random(10,100)*10
  },
  {
    year: "1992",
    value: 4
  },
  {
    year: "1993",
    value: 3.5
  },
  {
    year: "1994",
    value: 5
  },
  {
    year: "1995",
    value: 4.9
  },
  {
    year: "1996",
    value: 6
  },
  {
    year: "1997",
    value: 7
  },
  {
    year: "1998",
    value: 9
  },
  {
    year: "1999",
    value: 13
  }
];

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
 //  alert(JSON.stringify(data1));
//clearInterval(testint);
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
     // alert(JSON.stringify(linedata));
      data=linedata;
     // alert(JSON.stringify(this.state.rows));
     //data =[this.state.rows];
    this.setState({rows:[...this.state.rows],"test":""});

    }).bind(this),5000);
   
  }

  test=()=>{
    var newtest = this.newtest;
   var data = this.state.rows.map(function(v,i){
     //alert(i);
     return (
          <Grid key={i} count={v} test={newtest}></Grid>
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
   // alert(this.state.rows);
  	return (
      <div>
        {/* No.of Columns in row:<input type="text" onChange={
          (e)=>{
this.cols = e.target.value;
          }
        }></input>
      <button onClick={this.createGridRow}>Click</button> */}
      {this.state.rows.length > 0 ? this.test():""}
      </div>
    );
  }

}



export default App;




function Grid(props){
//alert(rtcount+"rtcount");
 var datagrid =[];
 var count=props.count.divs.length;
 var id=props.count.id;
 
 //alert(JSON.stringify(props.count));
  for(let i=0;i<count;i++){
//alert(i);
    var title=props.count.divs[i]["title"];
    if(props.count.divs[i]["rt"]=="RT"){

       if(rtcount == 0){ props.test({id,title});} 
    }
    
    data = [...props.count.divs[i].data];
    datagrid.push( <div  key={i} style={{backgroundColor:"white",border:'2px solid gray'}} data-grid={{x: 0, y: 0, w: 12/count, h: 6}}><h3>{props.count.divs[i]["title"]}</h3><Graph data={[...props.count.divs[i].data]} type={{graphprops:props.count.divs[i],cols:count}}></Graph></div> );
  }
 // alert(data.length)
  return(
    <GridLayout margin={[10,10]} isResizable={true} isDraggable={true} compactType='horizontal' className="layout" cols={12} rowHeight={40} width={1200}>
     {datagrid}
  </GridLayout>
  );
}



