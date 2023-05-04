// example Counter from Solid js
import { createSignal, onCleanup } from "solid-js";

const Counter = () => {
	const [count, setCount] = createSignal(0);
	const interval = setInterval(
		() => setCount(c => c + 1),
		1000
	);
	onCleanup(() => clearInterval(interval));
	return <div>Count value is <span>{count()}</span></div>;
};

export default Counter;