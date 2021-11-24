import { Sankey, Tooltip } from "recharts";
import FlowSankeyNode from "./FlowSankeyNode";
import React from "react";

enum NODE_TYPE {
  CAP_SYNTH,
  CAP_SYNTH_JAN,
  CAP_PLATFORM,
  CAP_RUM,
  CAP_RUM_JAN,
  CAP_REPLAY,
  CAP_REPLAY_JAN,
  CAP_LOGS,
  T_SYNTH_VUP,
  T_SYNTH_UI,
  T_SYNTH_CORE,
  T_SYNTH_CLUSTER,
  T_RUM_CORE,
  T_RUM_UI,
  T_RUM_MAIA,
  T_RUM_NOVA,
  T_JS_AGENT,
  T_MOBILE,
  T_MRUM,
  T_SIRIUS,
  T_VEGA,
  T_ALTAIR,
  VCT_SETTINGS,
  NEW_HIRES,
  ATTRITION
}

const C_SYNTH = "#DAF7A6";
const C_PLATFORM = "#581845";
const C_RUM = "#FF5733";
const C_REPLAY = "#FFC300";
const C_LOGS = "#581845";
const C_VCT = "#5866EC";
const C_ATTRITION = "#ED190F";

const nodes = [
  {
    key: NODE_TYPE.CAP_SYNTH,
    name: "Synthetic and Monitors",
    color: C_SYNTH,
    targets: [
      {
        key: NODE_TYPE.T_SYNTH_VUP,
        value: 5
      },
      {
        key: NODE_TYPE.T_SYNTH_UI,
        value: 5
      },
      {
        key: NODE_TYPE.T_SYNTH_CORE,
        value: 8
      },
      {
        key: NODE_TYPE.T_SYNTH_CLUSTER,
        value: 6
      }
    ]
  },
  {
    key: NODE_TYPE.CAP_SYNTH_JAN,
    name: "Synthetic and Monitors Jan",
    color: C_SYNTH,
    targets: []
  },
  {
    key: NODE_TYPE.CAP_PLATFORM,
    name: "Platform",
    color: C_PLATFORM,
    targets: []
  },
  {
    key: NODE_TYPE.CAP_RUM,
    name: "RUM",
    color: C_RUM,
    area: "RUM",
    targets: [
      {
        key: NODE_TYPE.T_RUM_CORE,
        value: 5
      },
      {
        key: NODE_TYPE.T_RUM_UI,
        value: 5
      },
      {
        key: NODE_TYPE.T_MOBILE,
        value: 6
      },
      {
        key: NODE_TYPE.T_JS_AGENT,
        value: 6
      },
      {
        key: NODE_TYPE.T_MRUM,
        value: 6
      },
      {
        key: NODE_TYPE.T_RUM_NOVA,
        value: 9
      },
      {
        key: NODE_TYPE.T_RUM_MAIA,
        value: 6
      }
    ]
  },
  {
    key: NODE_TYPE.CAP_RUM_JAN,
    name: "RUM Jan",
    color: C_RUM,
    targets: []
  },
  {
    key: NODE_TYPE.CAP_REPLAY,
    name: "Session Replay",
    color: C_REPLAY,
    targets: [
      {
        key: NODE_TYPE.T_SIRIUS,
        value: 8
      },
      {
        key: NODE_TYPE.T_VEGA,
        value: 8
      },
      {
        key: NODE_TYPE.T_ALTAIR,
        value: 7
      }
    ]
  },
  {
    key: NODE_TYPE.CAP_REPLAY_JAN,
    name: "Session Replay Jan",
    color: C_REPLAY,
    targets: []
  },
  {
    key: NODE_TYPE.T_SYNTH_VUP,
    name: "Synthetic VUP",
    color: C_SYNTH,
    targets: [
      {
        key: NODE_TYPE.CAP_PLATFORM,
        value: 3
      },
      {
        key: NODE_TYPE.T_SYNTH_CORE,
        value: 2
      }
    ]
  },
  {
    key: NODE_TYPE.T_SYNTH_UI,
    name: "Synthetic UI",
    color: C_SYNTH,
    targets: [
      {
        key: NODE_TYPE.VCT_SETTINGS,
        value: 3
      },
      {
        key: NODE_TYPE.CAP_PLATFORM,
        value: 1
      }
    ]
  },
  {
    key: NODE_TYPE.T_SYNTH_CORE,
    name: "Synthetic Core",
    color: C_SYNTH,
    targets: [
      {
        key: NODE_TYPE.CAP_SYNTH_JAN,
        value: 12
      }
    ]
  },
  {
    key: NODE_TYPE.T_SYNTH_CLUSTER,
    name: "Synthetic Cluster",
    color: C_SYNTH,
    targets: [
      {
        key: NODE_TYPE.CAP_SYNTH_JAN,
        value: 9
      }
    ]
  },
  {
    key: NODE_TYPE.T_RUM_CORE,
    name: "RUM Core",
    color: C_RUM,
    targets: [
      {
        key: NODE_TYPE.CAP_PLATFORM,
        value: 1
      },
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 4
      },
      {
        key: NODE_TYPE.VCT_SETTINGS,
        value: 1
      }
    ]
  },
  {
    key: NODE_TYPE.T_RUM_UI,
    name: "RUM UI",
    color: C_RUM,
    targets: [
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 6
      },
      {
        key: NODE_TYPE.CAP_PLATFORM,
        value: 1
      }
    ]
  },
  {
    key: NODE_TYPE.T_RUM_MAIA,
    name: "Maia",
    color: C_RUM,
    targets: [
      {
        key: NODE_TYPE.ATTRITION,
        value: 3
      },
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 5
      }
    ]
  },
  {
    key: NODE_TYPE.T_RUM_NOVA,
    name: "Nova",
    color: C_RUM,
    targets: [
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 5
      },
      {
        key: NODE_TYPE.T_RUM_MAIA,
        value: 2
      },
      {
        key: NODE_TYPE.CAP_LOGS,
        value: 2
      }
    ]
  },
  {
    key: NODE_TYPE.T_JS_AGENT,
    name: "JS Agent",
    color: C_RUM,
    targets: [
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 4
      },
      {
        key: NODE_TYPE.CAP_PLATFORM,
        value: 1
      }
    ]
  },
  {
    key: NODE_TYPE.T_MOBILE,
    name: "Mobile Agent",
    color: C_RUM,
    targets: [
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 8
      }
    ]
  },
  {
    key: NODE_TYPE.T_MRUM,
    name: "Mobile RUM",
    color: C_RUM,
    targets: [
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 6
      },
      {
        key: NODE_TYPE.VCT_SETTINGS,
        value: 2
      }
    ]
  },
  {
    key: NODE_TYPE.T_SIRIUS,
    name: "Sirius",
    color: C_REPLAY,
    targets: [
      {
        key: NODE_TYPE.CAP_REPLAY_JAN,
        value: 4
      },
      {
        key: NODE_TYPE.ATTRITION,
        value: 4
      }
    ]
  },
  {
    key: NODE_TYPE.T_VEGA,
    name: "Vega",
    color: C_REPLAY,
    targets: [
      {
        key: NODE_TYPE.CAP_REPLAY_JAN,
        value: 7
      },
      {
        key: NODE_TYPE.ATTRITION,
        value: 1
      }
    ]
  },
  {
    key: NODE_TYPE.T_ALTAIR,
    name: "Altair",
    color: C_REPLAY,
    targets: [
      {
        key: NODE_TYPE.CAP_REPLAY_JAN,
        value: 6
      },
      {
        key: NODE_TYPE.ATTRITION,
        value: 1
      }
    ]
  },

  {
    key: NODE_TYPE.VCT_SETTINGS,
    name: "Settings 2.0 VCT",
    color: C_VCT,
    targets: []
  },
  {
    key: NODE_TYPE.NEW_HIRES,
    name: "New Hires",
    targets: [
      {
        key: NODE_TYPE.T_SYNTH_CORE,
        value: 2
      },
      {
        key: NODE_TYPE.T_SYNTH_CLUSTER,
        value: 3
      },
      {
        key: NODE_TYPE.T_RUM_UI,
        value: 2
      },
      {
        key: NODE_TYPE.T_MOBILE,
        value: 2
      },
      {
        key: NODE_TYPE.T_RUM_CORE,
        value: 1
      }
    ]
  },
  {
    key: NODE_TYPE.ATTRITION,
    name: "Attrition",
    color: C_ATTRITION,
    targets: []
  },
  {
    key: NODE_TYPE.CAP_LOGS,
    name: "Logs",
    color: C_LOGS,
    targets: []
  }
];

const filter = "RUM";

export default function Flow() {
  const filtered = nodes.filter(function (node) {
    return true;
    /*    return filter === undefined 
    || (node.area && node.area === filter);*/
  });

  const links = filtered
    .map(function (node) {
      return node.targets.map(function (target) {
        return {
          source: nodes
            .map(function (n) {
              return n.key;
            })
            .indexOf(node.key),
          target: nodes
            .map(function (n) {
              return n.key;
            })
            .indexOf(target.key),
          value: target.value
        };
      });
    })
    .flat();

  const data0 = {
    nodes: filtered.map(function (node) {
      return {
        name: node.name,
        color: node.color
      };
    }),
    links: links
  };

  return (
    <React.Fragment>
      <Sankey
        width={1200}
        height={900}
        data={data0}
        nodePadding={30}
        node={<FlowSankeyNode />}
        margin={{
          left: 100,
          right: 100,
          top: 100,
          bottom: 100
        }}
        link={{ stroke: "#77c878" }}
      >
        <Tooltip />
      </Sankey>
    </React.Fragment>
  );
}
