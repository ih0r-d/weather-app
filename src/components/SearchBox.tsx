import Image from "./Image.tsx";

interface Props {
    placeholder: string;
    boxClassName: string
    imgClassName?: string
    imgSrc: string

}

const SearchBox = ({placeholder, boxClassName, imgSrc, imgClassName}: Props) => {
    return (
        <div className={boxClassName}>
            <input type="text" placeholder={placeholder}/>
            <Image src={imgSrc} alt={placeholder} className={imgClassName || ""}/>
        </div>
    )

}
export default SearchBox;
