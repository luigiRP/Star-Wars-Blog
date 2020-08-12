import React from "react";

export default function Details() {
	return (
		<div className="container bg-white mt-5 p-3 ">
			<div className="card mb-3 d-flex align-items-baseline">
				<div className="row no-gutters ">
					<div className="col-md-4">
						<img
							src="https://mediad.publicbroadcasting.net/p/wuis/files/styles/x_large/public/202002/marvel-star-wars-allegiance.jpg"
							className="card-img photo"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
