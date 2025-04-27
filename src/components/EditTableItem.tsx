import { Pencil } from 'lucide-react';

interface EditTableItemProps {
    id: number;
    setEditOpen: (open: boolean) => void;
    setEditId: (id: number) => void;
}

function EditTableItem({ id, setEditOpen, setEditId }: EditTableItemProps) {
    return (
        <Pencil
            onClick={() => {
                setEditId(id);
                setEditOpen(true);
            }}
            className="w-[20px] m-auto cursor-pointer hover:stroke-amber-300"
        />
    );
}

export default EditTableItem;
