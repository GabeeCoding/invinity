import { render, h } from "preact"
import { useState } from "preact/hooks"
import { Router, Route } from "preact-router"

import PlayerBar from "./playerBar.tsx"

import About from "./pages/About.tsx"
import Home from "./pages/Home.tsx"
import NotFoundPage from "./pages/NotFoundPage.tsx"

const App = () => {
	return (
		<div>
			<h1>Invinity</h1>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route default component={NotFoundPage} />
			</Router>
			<a href="/about">about page hyperlink</a>
			<a href="/">home page hyperlink</a>
			<PlayerBar />
		</div>
	)
}

render(<App />, document.getElementById("root"))
