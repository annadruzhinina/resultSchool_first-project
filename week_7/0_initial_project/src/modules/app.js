import { JSBlock } from "./js-block";

export default class App {
  #jsBlock;
  constructor() {
    this.#jsBlock = new JSBlock();
  }

  run() {
    const jsBlockHTML = this.#jsBlock.render();
    document.body.append(jsBlockHTML);
  }
}

// export function createFunc() {
//   console.log("createFunc");
// }

// export { App };
