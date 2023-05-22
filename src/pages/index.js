import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './homepage.module.scss';

const roles = [
  {
    title: 'UX Designer',
    imageUrl: 'img/role-1.svg',
    url: 'ux-designer'
  },
  {
    title: 'Developer',
    imageUrl: 'img/role-2.svg',
    url: 'developer'
  },
  {
    title: 'Business Analyst',
    imageUrl: 'img/role-3.svg',
    url: 'business-analyst'
  },
  {
    title: 'Tech Writer',
    imageUrl: 'img/role-4.svg',
    url: 'tech-writer'
  },
  {
    title: 'Graphic Designer',
    imageUrl: 'img/role-6.svg',
    url: 'graphic-designer'
  },
];

const features = [
  {
    title: 'Guides',
    url: 'docs/guides/introduction',
    imageUrl: 'img/feat-1.svg',
    description: (
      <>
        These foundational guidelines and role based playbooks work together to help our teams create inclusive solutions.
      </>
    ),
  },
  {
    title: 'Branding Guidelines',
    url: 'docs/branding/logo',
    imageUrl: 'img/feat-3.svg',
    description: (
      <>
        It clearly defined rules and standards that communicate how your brand should be represented to the world
      </>
    ),
  },
  {
    title: 'UI Components',
    url: 'docs/components/buttons-and-links/button',
    imageUrl: 'img/feat-2.svg',
    description: (
      <>
       It contains a set of versatile building blocks designed to work together to form patterns and create cohesive UI.
      </>
    ),
  },
  {
    title: 'Community',
    url: 'community',
    imageUrl: 'img/feat-4.svg',
    description: (
      <>
       Where you can contribute ideas and suggestions around how the GEL grows to continue to meet our needs at AEMO.
      </>
    ),
  },
];


function Role({imageUrl, title, url}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <a className={clsx('text--center', styles.role)} href={useBaseUrl('docs/guides/roles/'+ url)}>
      {imgUrl && (
          <img className={styles.RoleImage} src={imgUrl} alt={title} />
      )}
      <h3>
          {title}
      </h3>
    </a>
  );
}

function Feature({url, imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      <article>
        {imgUrl && (
            <img src={imgUrl} alt={title}  width='160'/>
        )}
        <div className={styles.featbody}>
          <h3><a href={url}>{title}</a></h3>
          <span>{description}</span>
        </div>
      </article>
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
          <div className={styles.innerHeroBanner}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <span className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--secondary',
                  styles.cta,
                )}
                to={useBaseUrl('docs/guides/introduction')}>
                Get Started
              </Link>
            </span>
          </div>
          {roles && roles.length > 0 && (
            <section className={styles.roles}>
                <p>I am:</p>
                <div className={styles.roleslist}>
                  {roles.map((props, idx) => (
                    <Role key={idx} {...props} />
                  ))}
                </div>
            </section>
          )}
        </div> 
      </header>
      <main className="container">
        <div className='col col--10 col--offset-1'>
          <section className={styles.features}>
            <h2>What GEL offers</h2>
              <div className='row'>
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
              </div>
          </section>
        </div> 
      </main>
      <section className={styles.summary}>
        <div className='container'>
          <h2>Our vision</h2>
          <div className='row'>
            <p className='col col--8 col--offset-2'>
              GEL is an ultimate guide to craft the digital experience of all initiatives supporting participants, clients, empowering partners and our team.
            </p>
          </div>
        </div>  
      </section> 
    </Layout>
  );
}

export default Home;
