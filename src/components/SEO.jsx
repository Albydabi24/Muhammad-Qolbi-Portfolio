import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, type = 'website', img }) {
    const siteTitle = 'OBI — Digital Marketing Specialist';
    const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || "Hi, I'm Obi. Fresh graduate specializing in digital marketing, SEO, copywriting, content writing, and social media marketing.";

    // Default OG Image if not provided (using About image or Logo as fallback)
    const metaImg = img || 'https://media.licdn.com/dms/image/v2/C4D12AQEsE-QAj5uG4w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1609780633737?e=2147483647&v=beta&t=W7TkFqqYlintQzikTmFXCJxR0MuUPIS7uMSX8ot5S6M';

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{finalTitle}</title>
            <meta name="description" content={metaDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImg} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImg} />
        </Helmet>
    );
}
