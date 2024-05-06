import { render, h } from "preact"
import { useState } from "preact/hooks"

const App = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<button onClick={() => setCount(count+1)}>increment</button>
			<button onClick={() => setCount(count-1)}>decrement</button>
			<p>count: {count}</p>
		</div>
	)
}

render(<App />, document.getElementById("root"))
