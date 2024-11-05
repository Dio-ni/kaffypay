import "./Application.scss";
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

import IphoneEmulatorRu from "../../assets/images/application/ru/phone.png";
import MagnumRu from "../../assets/images/application/ru/magnum_left.png";
import NomadRu from "../../assets/images/application/ru/nomad_right.png";

import IphoneEmulatorEng from "../../assets/images/application/eng/phone.png";
import MagnumEng from "../../assets/images/application/eng/magnum_left.png";
import NomadEng from "../../assets/images/application/eng/nomad_right.png";

function Application() {
  const { t, i18n } = useTranslation();
  const [images, setImages] = useState({});

  useEffect(() => {
    // Update images based on current language
    setImages({
      IphoneEmulator: i18n.language === 'ru' ? IphoneEmulatorRu : IphoneEmulatorEng,
      Magnum: i18n.language === 'ru' ? MagnumRu : MagnumEng,
      Nomad: i18n.language === 'ru' ? NomadRu : NomadEng,
    });
  }, [i18n.language]); // Re-run whenever language changes

  return (
    <div className="application">
      <div className="container">
        <div className="application_inner">
          <img className="application_left" src={images.Magnum} alt="Magnum" />
          <img className="application_right" src={images.Nomad} alt="Nomad" />
          <div className="application_text">
            <h4>{t('introducing')}</h4>
            <h2>{t('application')}</h2>
            <p>{t('superApp_to_simplify')}</p>
          </div>
          <img className="phone-emulator" src={images.IphoneEmulator} alt="Phone Emulator" />
        </div>
      </div>
    </div>
  );
}

export default Application;
