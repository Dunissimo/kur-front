import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface TextInputFieldProps {
    name: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any;
}

function TextInputField({ name, label, control }: TextInputFieldProps) {
    return (
        <FormField
            control={control}
            name={String(name)}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input autoComplete="off" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export default TextInputField;
