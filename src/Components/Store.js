
import { observable, action, autorun } from "mobx"
class Store {
    @observable counter = 0;
    constructor() {
        autorun(() => {
           console.log(`Counter: ${this.counter}`)
        })
    }
    increment = action(() => {
        this.counter++;
    })
    decrement = action(() => {
        this.counter--;
    })
    setCounter = action((value) => {
        this.counter = value;
    })
}
const store = new Store();
export default store;


