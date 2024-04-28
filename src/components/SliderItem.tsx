import { useTranslation } from "react-i18next";
import "../styles/MainSlider.css";

function SliderItem(props: any) {
  const { t } = useTranslation();


  return (
    <>
      <img className="d-block w-100" src={props.image} alt="slider item " />
      <div className="slider-caption text-white">
        <h3 className={props.styling}>{props.text}</h3>
      </div>
      <div className="button-container">
        <a href="" className="btn-style-one me-4">
          {t("Our Work")}
        </a>
        <a href="" className="btn-style-two ms-4">
          {t("Contact Us")}
        </a>
      </div>
    </>
  );
}

export default SliderItem;
