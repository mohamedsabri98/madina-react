import { useTranslation } from "react-i18next";
import rebar from "../images/products/product-1.jpg";
import bellet from "../images/products/products-3.jpg";
import ProductItem from "./ProductItem";

function ProductsForHomePage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <h1 className="main-title mb-3">{t("Al-Madina Products")}</h1>
        <p className=" fs-5 mb-3">{t("products-text")}</p>
        <div className="media-products d-flex justify-content-between">
          <ProductItem
            image={rebar}
            title={t("Rebar")}
            text={t("product-rebar-text")}
            link='/rebar'
          />
          <ProductItem
            image={bellet}
            title={t("Billet")}
            text={t("product-bellet-text")}
            link='/billet'
          />
        </div>
      </div>
    </>
  );
}

export default ProductsForHomePage;
