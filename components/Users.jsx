"use client";

import { useRouter } from "next/navigation";

function Users({ usersData }) {
	const router = useRouter();
	return (
		<ul className="list-group">
			{usersData.map((user) => (
				<li
					className="list-group-item d-flex justify-content-between
					align-items-center list-group-item-action"
					key={user.id}
					onClick={() => {
						router.push(`/users/${user.id}`);
					}}
				>
					<div>
						<h5>
							{user.id} {user.first_name} {user.last_name}
						</h5>
						<p>{user.email}</p>
					</div>
					<img
						src={user.avatar}
						alt={user.email}
						style={{ borderRadius: "50%" }}
					/>
				</li>
			))}
		</ul>
	);
}

export default Users;
