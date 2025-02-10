import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Trans, useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";
import homePhoto from "@/assets/images/home.jpg";
const Contact = () => {
    const { t } = useTranslation();
    return (_jsx(DefaultLayout, { headerImage: homePhoto, title: t("contact.title"), description: t("contact.subtitle"), children: _jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [_jsxs(Card, { className: "w-72 overflow-hidden shadow-none", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: t("contact.contact.name") }), _jsx(CardDescription, { children: _jsx(Trans, { i18nKey: "contact.contact.description", components: {
                                            span: _jsx("span", { className: "text-primary" }),
                                        } }) })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-[max-content_1fr] gap-2 items-center", children: [_jsx(Phone, { size: 16 }), _jsx("a", { href: "tel:+420777720640", children: "+420 777 720 640" }), _jsx(Mail, { size: 16 }), _jsx("a", { href: "mailto:jelinekmjt@gmail.com", children: "jelinekmjt@gmail.com" })] }) })] }), _jsxs(Card, { className: "w-72 overflow-hidden shadow-none", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: t("contact.billingData.name") }), _jsx(CardDescription, { children: t("contact.billingData.description") })] }), _jsx(CardContent, { children: _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("span", { className: "font-semibold", children: "M.J.T.Solution s.r.o." }), _jsx("span", { dangerouslySetInnerHTML: {
                                            __html: t("contact.billingData.address"),
                                        } })] }) })] }), _jsxs(Card, { className: "w-72 overflow-hidden shadow-none", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: t("contact.companyInfo.name") }), _jsx(CardDescription, { children: t("contact.companyInfo.description") })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-[max-content_1fr] gap-2 items-center leading-none", children: [_jsx("span", { className: "font-semibold", children: "CIN" }), _jsx("span", { children: "09853561" }), _jsx("span", { className: "font-semibold", children: "IN/TIN" }), _jsx("span", { children: "CZ09853561" })] }) })] })] }) }));
};
export default Contact;
