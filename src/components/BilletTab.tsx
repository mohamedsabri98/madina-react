import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import proImg from "../images/products/service-8.jpg";
function BilletTab() {
  const { t } = useTranslation();

  const [activeKey, setActiveKey] = useState<any>("products");

  const handleSelect = (selectedKey: any | null) => {
    if (selectedKey) {
      setActiveKey(selectedKey);
    }
  };

  const ContentForProductsBillet = t("the_content_of_billet_product", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="container mt-5 mb-">
      <div className="mt-5 mb-5">
        <span className="title-bg media-billet-title">
          {t('Billets- (Smelting Plant) Steel Billets')}
        </span>
      </div>
      <div>
        <p className="fs-6 mb-4">{t('billet-info')}</p>
      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={activeKey}
        onSelect={handleSelect}
        className="mb-3"
      >
        <Tab eventKey="products" title={t("Products")}>
          <div className="m-4">
            <ul>
              {ContentForProductsBillet.map((point, index) => (
                <li className="mt-4" key={index}>
                  {point}{" "}
                </li>
              ))}
            </ul>
          </div>
          <div className="m-5"></div>
          <div className="d-flex justify-content-center mb-4">
            <img
              src={proImg}
              alt="product-img"
              className="rounded-5 media-billet-img"
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        </Tab>
        <Tab eventKey="capacity" title={t("Productive Capacity")}>
          <div className="m-4">
            <p>
              {t(
                "The actual productivity capacity of smelting plant is 135,000 tons annually"
              )}
            </p>
            <p>
              {t(
                "Almadina Steel aims to enhance the productive capacity up to 300,000 tons annually"
              )}
            </p>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <img
              src={proImg}
              alt="product-img"
              className="rounded-5 media-billet-img"
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default BilletTab;
