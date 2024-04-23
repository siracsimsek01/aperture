interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}



export function PrimaryButton({children, className = ''} : ButtonProps) {
    return (
        <button className={`bg-white text-black rounded-2xl px-4 py-2 text-[15px] hover:bg-black hover:text-white transition-all duration-300  outline-white hover:shadow-md hover:shadow-white ease-out${className}`}>
            {children}
        </button>
    )
}