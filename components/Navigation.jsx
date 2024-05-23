import Link from "next/link";

function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" href="/">
					My first Next App
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						<Link className="nav-link" href="/about">
							About
						</Link>
						<Link className="nav-link" href="/services">
							Services
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
