type SelectTempProps = {
    options: string[]
    value: string;
    onSelect: (selectedValue: string) => void
}


export const SelectTemp = ({ options, value, onSelect }: SelectTempProps) => {
    return <div>
        <h1>{value}</h1>
        {options.map(option => <button onClick={() => onSelect(option)}>{option}</button>)}
    </div>
}