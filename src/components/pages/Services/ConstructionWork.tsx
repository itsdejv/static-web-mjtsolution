import homePhoto from "@/assets/images/home.jpg";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { useTranslation } from "react-i18next";

const ConstructionWork = () => {
  const { t } = useTranslation();

  return (
    <DefaultLayout
      headerImage={homePhoto}
      title={t("services.constructionWork")}
      description={t("services.constructionWork.description")}
    >
      <div className="">
        <p className="font-semibold">We offer these services</p>
        <ul className="list-disc">
          <li>Service #1</li>
          <li>Service #1</li>
          <li>Service #1</li>
          <li>Service #1</li>
          <li>Service #1</li>
          <li>Service #1</li>
          <li>Service #1</li>
          <li>Service #1</li>
        </ul>
      </div>
    </DefaultLayout>
  );
};
export default ConstructionWork;
