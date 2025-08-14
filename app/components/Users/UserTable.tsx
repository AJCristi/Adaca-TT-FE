import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useNavigate } from "react-router";

export interface UserTableProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Props {
  users: UserTableProps[];
}

export default function UserTable({ users }: Props) {
  const navigate = useNavigate();

  return (
    <DataTable
      value={users}
      paginator
      rows={5}
      onRowClick={(e) => navigate(`/users/${e.data.id}`)}
    >
      <Column field="name" header="Name" />
      <Column field="username" header="Username" />
      <Column field="email" header="Email" />
    </DataTable>
  );
}
