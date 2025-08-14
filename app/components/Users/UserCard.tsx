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
            <div className="p-grid p-dir-col md:p-dir-row p-gap-3">
                <div className="p-col">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                </div>
                <div className="p-col">
                    <p><strong>Company:</strong> {user.company.name} - {user.company.catchPhrase}</p>
                    <p><strong>Company Description:</strong> {user.company.bs}</p>
                    <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                </div>
            </div>
        </Card >
    );
}
