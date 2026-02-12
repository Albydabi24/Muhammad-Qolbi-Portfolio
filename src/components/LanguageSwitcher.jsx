import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'id' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="theme-toggle"
            aria-label="Toggle Language"
            style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
        >
            {i18n.language === 'en' ? 'ID' : 'EN'}
        </button>
    );
}
