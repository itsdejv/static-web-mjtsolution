import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarMenuItem } from "@/utils/helpers/navbar.tsx";
import { useState } from "react";
import { cn } from "@/lib/utils.ts";

interface NavbarDropdownItemProps {
  item: SidebarMenuItem;
  isMobile?: boolean;
}

const NavbarDropdownItem = (props: NavbarDropdownItemProps) => {
  const { item, isMobile } = props;

  const [open, setOpen] = useState(false);

  return isMobile ? (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className="flex w-full items-center py-2 text-lg font-semibold cursor-pointer"
        asChild
      >
        <div className="flex justify-between">
          {item.name}
          <ChevronDown
            className={cn("transition-transform", open && "rotate-180")}
            size={16}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {item.subItems.map((subItem) => (
          <DropdownMenuItem>
            <Link to={subItem.href}>{subItem.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        asChild
      >
        <div className="flex justify-between items-center cursor-pointer">
          {item.name}
          <ChevronDown
            className={cn("ml-1 transition-transform", open && "rotate-180")}
            size={16}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {item.subItems.map((subItem) => (
          <DropdownMenuItem>
            <Link to={subItem.href} className="w-full">
              {subItem.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavbarDropdownItem;
