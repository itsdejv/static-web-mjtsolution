import homePhoto from "@/assets/images/home.jpg";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { useTranslation } from "react-i18next";

const SolarPanels = () => {
  const { t } = useTranslation();

  const solarPanelsItems = t("services.solarPanels.list", {
    returnObjects: true,
  }) as string[];

  return (
    <DefaultLayout
      headerImage={homePhoto}
      title={t("services.solarPanels")}
      description={t("services.solarPanels.description")}
    >
      <div className="">
        <p className="font-semibold">{t("services.offeringText")}</p>
        <ul className="list-disc">
          {solarPanelsItems.map((item, index) => (
            <li key={`sonal-panels-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};
export default SolarPanels;
