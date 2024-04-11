import UserList from "./components/UserList";

const response = await fetch("http://localhost:3000/api/todos");
const data = await response.json()

export default function Home() {
    return (
        <>
            <UserList data={data} />
        </>
    );
}
