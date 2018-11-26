import React from 'react';
import './App.css';
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
function LineChart(props){
    return(
        <Chart height={270} data={props.data} scale={cols} width={props.width}>
        <Axis name={props.keys[0]} color="red"/>
        <Axis name="value" />
        <Tooltip
          crosshairs={{
            type: "y"
          }}
        />
        <Geom type="line"  style={{
            stroke: props.linecolor,
            lineWidth: 1
          }} position={props.pos} size={2} />
        <Geom
          type="point"
          position={props.pos}
          size={4}
          shape={"circle"}
          style={{
            stroke: "#fff",
            lineWidth: 1
          }}
        />
      </Chart>
    
    );
}

export default LineChart;