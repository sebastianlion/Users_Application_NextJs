import Users from "../components/Users";

async function fetchUsers() {
	const users = await fetch("https://reqres.in/api/users");
	const data = await users.json();
	return data.data;
}

async function IndexPage() {
	const usersData = await fetchUsers();
	return <Users usersData={usersData} />;
}

export default IndexPage;
