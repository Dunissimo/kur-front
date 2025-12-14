import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import RemoveTableItem from './RemoveTableItem';
import { Item, ItemType } from '@/lib/types';
import { getId } from '@/lib/utils';
import { isDate } from 'date-fns';
import EditTableItem from './EditTableItem';

interface TableProps {
    caption: string;
    head: string[];
    body?: Item[];
    itemName: ItemType;
    removeFn: (id: number) => void;
    setEditOpen: (open: boolean) => void;
    setEditId: (id: number) => void;
}

function PageTable({
    itemName,
    caption,
    head,
    body,
    setEditId,
    removeFn,
    setEditOpen,
}: TableProps) {
    return (
        <Table>
            <TableCaption>{caption}</TableCaption>

            <TableHeader>
                <TableRow>
                    {head.map((item, index) => (
                        <TableHead key={index}>{item}</TableHead>
                    ))}

                    <TableHead></TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {body?.map((item, index) => {
                    return (
                        <TableRow key={index}>
                            {Object.values(item).map((value, index) => {
                                if (value instanceof Object) return;

                                let processdValue = value;

                                if (isDate(value)) {
                                    processdValue = new Date(
                                        value,
                                    ).toLocaleDateString('ru-RU', {
                                        dateStyle: 'medium',
                                    });
                                }

                                if (
                                    typeof value === 'string' &&
                                    !isNaN(Date.parse(value))
                                ) {
                                    processdValue = new Date(
                                        value,
                                    ).toLocaleDateString('ru-RU', {
                                        dateStyle: 'short',
                                    });
                                }

                                return (
                                    <TableCell key={index}>
                                        {processdValue || '—'}
                                    </TableCell>
                                );
                            })}

                            <TableCell className="w-[30px]">
                                <EditTableItem
                                    setEditId={setEditId}
                                    setEditOpen={setEditOpen}
                                    id={getId(itemName, item)}
                                />
                            </TableCell>
                            <TableCell className="w-[30px]">
                                <RemoveTableItem
                                    fn={removeFn}
                                    id={getId(itemName, item)}
                                />
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default PageTable;
