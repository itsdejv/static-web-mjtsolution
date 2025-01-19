import { t } from "i18next";

export type SidebarMenuItem = {
  name: string;
  href: string;
  subItems: SidebarMenuItem[];
};

export const navbarMenuItems: SidebarMenuItem[] = [
  {
    name: t("menu.contact"),
    href: "/contact",
    subItems: [],
  },
  {
    name: t("menu.services"),
    href: "#",
    subItems: [
      {
        name: t("menu.services.hvac"),
        href: "/hvac",
        subItems: [],
      },
      {
        name: t("menu.services.solarPanels"),
        href: "/solar-panels",
        subItems: [],
      },
      {
        name: t("menu.services.constructionWork"),
        href: "/construction-work",
        subItems: [],
      },
    ],
  },
];
