import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { AnalyticEvent } from '../../../../plugins/ga4';

import IconWorld from '../icons/IconWorld';
import './language-menu.scss';
import useLanguages from '../../../../hooks/useLanguages';

function LanguageMenu({ isBlack, hideSelectedLanguage, hideGlobus, isGray }) {
  const { i18n } = useTranslation();
  const { getCurrentLanguage, availableLanguages } = useLanguages();

  const location = window.location.href;

  const currentLanguage = getCurrentLanguage();

  const [isLanguageMenuActive, setIsLanguageMenuActive] = useState(false);
  const [isLanguageListActive, setIsLanguageListActive] = useState(false);
  const [languagesList, setLanguagesList] = useState([]);

  const languageMenuHandler = () => {
    setIsLanguageMenuActive(!isLanguageMenuActive);
    setIsLanguageListActive(!isLanguageListActive);
  };

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);

    if (location.includes(process.env.REACT_APP_INTERNATIONAL_URL)) {
      localStorage.setItem('international', 'true');
    }

    AnalyticEvent(selectedLanguage, 'Language changed');
    window.location.reload();
  };

  const reduceLanguages = (language) => {
    switch (language) {
      case 'ru':
        return 'Русский';
      case 'kz':
        return 'Қазақша';
      default:
        return 'English';
    }
  };

  const lang = reduceLanguages(currentLanguage);

  const langClasses = classnames({
    'language-menu__text': true,
    'text-medium': true,
    [isBlack ? 'color-black' : 'color-white']: true,
    [isGray ? 'color-gray' : 'color-black']: true,
  });

  const languageMenuClasses = classnames({
    'language-menu': true,
    'language-menu_white': true,
    'language-menu_active': isLanguageMenuActive,
    'language-menu_bottom': isBlack,
  });

  useEffect(() => {
    setLanguagesList(
      availableLanguages.filter(
        (language) => language.value !== currentLanguage,
      ),
    );

    document.documentElement.setAttribute('lang', currentLanguage);
  }, [currentLanguage, setLanguagesList]);

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsLanguageListActive(false);
        setIsLanguageMenuActive(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <button
      type="button"
      onClick={languageMenuHandler}
      className={languageMenuClasses}
      ref={menuRef}
    >
      <ul
        className={classnames(
          'language-menu__list',
          isLanguageListActive && 'language-menu__list_active',
          hideSelectedLanguage && 'language-menu__list_active_bottom',
        )}
        aria-hidden="true"
        onClick={changeLanguage}
      >
        {languagesList.map((language) => (
          <li className="language-menu__item" key={language.value}>
            <span className="language-menu__link">
              <input
                className="language-menu__radio"
                type="radio"
                value={language.value}
              />
              {language.label}
            </span>
          </li>
        ))}
      </ul>
      <div
        className="language-menu__icon-world"
        style={{ display: hideGlobus ? 'none' : 'block' }}
      >
        <IconWorld color={isBlack ? 'black' : 'white'} />
      </div>
      {!hideSelectedLanguage && <span className={langClasses}>{lang}</span>}
    </button>
  );
}

LanguageMenu.propTypes = {
  isBlack: PropTypes.bool,
  isGray: PropTypes.bool,
  hideSelectedLanguage: PropTypes.bool,
  hideGlobus: PropTypes.bool,
};
export default LanguageMenu;
