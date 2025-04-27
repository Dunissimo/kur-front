import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';

interface DateInputFieldProps {
    name: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any;
}

function DateInputField({ name, label, control }: DateInputFieldProps) {
    return (
        <FormField
            control={control}
            name={String(name)}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>{label}</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    className={
                                        !field.value
                                            ? 'justify-start text-muted-foreground'
                                            : 'justify-start'
                                    }
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {field.value
                                        ? field.value.toLocaleDateString()
                                        : 'Выберите дату'}
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                initialFocus
                                fromDate={new Date()}
                            />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export default DateInputField;
