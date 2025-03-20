interface Props {
    src: string;
    alt: string;
    className?: string;
    onClick: () => void;
}

const Image = ({ src, alt, className, onClick }: Props) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className || ""}
            onClick={onClick}
        />
    );
};

export default Image;
