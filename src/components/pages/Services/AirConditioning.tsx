import homePhoto from "@/assets/images/home.jpg";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { useTranslation } from "react-i18next";

const AirConditioning = () => {
  const { t } = useTranslation();

  const airConditioningItems = t("services.airConditioning.list", {
    returnObjects: true,
  }) as string[];

  return (
    <DefaultLayout
      headerImage={homePhoto}
      title={t("services.airConditioning")}
      description={t("services.airConditioning.description")}
    >
      <div className="">
        <p className="font-semibold">{t("services.offeringText")}</p>
        <ul className="list-disc">
          {airConditioningItems.map((item, index) => (
            <li key={`air-conditioning-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};
export default AirConditioning;
