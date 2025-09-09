import { useSmoothScroll } from "./ScrollContext";

interface ButtonProps {
    text: string;
    className?: string;
    onClick?: string;
}

const Button = ({ text, className, onClick }: ButtonProps) => {
    const lenis = useSmoothScroll();
    return (
        <button
            className={`bg-black hover:bg-black/85  text-white font-sans py-2 flex items-center justify-center rounded-full hover:scale-102 active:scale-100 transition duration-300 shadow-lg shadow-white/20 cursor-pointer ${className}`}
            onClick={() => {
                const target = document.querySelector(`#${onClick}`) as HTMLElement;
                if (target && lenis) {
                    lenis.scrollTo(target);
                }
            }}
        >
            {text}
        </button>
    );
};
export default Button