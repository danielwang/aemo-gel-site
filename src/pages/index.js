import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

const roles = [
  {
    title: 'UX Designer',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    url: 'ux-designer'
  },
  {
    title: 'Developer',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    url: 'developer'
  },
  {
    title: 'Business Analyst',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    url: 'business-analyst'
  },
  {
    title: 'Tech Writer',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    url: 'tech-writer'
  },
  {
    title: 'Graphic Designer',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    url: 'graphic-designer'
  },
];

function Role({imageUrl, title, url}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <a className={clsx('text--center', styles.role)} href={useBaseUrl('docs/intro/roles/'+ url)}>
      {imgUrl && (
          <img className={styles.RoleImage} src={imgUrl} alt={title} />
      )}
      <h3>
          {title}
      </h3>
    </a>
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
          <div className={styles.innerHeroBanner}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <span className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--secondary',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/intro/introduction')}>
                Get Started
              </Link>
            </span>
          </div>
          {roles && roles.length > 0 && (
            <section className={styles.roles}>
                  {roles.map((props, idx) => (
                    <Role key={idx} {...props} />
                  ))}
            </section>
          )}
        </div> 
      </header>
      <main>
        
      </main>
    </Layout>
  );
}

export default Home;
