import { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useNavigate, useParams } from 'react-router';
import UserCard, { type UserCardProps } from '~/components/Users/UserCard';

export default function UserDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<UserCardProps | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    //Fallback to fetch user data if not provided in state
    useEffect(() => {
        if (!user) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
                .then(data => setUser(data))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return (
            <div className="p-d-flex p-jc-center p-ai-center" style={{ height: '100vh' }}>
                <ProgressSpinner />
            </div>
        );
    }

    if (!user) {
        return <p>User not found.</p>;
    }

    return (
        <div className="p-4">
            <Button
                label="Back to Users"
                icon="pi pi-arrow-left"
                className="p-button-text mb-3"
                onClick={() => navigate('/users')}
            />
           <UserCard user={user} />
        </div>
    );
}
