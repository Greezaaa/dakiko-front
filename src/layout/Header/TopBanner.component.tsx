import React from "react";
import { address } from "@data-assets/address/address";
import { Address } from "@interfaces/address.interface";
import useOpenCloseStatus from "@hooks/useOpenCloseStatus";
import PhoneIcon from "@components/Icons/PhoneIcon";
import PlacesIcon from "@components/Icons/PlacesIcon";
import UseGetTranslationKey from "@hooks/getTranslationKey";
import { Link } from "react-router-dom";

const TopBannerComponent: React.FC = () => {
  const t = UseGetTranslationKey();
  const actualAddress: Address = address;
  const status = useOpenCloseStatus();
  return (
    <div className="banner-top">
      <a
        href={actualAddress.url}
        target="_blank"
        title={`${t("header.topBanner.adres")}: ${actualAddress.desc}`}
      >
        <PlacesIcon />
        <span className="banner__text">{actualAddress.direction}</span>
      </a>
      |
      <a
        href={`tel:+${actualAddress.phoneNumber}`}
        target="_blank"
        title={`${t("header.topBanner.phone")} ${actualAddress.phone}`}
      >
        <PhoneIcon />
        <span className="banner__text">{actualAddress.phone}</span>
      </a>
      |
      <div
        title={`${t("header.topBanner.status")} ${
          status.isOpen
            ? t("header.topBanner.open")
            : t("header.topBanner.close")
        }`}
      >
        <Link to="/#schedules" title={t("header.nav.schedules")}>
          {status.isOpen ? "🟢" : "🔴"}
          <span className="banner__text"> {status.text}</span>
        </Link>
      </div>
    </div>
  );
};

export default TopBannerComponent;
