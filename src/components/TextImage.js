import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
const TextImage = (props) => {
    const { title, text, imageSrc, reverse = false, reverseOnMobile = false, buttonText, onClick, } = props;
    return (_jsxs("div", { className: `flex flex-col items-center sm:flex-row ${reverse
            ? reverseOnMobile
                ? "sm:flex-row-reverse flex-col-reverse"
                : "sm:flex-row-reverse"
            : reverseOnMobile
                ? "flex-col-reverse"
                : ""}`, children: [_jsx("div", { className: "flex-1 p-4", children: _jsx("img", { src: imageSrc, alt: "Descriptive", className: "w-full h-auto rounded-md" }) }), _jsxs("div", { className: "flex-1 p-4", children: [_jsx("h2", { className: "text-2xl font-semibold", children: title }), _jsx("p", { children: text }), onClick && buttonText && (_jsx(Button, { className: "mt-4", onClick: onClick, children: buttonText }))] })] }));
};
export default TextImage;
