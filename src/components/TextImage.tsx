import { Button } from "@/components/ui/button";

type TextImageProps = {
  title: string;
  text: string;
  imageSrc: string;
  reverse?: boolean;
  reverseOnMobile?: boolean;
  buttonText?: string;
  onClick?: () => void;
};

const TextImage = (props: TextImageProps) => {
  const {
    title,
    text,
    imageSrc,
    reverse = false,
    reverseOnMobile = false,
    buttonText,
    onClick,
  } = props;

  return (
    <div
      className={`flex flex-col items-center sm:flex-row ${
        reverse
          ? reverseOnMobile
            ? "sm:flex-row-reverse flex-col-reverse"
            : "sm:flex-row-reverse"
          : reverseOnMobile
            ? "flex-col-reverse"
            : ""
      }`}
    >
      <div className="flex-1 p-4">
        <img
          src={imageSrc}
          alt="Descriptive"
          className="w-full h-auto rounded-md"
        />
      </div>

      <div className="flex-1 p-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>{text}</p>
        {onClick && buttonText && (
          <Button className="mt-4" onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TextImage;
