import { h } from "preact"

const PlayerBar = () => (
	<div>
		<h1>Player bar</h1>
		<audio controls>
			<source src="/dontcommit.mp3"></source>
		</audio>
	</div>
)

export default PlayerBar;
