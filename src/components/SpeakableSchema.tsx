interface SpeakableSchemaProps {
  url: string;
  name: string;
  cssSelectors: string[];
}

const SpeakableSchema = ({ url, name, cssSelectors }: SpeakableSchemaProps) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    name,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default SpeakableSchema;
