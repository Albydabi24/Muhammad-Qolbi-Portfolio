import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import SpotlightCard from '../components/SpotlightCard';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <PageTransition>
            <SEO title={t('notFound.title')} description={t('notFound.desc')} />
            <section className="not-found-section" style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem'
            }}>
                <SpotlightCard className="not-found-card" spotlightColor="rgba(235, 94, 40, 0.3)">
                    <div style={{ padding: '3rem' }}>
                        <h1 style={{ fontSize: '6rem', fontWeight: '900', color: 'var(--accent)', lineHeight: 1, marginBottom: '1rem' }}>404</h1>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{t('notFound.title')}</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px', marginInline: 'auto' }}>
                            {t('notFound.desc')}
                        </p>
                        <Link to="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Home size={18} />
                            {t('notFound.button')}
                        </Link>
                    </div>
                </SpotlightCard>
            </section>
        </PageTransition>
    );
}
