import { t } from "i18next";
export const navbarMenuItems = [
    {
        name: t("contact"),
        href: "/contact",
        subItems: [],
    },
    {
        name: t("services"),
        href: "#",
        subItems: [
            {
                name: t("services.airConditioning"),
                href: "/air-conditioning",
                subItems: [],
            },
            {
                name: t("services.solarPanels"),
                href: "/solar-panels",
                subItems: [],
            },
            {
                name: t("services.constructionWork"),
                href: "/construction-work",
                subItems: [],
            },
        ],
    },
];
