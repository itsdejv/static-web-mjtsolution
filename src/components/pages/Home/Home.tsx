import homePhoto from "../../../assets/images/home.jpg";
import { useTranslation } from "react-i18next";
import TextImage from "@/components/TextImage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="w-screen h-[50vh] lg:h-[75vh] bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${homePhoto})` }}
      >
        <div className="absolute left-0 bottom-0 p-2 md:p-10 lg:p-20">
          <div className="bg-gray-700 bg-opacity-30 p-5 rounded-md">
            <h1 className="text-4xl font-bold text-white">{t("home.title")}</h1>
            <span className="text-white">{t("home.subtitle")}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-screen md:w-[80vw]">
        <TextImage
          title={t("services.airConditioning")}
          text={t("home.services.airConditioning.text")}
          imageSrc={homePhoto}
          buttonText={t("button.readMore")}
          onClick={() => navigate("/air-conditioning")}
        />

        <TextImage
          title={t("services.solarPanels")}
          text={t("home.services.solarPanels.text")}
          imageSrc={homePhoto}
          buttonText={t("button.readMore")}
          onClick={() => navigate("/solar-panels")}
          reverse
        />

        <TextImage
          title={t("services.constructionWork")}
          text={t("home.services.constructionWork.text")}
          imageSrc={homePhoto}
          buttonText={t("button.readMore")}
          onClick={() => navigate("/construction-work")}
        />
      </div>
    </div>
  );
};
export default Home;
