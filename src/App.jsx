import "./style/style.css";

function App() {
	window.addEventListener("scroll", function () {
		// Get the distance from the top of the page
		const distanceFromTop = window.scrollY;

		// Check if the user has scrolled to the desired section
		if (distanceFromTop > 100) {
			// Add class to element to trigger animation
			document.querySelector(".my-element").classList.add("animate");
		}
	});

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
						src="assets/img/lloyd-coffee.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<main>
				<header>
					<a href="index.html">
						<img
							className="lloyds-logo fade-in"
							src="assets/img/lloyds-320px.jpg"
							alt="Lloyd's Cafe & Bakery"
						/>
					</a>
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
				<div className="lloyd-portrait-container hidden">
					<h1>
						<span>Lloyd&apos;s</span> Cafe & Bakery
					</h1>
					<img
						className="lloyd-portrait"
						src="assets/img/lloyd.jpg"
						alt="a portrait shot of lloyd"
					/>
					<article></article>
				</div>
			</main>
		</>
	);
}

export default App;
