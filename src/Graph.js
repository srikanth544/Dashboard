import React from 'react';
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
    } from 'bizcharts';
    
    const cols = {
      value: {
        min: 0
      },
      year: {
        range: [0, 1]
      }
    };
    
    function Graph(props){
    // alert(props.type);
    var width = 1000/props.type.cols;
    var linecolor=props.type.graphprops.linecolor;
   
    //data=props.type.graphprops.data;
    //alert(JSON.stringify(data));
    //var  graphdata=props.type.graphprops.data;
    //alert(linecolor);
    //newtest();
    //graphdata=data;
    if(props.type.graphprops.rt=="RT"){
    
     // alert(props.type.graphprops.data);
     // alert(graphdata);
     // var testint = setInterval(function(){
        //alert("RT"+Math.random(100,100000));
     // },5000)
    }
     if(props.type.graphprops.graph=="line"){
       var keys=Object.keys(props.data[0]);
       var pos = keys[0]+"*"+keys[1];
      // alert(JSON.stringify(data));
    return(
     <div>
     <Chart height={270} data={props.data} scale={cols} width={width}>
       <Axis name={keys[0]} />
       <Axis name="value" />
       <Tooltip
         crosshairs={{
           type: "y"
         }}
       />
       <Geom type="line"  style={{
           stroke: linecolor,
           lineWidth: 3
         }} position={pos} size={2} />
       <Geom
         type="point"
         position={pos}
         size={4}
         shape={"circle"}
         style={{
           stroke: "#fff",
           lineWidth: 1
         }}
       />
     </Chart>
   </div>
    );
     }
     else{
       return "";
     }
   
    
   }


   export default Graph;