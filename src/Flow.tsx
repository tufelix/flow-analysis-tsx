import { Sankey, Tooltip } from "recharts";
import FlowSankeyNode from "./FlowSankeyNode";

import React, { useState, useEffect } from "react";
import listAll, { Node, Target, LABEL } from "./TeamsAPI";

function toNodes(nodes: Node[], checkedCurrent: boolean, checkedForecast: boolean) {
  const filtered = nodes.filter(function (node: Node) {
    return (checkedCurrent && node.label?.indexOf(LABEL.CURRENT) > -1)
    || (checkedForecast && node.label?.indexOf(LABEL.FORECAST) > -1);
  });

  const links = filtered
    .map(function (node: Node) {
      return node.targets
      .filter(function(target: Target) {
        return filtered.find(function(value: Node) {
          return value.key === target?.key;
        });
      })
      .map(function (target: Target) {
        return {
          source: filtered
            .map(function (n) {
              return n.key;
            })
            .indexOf(node.key),
          target: filtered
            .map(function (n) {
              return n.key;
            })
            .indexOf(target.key),
          value: target.value,
          color: node.color
        };
      });
    })
    .flat();

  const result = {
    nodes: filtered.map(function (node) {
      return {
        name: node.name,
        color: node.color
      };
    }),
    links: links
  };
  console.log(result);

  /*
  result.nodes.forEach(function (node, index: number) {
    console.log(index + ": " + node.name);
  });
  */


  return result;
}

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default function Flow() {
  const [teams, setTeams] = useState();

  const [checkedOne, setCheckedOne] = React.useState(true);
  const [checkedTwo, setCheckedTwo] = React.useState(true);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  useEffect(() => {
    setTeams(toNodes(listAll(), checkedOne, checkedTwo));
  }, [checkedOne, checkedTwo]);

  if (teams) {
    return (
      <React.Fragment>
        <div>
          <Checkbox
            label={LABEL.CURRENT}
            value={checkedOne}
            onChange={handleChangeOne}
          />
          <Checkbox
            label={LABEL.FORECAST}
            value={checkedTwo}
            onChange={handleChangeTwo}
          />
        </div>
        <Sankey
          width={1200}
          height={900}
          data={teams}
          nodePadding={30}
          node={<FlowSankeyNode />}
          margin={{
            left: 100,
            right: 100,
            top: 100,
            bottom: 100
          }}
          link={{ stroke: '#77c878' }}
        >
          <Tooltip />
        </Sankey>
      </React.Fragment>
    );
  } else {
    return <div>Loading ...</div>;
  }
}

