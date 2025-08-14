import { Card } from "primereact/card";

export interface UserCardProps {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
}

interface Props {
    user: UserCardProps;
}

export default function UserCard({ user }: Props) {
    return (
        <Card title={user.name} subTitle={user.username}>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name} - {user.company.catchPhrase}</p>
            <p><strong>Company Description:</strong> {user.company.bs}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        </Card>
    );
}
