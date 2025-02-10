import { ReactNode } from "react";
interface DefaultLayoutProps {
    headerImage: string;
    title: string;
    description: string;
    children: ReactNode;
}
declare const DefaultLayout: (props: DefaultLayoutProps) => import("react/jsx-runtime").JSX.Element;
export default DefaultLayout;
