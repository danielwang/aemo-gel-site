import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'UX Designer',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </>
    ),
  },
  {
    title: 'Developer',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Squis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </>
    ),
  },
  {
    title: 'Business Analyst',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
      </>
    ),
  },
  {
    title: 'Tech Writer',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3 text--center', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>
        <Link
          to={useBaseUrl('docs/intro/roles/ux-designer')}>
          {title}
        </Link>
      </h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner, styles.hero)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/intro/introduction')}>
              Get Started
            </Link>
          </div>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </header>
      <main>
        
      </main>
    </Layout>
  );
}

export default Home;
