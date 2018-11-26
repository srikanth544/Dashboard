import React from 'react';
import Graph from './Graph';
import GridLayout from 'react-grid-layout';
 function Grid(props){

     var datagrid =[];
     var count=props.count.divs.length;
     var id=props.count.id;
   

      for(let i=0;i<count;i++){
  //  alert(props.count.divs[i]["source"])
  //  apicall(i).then(function(data){alert(data)})
 
        var title=props.count.divs[i]["title"];
        if(props.count.divs[i]["rt"]=="RT"){
    
           if(props.rtcount == 0){ 
             props.test({id,title});
          } 
        }
        
        datagrid.push( <div  key={i} style={{backgroundColor:"white",border:'1px solid gray'}} data-grid={{x: 0, y: 0, w: 12/count, h: 6}}><h3>{props.count.divs[i]["title"]}</h3><Graph data={[...props.count.divs[i].data]} type={{graphprops:props.count.divs[i],cols:count}}></Graph></div> );
      }

    
      return(
        <GridLayout margin={[10,10]} isResizable={true} isDraggable={true} compactType='horizontal' className="layout" cols={12} rowHeight={40} width={1200}>
         {datagrid}
      </GridLayout>
      );
    }

    function apicall(i){
       // setTimeout(function(){alert()},2000)
       //console.log(i);
       return new Promise(function(resolve){
                resolve(i)
       });
    }
export default Grid; 