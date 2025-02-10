import { t } from "i18next";

export type SidebarMenuItem = {
  name: string;
  href: string;
  subItems: SidebarMenuItem[];
};

export const generateNavbarMenuItems = () => [
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
