// example Counter from Solid js
import { createSignal } from "solid-js";

const Counter = () => {
	const [count, setCount] = createSignal(0);
	
	return <div>
        Count value is <span >{count()}</span>
        <button onClick={() => setCount((c) => c + 1)}>
            Increment
        </button>
    
        </div>;
};

export default Counter;
