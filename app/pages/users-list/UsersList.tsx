import { ProgressSpinner } from "primereact/progressspinner";
import { useEffect, useState } from "react";
import UserTable, { type UserTableProps } from "~/components/Users/UserTable";

export default function UsersList() {
    const [users, setUsers] = useState<UserTableProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="p-d-flex p-jc-center p-ai-center" style={{ height: '100vh' }}>
                <ProgressSpinner />
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1>User Directory</h1>
            <UserTable users={users} />
        </div>
    );
}