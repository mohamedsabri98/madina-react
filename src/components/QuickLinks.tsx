import React from "react";
import QuickLinksCard from "./QuickLinksCard";
import brandFoundationIcon from "../images/icons/svg/brand-foundation-icon.svg";
import brandFoundationImg from "../images/quick-links/foundation.png";
import productReiewIcon from "../images/icons/svg/product.svg";
import productReiewImg from "../images/quick-links/product-review.png";
import bruchureIcon from "../images/icons/svg/pdf-book.svg";
import bruchureImg from "../images/quick-links/brchure.png";
import { useTranslation } from "react-i18next";

function QuickLinks() {
  const { t } = useTranslation();

  return (
    <div className="container mt-5 mb-5" style={{ direction: "ltr" }}>
      <div className="media-quickLinks d-flex justify-content-center justify-content-between">
        <QuickLinksCard
          icon={productReiewIcon}
          image={productReiewImg}
          title={t("Product Review")}
        />
        <QuickLinksCard
          icon={brandFoundationIcon}
          image={brandFoundationImg}
          title={t("Brand Foundation")}
        />
        <QuickLinksCard
          icon={bruchureIcon}
          image={bruchureImg}
          title={t("Coprorate Brochure")}
        />
      </div>
    </div>
  );
}

export default QuickLinks;
