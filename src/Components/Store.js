
import { observable, action, configure, autorun } from "mobx"
configure({
    enforceActions: true,
})
class Store {
    @observable counter = 0;
    constructor() {
        autorun(() => {
            console.log(`Counter: ${this.state.counter}`)
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


