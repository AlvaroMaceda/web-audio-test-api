import inLaws from "../utils/inLaws";
import utils from "../utils";

global.Event = global.Event || class Event {
  constructor() {
    throw new TypeError("Illegal constructor");
  }
};

export default class Event extends inLaws(global.Event) {
  constructor(name, target) {
    super();

    Object.defineProperty(this, "_", { value: {} });

    this._.type = name;
    this._.target = utils.defaults(target, null);
    this._.timestamp = Date.now();
  }

  get type() {
    return this._.type;
  }

  get target() {
    return this._.target;
  }

  get timestamp() {
    return this._.timestamp;
  }
}
