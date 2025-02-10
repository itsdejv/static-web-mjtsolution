import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import homePhoto from "@/assets/images/home.jpg";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { useTranslation } from "react-i18next";
const SolarPanels = () => {
    const { t } = useTranslation();
    return (_jsx(DefaultLayout, { headerImage: homePhoto, title: t("services.solarPanels"), description: t("services.solarPanels.description"), children: _jsxs("div", { className: "", children: [_jsx("p", { className: "font-semibold", children: "We offer these services" }), _jsxs("ul", { className: "list-disc", children: [_jsx("li", { children: "Service #1" }), _jsx("li", { children: "Service #1" }), _jsx("li", { children: "Service #1" }), _jsx("li", { children: "Service #1" }), _jsx("li", { children: "Service #1" }), _jsx("li", { children: "Service #1" }), _jsx("li", { children: "Service #1" }), _jsx("li", { children: "Service #1" })] })] }) }));
};
export default SolarPanels;
