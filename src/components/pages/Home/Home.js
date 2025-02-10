import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import homePhoto from "../../../assets/images/home.jpg";
import { useTranslation } from "react-i18next";
import TextImage from "@/components/TextImage";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (_jsxs("div", { className: "flex flex-col items-center gap-6", children: [_jsx("div", { className: "w-screen h-[50vh] lg:h-[75vh] bg-center bg-cover bg-no-repeat relative", style: { backgroundImage: `url(${homePhoto})` }, children: _jsx("div", { className: "absolute left-0 bottom-0 p-2 md:p-10 lg:p-20", children: _jsxs("div", { className: "bg-gray-700 bg-opacity-30 p-5 rounded-md", children: [_jsx("h1", { className: "text-4xl font-bold text-white", children: t("home.title") }), _jsx("span", { className: "text-white", children: t("home.subtitle") })] }) }) }), _jsxs("div", { className: "flex flex-col gap-2 w-screen md:w-[80vw]", children: [_jsx(TextImage, { title: t("services.airConditioning"), text: t("home.services.airConditioning.text"), imageSrc: homePhoto, buttonText: t("button.readMore"), onClick: () => navigate("/air-conditioning") }), _jsx(TextImage, { title: t("services.solarPanels"), text: t("home.services.solarPanels.text"), imageSrc: homePhoto, buttonText: t("button.readMore"), onClick: () => navigate("/solar-panels"), reverse: true }), _jsx(TextImage, { title: t("services.constructionWork"), text: t("home.services.constructionWork.text"), imageSrc: homePhoto, buttonText: t("button.readMore"), onClick: () => navigate("/construction-work") })] })] }));
};
export default Home;
