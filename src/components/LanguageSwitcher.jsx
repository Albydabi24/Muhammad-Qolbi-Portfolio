import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'id' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="theme-toggle"
            aria-label={t('nav.aria.toggleLanguage')}
            style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
        >
            {i18n.language === 'en' ? 'ID' : 'EN'}
        </button>
    );
}
