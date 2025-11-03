import Link from "next/link";

const Users = () => {
    return (
        <main>
            <h1>User Details: </h1>
            <ul>
                <li><Link href="/Users/1">User 1:</Link></li>
                <li><Link href="/Users/2">User 2:</Link></li>
                <li><Link href="/Users/3">User 3:</Link></li>
            </ul>
        </main>
    )
}
export default Users
