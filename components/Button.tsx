interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({ text, className, onClick }: ButtonProps) => {
    return (
        <button
            className={`bg-black hover:bg-black/85  text-white font-sans py-2 flex items-center justify-center rounded-full hover:scale-102 active:scale-90 transition duration-300 shadow-lg shadow-white/20 cursor-pointer ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
export default Button