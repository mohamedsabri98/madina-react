import QuickLinksCard from "./QuickLinksCard";
import brandFoundationIcon from "../images/icons/svg/brand-foundation-icon.svg";
import brandFoundationImg from "../images/quick-links/foundation.png";
import productReiewIcon from "../images/icons/svg/product.svg";
import productReiewImg from "../images/quick-links/product-review.png";
import bruchureIcon from "../images/icons/svg/pdf-book.svg";
import bruchureImg from "../images/quick-links/brchure.png";
import { useTranslation } from "react-i18next";
import reviewImgEN from "../pdf/WEB-FLYER-2.jpg";

function QuickLinks() {
  const { t } = useTranslation();

  return (
    <div className="container mt-5 mb-5" style={{ direction: "ltr" }}>
      <div className="media-quickLinks d-flex justify-content-between">
        <QuickLinksCard
          icon={productReiewIcon}
          image={productReiewImg}
          title={"Product Review"}
          url={reviewImgEN}
        />
        <QuickLinksCard
          icon={brandFoundationIcon}
          image={brandFoundationImg}
          title={"Brand Foundation"}
          url={"https://drive.google.com/file/d/1Lwe2nqkSNfiV_5WCvsgHTy9cV69MPyE1/view?usp=sharing"}
        />
        <QuickLinksCard
          icon={bruchureIcon}
          image={bruchureImg}
          title={"Coprorate Brochure"}
          url={"https://drive.google.com/file/d/1LE_oPGSb5ts8k58tbXpGLgx2-DOw5pSW/view?usp=sharing"}
        />
      </div>
    </div>
  );
}

export default QuickLinks;
