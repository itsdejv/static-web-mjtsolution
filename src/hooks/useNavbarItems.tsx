import { useTranslation } from "react-i18next";

export type SidebarMenuItem = {
  name: string;
  href: string;
  subItems: SidebarMenuItem[];
};

export const useNavbarMenuItems = (): SidebarMenuItem[] => {
  const { t } = useTranslation();

  return [
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
};
