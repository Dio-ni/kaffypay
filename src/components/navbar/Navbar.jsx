import React, {  useEffect ,useState} from 'react';
import { useTranslation } from 'react-i18next';
import { AnalyticEvent } from '../../../../plugins/ga4';

import './Navbar.scss';
import useLanguages from '../../hooks/useLanguages';

function Navbar() {
  const { i18n } = useTranslation();
  const { getCurrentLanguage, availableLanguages } = useLanguages();

  const location = window.location.href;
  const currentLanguage = getCurrentLanguage();
  const [languagesList, setLanguagesList] = useState([]);
  

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);

    if (location.includes(process.env.REACT_APP_INTERNATIONAL_URL)) {
      localStorage.setItem('international', 'true');
    }

    AnalyticEvent(langCode, 'Language changed');
    document.documentElement.setAttribute('lang', langCode);
  };


  useEffect(() => {
    // Set the list of available languages
    setLanguagesList(availableLanguages);
    document.documentElement.setAttribute('lang', currentLanguage);
  }, [currentLanguage]);

  return (
    <div className="language_menu">
      <div className="lng_btns">
        {languagesList.map((language) => (
          <button
            type="button"
            key={language.value}
            className={currentLanguage === language.value ? 'lang' : ''}
            onClick={() => changeLanguage(language.value)}
          >
            {language.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
