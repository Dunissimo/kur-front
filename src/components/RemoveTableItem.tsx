import {
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Trash } from 'lucide-react';
import { useState } from 'react';

interface RemoveTableItemProps {
    fn: (id: number) => void;
    id: number;
}

function RemoveTableItem({ fn, id }: RemoveTableItemProps) {
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    return (
        <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
            <AlertDialogTrigger>
                <Trash className="w-[20px]  m-auto cursor-pointer hover:stroke-red-500" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Удаление процесса</AlertDialogTitle>
                    <AlertDialogDescription>
                        Это действие нельзя будет отменить. Вы уверены, что
                        хотите продолжить?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Отменить</AlertDialogCancel>
                    <AlertDialogAction onClick={() => fn(id)}>
                        Удалить
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default RemoveTableItem;
