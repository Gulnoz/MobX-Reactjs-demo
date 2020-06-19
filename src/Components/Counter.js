import React from 'react';
import { observer } from "mobx-react"

const Counter = (props) => {
    const { store } = props;
    return (
        <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{store.counter}</strong></p>

            <button className="btn btn-primary" onClick={() => store.increment}>Increment</button>
            <button className="btn btn-primary" onClick={() => store.decrement}>Decrement</button>

        </div>
    );
}
export default observer(Counter);

