import DefaultLayout from "@/components/Layout/DefaultLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trans, useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";
import homePhoto from "@/assets/images/home.jpg";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <DefaultLayout
      headerImage={homePhoto}
      title={t("contact.title")}
      description={t("contact.subtitle")}
    >
      <div className="flex flex-wrap gap-4 justify-center">
        <Card className="w-72 overflow-hidden shadow-none">
          <CardHeader>
            <CardTitle>{t("contact.contact.name")}</CardTitle>
            <CardDescription>
              <Trans
                i18nKey="contact.contact.description"
                components={{
                  span: <span className="text-primary" />,
                }}
              />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-[max-content_1fr] gap-2 items-center">
              <Phone size={16} />
              <a href="tel:+420777720640">+420 777 720 640</a>
              <Mail size={16} />
              <a href="mailto:jelinekmjt@gmail.com">jelinekmjt@gmail.com</a>
            </div>
          </CardContent>
        </Card>

        <Card className="w-72 overflow-hidden shadow-none">
          <CardHeader>
            <CardTitle>{t("contact.billingData.name")}</CardTitle>
            <CardDescription>
              {t("contact.billingData.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">M.J.T.Solution s.r.o.</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: t("contact.billingData.address"),
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="w-72 overflow-hidden shadow-none">
          <CardHeader>
            <CardTitle>{t("contact.companyInfo.name")}</CardTitle>
            <CardDescription>
              {t("contact.companyInfo.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-[max-content_1fr] gap-2 items-center leading-none">
              <span className="font-semibold">CIN</span>
              <span>09853561</span>
              <span className="font-semibold">IN/TIN</span>
              <span>CZ09853561</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
};
export default Contact;
