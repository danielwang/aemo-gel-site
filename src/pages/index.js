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
    url: 'docs/intro/introduction',
    imageUrl: 'img/feat-1.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
      </>
    ),
  },
  {
    title: 'Branding Guidelines',
    url: 'docs/branding/logo',
    imageUrl: 'img/feat-3.svg',
    description: (
      <>
        Squis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam.
      </>
    ),
  },
  {
    title: 'UI Components',
    url: 'docs/components/buttons-and-links/button',
    imageUrl: 'img/feat-2.svg',
    description: (
      <>
       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      </>
    ),
  },
  {
    title: 'Community',
    url: 'community',
    imageUrl: 'img/feat-4.svg',
    description: (
      <>
       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      </>
    ),
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

function Feature({url, imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      <article>
        {imgUrl && (
            <img src={imgUrl} alt={title}  width='150'/>
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
          <h2>Title of something</h2>
          <div className='row'>
            <p className='col col--8 col--offset-2'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            </p>
          </div>
        </div>  
      </section> 
    </Layout>
  );
}

export default Home;
