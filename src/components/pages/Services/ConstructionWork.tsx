import homePhoto from "@/assets/images/home.jpg";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { useTranslation } from "react-i18next";

const ConstructionWork = () => {
  const { t } = useTranslation();

  const constructionWorkItems = t("services.constructionWork.list", {
    returnObjects: true,
  }) as string[];

  return (
    <DefaultLayout
      headerImage={homePhoto}
      title={t("services.constructionWork")}
      description={t("services.constructionWork.description")}
    >
      <div className="">
        <p className="font-semibold">{t("services.offeringText")}</p>
        <ul className="list-disc">
          {constructionWorkItems.map((item, index) => (
            <li key={`construction-service-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};
export default ConstructionWork;
