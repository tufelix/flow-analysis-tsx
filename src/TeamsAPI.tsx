enum NODE_TYPE {
  CAP_SYNTH = "CAP_SYNTH",
  CAP_SYNTH_JAN = "CAP_SYNTH_JAN",
  CAP_PLATFORM = "CAP_PLATFORM",
  CAP_RUM = "CAP_RUM",
  CAP_RUM_JAN = "CAP_RUM_JAN",
  CAP_REPLAY = "CAP_REPLAY",
  CAP_REPLAY_JAN = "CAP_REPLAY_JAN",
  CAP_LOGS = "CAP_LOGS",
  T_SYNTH_VUP = "T_SYNTH_VUP",
  T_SYNTH_UI = "T_SYNTH_UI",
  T_SYNTH_CORE = "T_SYNTH_CORE",
  T_SYNTH_CLUSTER = "T_SYNTH_CLUSTER",
  T_RUM_CORE = "T_RUM_CORE",
  T_RUM_UI = "T_RUM_UI",
  T_RUM_MAIA = "T_RUM_MAIA",
  T_RUM_NOVA = "T_RUM_NOVA",
  T_JS_AGENT = "T_JS_AGENT",
  T_MOBILE = "T_MOBILE",
  T_MRUM = "T_MRUM",
  T_SIRIUS = "T_SIRIUS",
  T_VEGA = "T_VEGA",
  T_ALTAIR = "T_ALTAIR",
  VCT_SETTINGS = "VCT_SETTINGS",
  ANOMALY = "ANOMALY",
  NEW_HIRES = "NEW_HIRES",
  ATTRITION = "ATTRITION",
  TEMP_LEAVE = "TEMP_LEAVE"
}

const C_SYNTH = "#DAF7A6";
const C_PLATFORM = "#581845";
const C_RUM = "#FF5733";
const C_REPLAY = "#FFC300";
const C_LOGS = "#581845";
const C_VCT = "#5866EC";
const C_ATTRITION = "#ED190F";

export type Target = {
  key: NODE_TYPE;
  value: number;
};

export enum LABEL {
  FORECAST = "FORECAST",
  CURRENT = "CURRENT",
  SYNTHETIC = "SYNTHETIC",
  RUM = "RUM",
  MOBILE = "MOBILE",
  WEB = "WEB",
  SESSIONREPLAY = "SESSION REPLAY"
}

export type Node = {
  key: NODE_TYPE;
  name: string;
  color?: string;
  label?: LABEL[];
  targets: Target[];
};

const nodes: Node[] = [
  {
    key: NODE_TYPE.CAP_SYNTH,
    name: "Synthetic and Monitors",
    color: C_SYNTH,
    label: [LABEL.SYNTHETIC, LABEL.CURRENT],
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
    label: [LABEL.SYNTHETIC, LABEL.FORECAST],
    targets: []
  },
  {
    key: NODE_TYPE.CAP_PLATFORM,
    name: "Platform",
    color: C_PLATFORM,
    label: [LABEL.FORECAST],
    targets: []
  },
  {
    key: NODE_TYPE.CAP_RUM,
    name: "RUM",
    color: C_RUM,
    label: [LABEL.CURRENT],
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
    label: [LABEL.FORECAST],
    targets: []
  },
  {
    key: NODE_TYPE.CAP_REPLAY,
    name: "Session Replay",
    color: C_REPLAY,
    label: [LABEL.CURRENT],
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
    label: [LABEL.FORECAST],
    targets: []
  },
  {
    key: NODE_TYPE.T_SYNTH_VUP,
    name: "Synthetic VUP",
    color: C_SYNTH,
    label: [LABEL.SYNTHETIC, LABEL.CURRENT, LABEL.FORECAST],
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
    label: [LABEL.SYNTHETIC, LABEL.CURRENT, LABEL.FORECAST],
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
    label: [LABEL.SYNTHETIC, LABEL.CURRENT, LABEL.FORECAST],
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
    label: [LABEL.SYNTHETIC, LABEL.CURRENT, LABEL.FORECAST],
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
    label: [LABEL.CURRENT, LABEL.FORECAST],
    targets: [
      {
        key: NODE_TYPE.CAP_PLATFORM,
        value: 1
      },
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 3
      },
      {
        key: NODE_TYPE.ANOMALY,
        value: 1
      }
    ]
  },
  {
    key: NODE_TYPE.T_RUM_UI,
    name: "RUM UI",
    color: C_RUM,
    label: [LABEL.CURRENT, LABEL.FORECAST],
    targets: [
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 3
      },
      {
        key: NODE_TYPE.CAP_PLATFORM,
        value: 1
      },
      {
        key: NODE_TYPE.TEMP_LEAVE,
        value: 1
      }

    ]
  },
  {
    key: NODE_TYPE.T_RUM_MAIA,
    name: "Maia",
    color: C_RUM,
    label: [LABEL.CURRENT, LABEL.FORECAST],
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
    label: [LABEL.CURRENT, LABEL.FORECAST],
    targets: [
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 4
      },
      {
        key: NODE_TYPE.T_RUM_MAIA,
        value: 2
      },
      {
        key: NODE_TYPE.CAP_LOGS,
        value: 3
      }
    ]
  },
  {
    key: NODE_TYPE.T_JS_AGENT,
    name: "JS Agent",
    color: C_RUM,
    label: [LABEL.CURRENT, LABEL.FORECAST],
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
    label: [LABEL.CURRENT, LABEL.FORECAST],
    targets: [
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 6
      }
    ]
  },
  {
    key: NODE_TYPE.T_MRUM,
    name: "Mobile RUM",
    color: C_RUM,
    label: [LABEL.CURRENT, LABEL.FORECAST],
    targets: [
      {
        key: NODE_TYPE.CAP_RUM_JAN,
        value: 6
      },
      {
        key: NODE_TYPE.ANOMALY,
        value: 2
      }
    ]
  },
  {
    key: NODE_TYPE.T_SIRIUS,
    name: "Sirius",
    color: C_REPLAY,
    label: [LABEL.CURRENT, LABEL.FORECAST],
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
    label: [LABEL.CURRENT, LABEL.FORECAST],
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
    label: [LABEL.CURRENT, LABEL.FORECAST],
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
    label: [LABEL.FORECAST],
    targets: []
  },
  {
    key: NODE_TYPE.NEW_HIRES,
    name: "New Hires",
    label: [LABEL.CURRENT, LABEL.FORECAST],
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
    label: [LABEL.CURRENT, LABEL.FORECAST],
    targets: []
  },
  {
    key: NODE_TYPE.CAP_LOGS,
    name: "Logs",
    color: C_LOGS,
    label: [LABEL.FORECAST],
    targets: []
  },
  {
    key: NODE_TYPE.ANOMALY,
    name: "Settings Anomaly Detection",
    color: C_VCT,
    label: [LABEL.CURRENT, LABEL.FORECAST],
    targets: []
  },
  {
    key: NODE_TYPE.TEMP_LEAVE,
    name: "Temporary Leaves",
    label: [LABEL.CURRENT, LABEL.FORECAST],
    targets: []
  }
];

export default function listAll() {
  console.log("Loading ...");
  return nodes;
}
