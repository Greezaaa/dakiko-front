import LangMenu from "@components/lang-menu/lang-menu";
import UseGetTranslationKey from "@hooks/getTranslationKey";
import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

const CookieBanner = forwardRef((_, ref) => {
  const t = UseGetTranslationKey();
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isAccepted = localStorage.getItem("cAccepted") === "true";
    setShowBanner(!isAccepted);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cAccepted", "true");
    setShowModal(false);
    setShowBanner(false);
  };

  const handleCancel = () => {
    localStorage.setItem("cAccepted", "false");
    setShowModal(false);
    setShowBanner(true);
  };

  const handleReadMore = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useImperativeHandle(ref, () => ({
    openModal() {
      setShowModal(true);
    },
  }));

  return (
    <>
      {showBanner && (
        <div className="cookie-banner">
          <p>{t("cookiePolicy.cookiePolicy")}&#127850;</p>
          <p>{t("cookiePolicy.consent.description")}</p>
          <div className="buttons center">
            <button className="c__btn accept" onClick={handleAccept}>
              {t("cookiePolicy.accept")}
            </button>
            <button className="c__btn cancel" onClick={handleCancel}>
              {t("cookiePolicy.disagree")}
            </button>
            <button className="c__btn info" onClick={handleReadMore}>
              {t("cookiePolicy.readMore")}
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <div className="modal-actions">
              <button className="c__btn btn__close" onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                >
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
              </button>
              <LangMenu></LangMenu>
            </div>
            <div className="policy__content">
              <h2>{t("cookiePolicy.title")}</h2>
              <p>{t("cookiePolicy.intro")}</p>
              <h3>{t("cookiePolicy.localStorage.header")}</h3>
              <p>{t("cookiePolicy.localStorage.description")}</p>

              <h3>{t("cookiePolicy.trackingCookies.header")}</h3>

              <ul>
                <li>{t("cookiePolicy.trackingCookies.description")}</li>
                <li>{t("cookiePolicy.advertisingCookies.description")}</li>
                <li>{t("cookiePolicy.thirdPartyCookies.description")}</li>
              </ul>

              <h3>{t("cookiePolicy.consent.header")}</h3>
              <p>{t("cookiePolicy.consent.description")}</p>
              <h3>{t("cookiePolicy.questions.header")}</h3>
              <p>{t("cookiePolicy.questions.description")}</p>
              <div className="buttons modal-buttons">
                <button className="c__btn accept" onClick={handleAccept}>
                  {t("cookiePolicy.accept")}
                </button>
                <button className="c__btn cancel" onClick={handleCancel}>
                  {t("cookiePolicy.disagree")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default CookieBanner;
