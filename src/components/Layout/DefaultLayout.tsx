import { ReactNode } from "react";

interface DefaultLayoutProps {
  headerImage: string;
  title: string;
  description: string;
  children: ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { headerImage, title, description, children } = props;

  return (
    <>
      <div
        className="w-screen h-[40vh] lg:h-[40vh] bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${headerImage})` }}
      />
      <div className="flex flex-col items-center justify-center">
        <div className="p-6 w-full sm:md-[90vw] md:w-[80vw] xl:w-[70vw]">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>{description}</p>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
export default DefaultLayout;
