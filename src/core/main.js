let CORE_NODE = require("../factory/nodes/nodes.factory").CORE_NODE;
let INIT_NODE = require("../factory/nodes/nodes.factory").INIT_NODE;

exports.Core = {
  protocolValues: {},
  init() {
    this.protocolValues = INIT_NODE;
    return INIT_NODE;
  },
  setEndpointConfig(initNode) {
    let keys = Object.keys(initNode);
    keys.map(value => {
      if (this.protocolValues[value]) {
        this.protocolValues[value] = initNode[value];
      }
    });
  },
  isCompactible() {
    return true;
  },
  generateNodes() {
    return CORE_NODE;
  }
};
