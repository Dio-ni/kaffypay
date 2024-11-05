export default () => {
  const availableLanguages = [
    { label: 'Қаз', value: 'kz' },
    { label: 'Рус', value: 'ru' },
    { label: 'Eng', value: 'en' },
  ];

  const getCurrentLanguage = () => localStorage.getItem('i18nextLng');

  return {
    getCurrentLanguage,
    availableLanguages,
  };
};
