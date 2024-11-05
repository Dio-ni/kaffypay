import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import classnames from 'classnames';
import { AnalyticEvent } from '../../../../plugins/ga4';

import './header.scss';
import './header-secondary.scss';
import Logo from '../Logo/Logo';

import AlaqanLogoFull from "../../assets/images/home/alaqan-full.svg";
import AlaqanLogoFullWhite from "../../assets/images/home/alaqan-full-white.svg";
import Button from '../Button/Button';
import Navbar from "../navbar/Navbar";
// import useScrollDirection from '../../hooks/useScrollDirection';
import useLanguage from "../../hooks/useLanguages";
import useScrollDirection from '../../../../hooks/useScrollDirection';
import useHeaderContext from '../../../../context/useHeaderContext';
import useScrollBlock from '../../../../hooks/useScrollBlock';
import IconMektepLogo from '../icons/IconMektepLogo';
import IconPayLogo2 from '../icons/IconPayLogo2';
// import IconMessage from '../icons/IconMessage';
import GooglePlay from '../../../../assets/images/family-sharing/GooglePlay.jpg';
import GooglePlayRu from '../../../../assets/images/family-sharing/GooglePlayRu.jpg';
import AppStore from '../../../../assets/images/family-sharing/AppStore.jpg';
import AppStoreRu from '../../../../assets/images/family-sharing/AppStoreRu.jpg';


function Header() {
  const context = useHeaderContext();
  const {
    showSubHeader,
    setShowSubHeader,
    showPaySubHeader,
    setShowPaySubHeader,
  } = useContext(context);
  const [blockScroll, allowScroll] = useScrollBlock();

  const location = useLocation();
  const headerCondition = useScrollDirection();
  const { t } = useTranslation();
  const { getCurrentLanguage } = useLanguage();

  const lang = getCurrentLanguage();

  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

  const { pathname } = location;
  const isMektepPage = pathname === '/mektep';

  const onBurgerHandler = () => {
    setIsBurgerActive(!isBurgerActive);
    setIsNavActive(!isNavActive);

    if (isNavActive) {
      allowScroll();
    } else {
      blockScroll();
    }
  };
  // const secondaryItemClassName = (activeItem) => {
  //   if (
  //     activeItem === 'review' ||
  //     activeItem === 'canteen' ||
  //     activeItem === 'administration' ||
  //     activeItem === 'parents'
  //   ) {
  //     return 'header-secondary__item_active';
  //   }
  //   return 'text_size_sm color-black';
  // };
  const isActiveItem = ({ isActive }) =>
    isActive
      ? 'header__list-item_active text text_size_sm'
      : 'text text_size_sm';

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 750;
  const googlePlayImgOptions = {
    en: GooglePlay,
    kz: GooglePlay,
    ru: GooglePlayRu,
  };
  const appStoreImgOptions = {
    en: AppStore,
    kz: AppStore,
    ru: AppStoreRu,
  };
  // const isActiveSecondaryItem = () => {
  //   // console.log(e);
  //   // isActiveSecondary
  //   //   ? 'header-secondary__item_active'
  //   //   : 'text_size_sm color-black';
  //   // return 'text_size_sm color-black';
  // };

  // const secondaryItemClassName = (activeItem) => {
  //   if (
  //     activeItem === 'review' ||
  //     activeItem === 'canteen' ||
  //     activeItem === 'administration' ||
  //     activeItem === 'parents'
  //   ) {
  //     return 'header-secondary__item_active';
  //   }
  //   return 'text_size_sm color-black';
  // };

  useEffect(() => {
    if (location.pathname.includes('mektep')) {
      setShowSubHeader(true);
    } else {
      setShowSubHeader(false);
    }

    if (isBurgerActive) {
      onBurgerHandler();
    }
  }, [location]);

  useEffect(() => {
    // if (location.pathname.includes('pay')) {
    //   setShowPaySubHeader(true);
    // } else {
    //   setShowPaySubHeader(false);
    // }
    setShowPaySubHeader(false);
    if (isBurgerActive) {
      onBurgerHandler();
    }
  }, [location]);

  const { scrollY } = window;

  const headerClassNames = classnames('header', {
    [headerCondition === 'visible' || isNavActive
      ? 'visible'
      : !(scrollY <= 0)
        ? 'invisible'
        : 'visible']: true,
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={headerClassNames}
    style={{
      background: isBurgerActive ? "#111" : "",
      transition: "background 0.4s linear"
    }}
        
    >    
      <div className="container container_flex">
      {isMobile ? 
      <NavLink
              to="/"
              onClick={AnalyticEvent('Header Logo Icon', 'Clicked')}
              
            >
                 <img 
                 src={isBurgerActive ? AlaqanLogoFullWhite : AlaqanLogoFull} alt=""
                 style={{
                  width:"100px"
                 }} /> 
            </NavLink> :
            ""}
        <div className="header__nav">
          <ul
            className={classnames(
              'header__list',
              isNavActive && 'header__list_active',
            )}
          >
            <li>
            <NavLink
              to="/"
              className=" header__list-item header__logo-container"
              onClick={AnalyticEvent('Header Logo Icon', 'Clicked')}
              style={{
                display:isMobile ? "none":"block"
              }}
            >
              { isMobile ?   <img src={AlaqanLogoFull} alt="" /> : <Logo />}
            </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink
                // to="/"
                to="/main"
                end
                className={isActiveItem}
                onClick={AnalyticEvent('Main Page', 'Clicked')}
                
              >
                {t('main')}
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink
                to="/mektep"
                className={isActiveItem}
                onClick={AnalyticEvent('Mektep Page', 'Clicked')}
              >
                {t('for_school')}
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink
                to="/pay"
                className={isActiveItem}
                onClick={AnalyticEvent('Pay Page', 'Clicked')}
              >
                {t('payment')}
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink
                to="/about"
                className={isActiveItem}
                onClick={AnalyticEvent('About Page', 'Clicked')}
              >
                {t('about')}
              </NavLink>
            </li>
            
            <li className="header__list-item">
              <NavLink
                to="/mass-media"
                className={isActiveItem}
                onClick={AnalyticEvent('Mass Media About Us Page', 'Clicked')}
              >
                {t('about_us')}
              </NavLink>
            </li>
            
            {isMektepPage && isMobile && (
              <li className="header__list-item">
                <Link
                  className={isActiveItem}
                  to="instructions"
                  onClick={() => {
                    onBurgerHandler();
                    AnalyticEvent('Mass Media About Us Page', 'Clicked');
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    {t('instructions')}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_5380_3062)">
                        <path
                          d="M16.25 21C16.25 21.1989 16.171 21.3897 16.0303 21.5303C15.8897 21.671 15.6989 21.75 15.5 21.75H9.5C9.30109 21.75 9.11032 21.671 8.96967 21.5303C8.82902 21.3897 8.75 21.1989 8.75 21C8.75 20.8011 8.82902 20.6103 8.96967 20.4697C9.11032 20.329 9.30109 20.25 9.5 20.25H15.5C15.6989 20.25 15.8897 20.329 16.0303 20.4697C16.171 20.6103 16.25 20.8011 16.25 21ZM22.25 6V16.5C22.25 17.0967 22.0129 17.669 21.591 18.091C21.169 18.5129 20.5967 18.75 20 18.75H5C4.40326 18.75 3.83097 18.5129 3.40901 18.091C2.98705 17.669 2.75 17.0967 2.75 16.5V6C2.75 5.40326 2.98705 4.83097 3.40901 4.40901C3.83097 3.98705 4.40326 3.75 5 3.75H20C20.5967 3.75 21.169 3.98705 21.591 4.40901C22.0129 4.83097 22.25 5.40326 22.25 6ZM15.875 11.25C15.875 11.1295 15.8459 11.0108 15.7902 10.9039C15.7346 10.797 15.654 10.7051 15.5553 10.6359L11.8053 8.01094C11.6929 7.93222 11.5611 7.88583 11.4242 7.87683C11.2873 7.86782 11.1506 7.89654 11.0289 7.95987C10.9071 8.02319 10.8051 8.11869 10.7339 8.23596C10.6627 8.35324 10.625 8.4878 10.625 8.625V13.875C10.625 14.0122 10.6627 14.1468 10.7339 14.264C10.8051 14.3813 10.9071 14.4768 11.0289 14.5401C11.1506 14.6035 11.2873 14.6322 11.4242 14.6232C11.5611 14.6142 11.6929 14.5678 11.8053 14.4891L15.5553 11.8641C15.654 11.7949 15.7346 11.703 15.7902 11.5961C15.8459 11.4892 15.875 11.3705 15.875 11.25Z"
                          fill="#007AFF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5380_3062">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </Link>
              </li>
            )}
            <li className="header__list-item header__list-item_mobile">
              <Link
                onClick={onBurgerHandler}
                to="request"
                className="text text_size_sm"
              >
                {t('contacts')}
              </Link>
            </li>
            <li className="header__list-language-selector">
              <Navbar />
            </li>
            <li 
              style={{
                display: isMobile ? "block":"none" 
              }}
            >
              <div className="header_app_links">
              <button
                type="button"
                onClick={() => {
                  window.open(
                    'https://play.google.com/store/apps/details?id=kz.alaqan.app',
                    '_blank',
                  );
                }}
              >
                <img src={googlePlayImgOptions[lang]} alt="" />
              </button>
              <button
                type="button"
                onClick={() => {
                  window.open(
                    'https://apps.apple.com/kz/app/alaqan/id6470904368',
                    '_blank',
                  );
                }}
              >
                <img src={appStoreImgOptions[lang]} alt="" />
              </button>
            </div>
            </li>
          </ul>
          </div>
          <div className="header__actions-container">
            <Navbar/>
            {/* <LanguageMenu hideSelectedLanguage isBlack /> */}
            <Link to="request" className="header__main-button">
              <Button rounded="xs" type="secondary">
                {t('get_started')}
              </Button>
            </Link>
            
          </div>
          <div className="header__message"
            style={{
              display: isMobile ? "flex" : "none"              
            }}
          >
            <Link to="request" className="header__main-button">
                <Button rounded="xs" type="secondary">
                  {t('get_started')}
                </Button>
            </Link>
            <button
                type="button"
                onClick={onBurgerHandler}
                className={classnames(
                  'header__btn',
                  isBurgerActive && 'header__btn_active',
                )}
                
              >
              <span />
              <span />
              <span />
            </button>
          </div>
          
        </div>
      
      {showSubHeader && (
        <div className="header-secondary">
          <div className="container container_flex">
            <NavLink to="/mektep" onClick={handleScrollToTop}>
              <IconMektepLogo />
            </NavLink>
            <ul className="header-secondary__list">
              <li className="header-secondary__item">
                <Link
                  to="video"
                  activeClass="header-secondary__item_active"
                  className="text_size_sm color-black"
                  spy
                >
                  {t('review')}
                </Link>
              </li>
              <li className="header-secondary__item">
                <Link
                  to="canteen-future"
                  activeClass="header-secondary__item_active"
                  className="text_size_sm color-black"
                  spy
                >
                  {t('canteen')}
                </Link>
              </li>
              <li className="header-secondary__item">
                <Link
                  to="time-management"
                  activeClass="header-secondary__item_active"
                  className="text_size_sm color-black"
                  spy
                >
                  {t('administration')}
                </Link>
              </li>
              <li className="header-secondary__item">
                <Link
                  to="child-care"
                  activeClass="header-secondary__item_active"
                  className="text_size_sm color-black"
                  spy
                >
                  {t('parents')}
                </Link>
              </li>
              {isMektepPage && (
                <li className="header-secondary__item">
                  <Link
                    to="instructions"
                    activeClass="header-secondary__item_active"
                    className="text_size_sm color-black"
                    spy
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_5380_3062)">
                          <path
                            d="M16.25 21C16.25 21.1989 16.171 21.3897 16.0303 21.5303C15.8897 21.671 15.6989 21.75 15.5 21.75H9.5C9.30109 21.75 9.11032 21.671 8.96967 21.5303C8.82902 21.3897 8.75 21.1989 8.75 21C8.75 20.8011 8.82902 20.6103 8.96967 20.4697C9.11032 20.329 9.30109 20.25 9.5 20.25H15.5C15.6989 20.25 15.8897 20.329 16.0303 20.4697C16.171 20.6103 16.25 20.8011 16.25 21ZM22.25 6V16.5C22.25 17.0967 22.0129 17.669 21.591 18.091C21.169 18.5129 20.5967 18.75 20 18.75H5C4.40326 18.75 3.83097 18.5129 3.40901 18.091C2.98705 17.669 2.75 17.0967 2.75 16.5V6C2.75 5.40326 2.98705 4.83097 3.40901 4.40901C3.83097 3.98705 4.40326 3.75 5 3.75H20C20.5967 3.75 21.169 3.98705 21.591 4.40901C22.0129 4.83097 22.25 5.40326 22.25 6ZM15.875 11.25C15.875 11.1295 15.8459 11.0108 15.7902 10.9039C15.7346 10.797 15.654 10.7051 15.5553 10.6359L11.8053 8.01094C11.6929 7.93222 11.5611 7.88583 11.4242 7.87683C11.2873 7.86782 11.1506 7.89654 11.0289 7.95987C10.9071 8.02319 10.8051 8.11869 10.7339 8.23596C10.6627 8.35324 10.625 8.4878 10.625 8.625V13.875C10.625 14.0122 10.6627 14.1468 10.7339 14.264C10.8051 14.3813 10.9071 14.4768 11.0289 14.5401C11.1506 14.6035 11.2873 14.6322 11.4242 14.6232C11.5611 14.6142 11.6929 14.5678 11.8053 14.4891L15.5553 11.8641C15.654 11.7949 15.7346 11.703 15.7902 11.5961C15.8459 11.4892 15.875 11.3705 15.875 11.25Z"
                            fill="#007AFF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_5380_3062">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      {t('instructions')}
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}

      {showPaySubHeader && (
        <div className="header-secondary">
          <div className="container container_flex">
            <NavLink to="/pay" onClick={handleScrollToTop}>
              <IconPayLogo2 />
            </NavLink>
            <ul className="header-secondary__list">
              <li className="header-secondary__item">
                <Link
                  className="text_size_sm color-black"
                  to="pay-advantages__review"
                  activeClass="header-secondary__item_active"
                  spy
                >
                  {t('review')}
                </Link>
              </li>
              <li className="header-secondary__item">
                <Link
                  className="text_size_sm color-black"
                  to="from-past-to-future__comparison"
                  activeClass="header-secondary__item_active"
                  spy
                >
                  {t('comparison')}
                </Link>
              </li>
              <li className="header-secondary__item">
                <Link
                  className="text_size_sm color-black"
                  to="convenient-payment__advantages"
                  activeClass="header-secondary__item_active"
                  spy
                >
                  {t('advantages')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
