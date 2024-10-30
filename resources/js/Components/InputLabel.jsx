export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium text-[#c8d2d7] dark:text-[#c8d2d7] ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
