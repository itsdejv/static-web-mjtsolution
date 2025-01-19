export type SidebarMenuItem = {
  name: string;
  href: string;
  subItems: SidebarMenuItem[];
};

export const navbarMenuItems: SidebarMenuItem[] = [
  {
    name: "Contact",
    href: "/contact",
    subItems: [],
  },
];
