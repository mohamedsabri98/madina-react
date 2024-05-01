import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProductItem(props: any) {
  const { t } = useTranslation();
  
  return (
    <div className="text-center">
      <img
        src={props.image}
        alt="product-img"
        style={{ width: "340 px", height: "340px", borderRadius: "30px" }}
      />
      <div className="m-3">
        <h2 className="main-title fw-bold mb-3">{props.title}</h2>
        <p className="fs-6 mb-4">{props.text}</p>
        <Link to={props.link} className="main-btn ">
          {t("More")}
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
