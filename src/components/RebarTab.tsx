import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import RebarInfoTable from "./RebarInfoTable";
import proImg from "../images/products/service-9.jpg";

function RebarTab() {
  const { t } = useTranslation();

  const [activeKey, setActiveKey] = useState<any>("products");

  const handleSelect = (selectedKey: any | null) => {
    if (selectedKey) {
      setActiveKey(selectedKey);
    }
  };

  const TabContentForProducts = t("Tab_content_for_Products_points", {
    returnObjects: true,
  }) as string[];

  const TabContectForProductiveCapacity = t(
    "Tab_content_for_Productive_capacity_points",
    {
      returnObjects: true,
    }
  ) as string[];

  return (
    <div className="container mt-5 mb-">
      <div className="mt-5 mb-5">
        <span className="title-bg">{t('Steel Rebar')}</span>
      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={activeKey}
        onSelect={handleSelect}
        className="mb-3"
      >
        <Tab eventKey="products" title={t("Products")}>
          <div className="m-4">
            <p>{t("Tab_content_for_Products_intro")}</p>
            <ol>
              {TabContentForProducts.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ol>
            <p>{t("Tab_content_for_Products_end")}</p>
          </div>
          <div className="m-5">
            <RebarInfoTable />
          </div>
          <div className="d-flex justify-content-center mb-4">
            <img
              src={proImg}
              alt="product-img"
              className="rounded-5 media-rebar-img"
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        </Tab>
        <Tab eventKey="capacity" title={t("Productive Capacity")}>
          <div className="m-4">
            <p>{t("Tab_content_for_Productive_capacity_intro")}</p>
            <ol>
              {TabContectForProductiveCapacity.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ol>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <img
              src={proImg}
              alt="product-img"
              className="rounded-5 media-rebar-img"
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default RebarTab;
