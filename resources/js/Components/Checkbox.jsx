export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded focus:border-[#1ebe91] focus:ring-[#1ebe91] ' +
                className
            }
        />
    );
}
