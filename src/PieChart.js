import React from "react";

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
} from "bizcharts";
//import DataSet from "@antv/data-set";
//import DataSet from '//gw.alipayobjects.com/os/antv/assets/data-set/0.8.6/data-set.min.js';


class PieChart extends React.Component {
  render() {
   // const { DataView } = DataSet;
    const data = [
      {
        item: "事例一",
        count: 40
      },
      {
        item: "事例二",
        count: 21
      },
      {
        item: "事例三",
        count: 17
      },
      {
        item: "事例四",
        count: 13
      },
      {
        item: "事例五",
        count: 9
      }
    ];
    const dv = [{"item":"事例一","count":40,"percent":0.4},
    {"item":"事例二","count":21,"percent":0.21},
    {"item":"事例三","count":17,"percent":0.17},
    {"item":"事例四","count":13,"percent":0.13},
    {"item":"事例五","count":9,"percent":0.09}]
   // alert();
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    };
   // alert(cols);
    return (
      <div>
        <Chart
          height={400}
          data={dv}
          scale={cols}
         //padding={[80, 100, 80, 80]}
         forceFit
         
        >
          <Coord type="theta"  radius={0.75} />
          <Axis name="percent" />
          {/* <Legend
            position="right"
            offsetY={-window.innerHeight / 2 + 120}
            offsetX={-100}
          /> */}
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
            <Label
              content="percent"
              offset={-40}
              textStyle={{
                rotate: 0,
                textAlign: "center",
                shadowBlur: 2,
                shadowColor: "rgba(0, 0, 0, .45)"
              }}
            />
          </Geom>
        </Chart>
      </div>
    );
  }
}

export default PieChart;