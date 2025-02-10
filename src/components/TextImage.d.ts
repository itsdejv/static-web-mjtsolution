type TextImageProps = {
    title: string;
    text: string;
    imageSrc: string;
    reverse?: boolean;
    reverseOnMobile?: boolean;
    buttonText?: string;
    onClick?: () => void;
};
declare const TextImage: (props: TextImageProps) => import("react/jsx-runtime").JSX.Element;
export default TextImage;
