import React from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';

function Graph(props) {

  var width = 1000 / props.type.cols;
  var linecolor = props.type.graphprops.linecolor;

  if (props.type.graphprops.rt == "RT") {

  }
  if (props.type.graphprops.graph == "line") {
    var keys = Object.keys(props.data[0]);
    var pos = keys[0] + "*" + keys[1];

    return (
      <div>
        <LineChart width={width} linecolor={linecolor}
          pos={pos} keys={keys}
          data={props.data}></LineChart>
      </div>
    );
  }
  else if(props.type.graphprops.graph == "pie"){
    
    return(
<PieChart></PieChart>
    )

  }
  else {
    return "";
  }


}


export default Graph;