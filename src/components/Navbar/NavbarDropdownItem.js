import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
const NavbarDropdownItem = (props) => {
    const { item, isMobile } = props;
    const [open, setOpen] = useState(false);
    return isMobile ? (_jsxs(DropdownMenu, { open: open, onOpenChange: setOpen, children: [_jsx(DropdownMenuTrigger, { className: "flex w-full items-center py-2 text-lg font-semibold cursor-pointer", asChild: true, children: _jsxs("div", { className: "flex justify-between", children: [item.name, _jsx(ChevronDown, { className: cn("transition-transform", open && "rotate-180"), size: 16 })] }) }), _jsx(DropdownMenuContent, { align: "start", children: item.subItems.map((subItem) => (_jsx(DropdownMenuItem, { children: _jsx(Link, { to: subItem.href, children: subItem.name }) }))) })] })) : (_jsxs(DropdownMenu, { open: open, onOpenChange: setOpen, children: [_jsx(DropdownMenuTrigger, { className: "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50", asChild: true, children: _jsxs("div", { className: "flex justify-between items-center cursor-pointer", children: [item.name, _jsx(ChevronDown, { className: cn("ml-1 transition-transform", open && "rotate-180"), size: 16 })] }) }), _jsx(DropdownMenuContent, { children: item.subItems.map((subItem) => (_jsx(DropdownMenuItem, { children: _jsx(Link, { to: subItem.href, className: "w-full", children: subItem.name }) }))) })] }));
};
export default NavbarDropdownItem;
