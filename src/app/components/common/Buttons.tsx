interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}



export function PrimaryButton({children, className = ''} : ButtonProps) {
    return (
        <button className={`bg-white text-black rounded-2xl px-4 py-2 text-lg ${className}`}>
            {children}
        </button>
    )
}