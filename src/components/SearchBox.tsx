import Image from "./Image.tsx";
import { useRef } from "react";

interface Props {
    placeholder: string;
    boxClassName: string;
    imgClassName?: string;
    imgSrc: string;
    onClick: (input: string) => void;
}

const SearchBox = ({ placeholder, boxClassName, imgSrc, imgClassName, onClick }: Props) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        const inputValue = inputRef.current?.value.trim();
        if (inputValue) {
            onClick(inputValue);
        }
    };

    return (
        <div className={boxClassName}>
            <input ref={inputRef} type="text" placeholder={placeholder} />
            <Image
                src={imgSrc}
                alt={placeholder}
                className={imgClassName || ""}
                onClick={handleClick}
            />
        </div>
    );
};

export default SearchBox;
