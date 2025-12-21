/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface CustomSelectProps {
    options: any[];
    value: any;
    setValue: any;
    placeholder: any;
}

function CustomSelect({
    options,
    setValue,
    value,
    placeholder,
}: CustomSelectProps) {
    return (
        <Select onValueChange={(value) => setValue(value)} value={value || ''}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default CustomSelect;
