import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const DefaultLayout = (props) => {
    const { headerImage, title, description, children } = props;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-screen h-[40vh] lg:h-[40vh] bg-center bg-cover bg-no-repeat relative", style: { backgroundImage: `url(${headerImage})` } }), _jsx("div", { className: "flex flex-col items-center justify-center", children: _jsxs("div", { className: "p-6 w-full sm:md-[90vw] md:w-[80vw] xl:w-[70vw]", children: [_jsxs("div", { className: "mb-6", children: [_jsx("h2", { className: "text-2xl font-semibold", children: title }), _jsx("p", { children: description })] }), children] }) })] }));
};
export default DefaultLayout;
