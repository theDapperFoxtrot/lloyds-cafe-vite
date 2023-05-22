import "./style/style.css";

function App() {
	return (
		<>
			{/* Video element used for looping background (simulating the effect of a gif) */}
			<div className="background-video-container">
				<video
					id="background-video"
					autoPlay
					loop
					muted
				>
					<source
						src="../public/assets/img/lloyd-coffee.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<main>
				<header>
					<img
						className="lloyds-logo"
						src="../public/assets/img/lloyds-320px.jpg"
						alt="Lloyd's Cafe & Bakery"
					/>
					<nav>
						<ul>
							<li>
								<a href="menu.html">Menu</a>
							</li>
							<li>
								<a href="index.html">Home</a>
							</li>
							<li>
								<a href="about.html">About</a>
							</li>
						</ul>
					</nav>
				</header>
				<div className="lloyd-portrait-container">
					<h1>Lloyd&apos;s Cafe & Bakery</h1>
					<img
						className="lloyd-portrait"
						src="../public/assets/img/lloyd.jpg"
						alt="a portrait shot of lloyd"
					/>
					<article></article>
				</div>
			</main>
		</>
	);
}

export default App;
