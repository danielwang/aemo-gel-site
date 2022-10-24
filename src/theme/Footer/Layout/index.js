import React from 'react';
import clsx from 'clsx';
import styles from './footer.module.scss';
export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
        }, styles.footer)}>

        {logo && <div className="margin-bottom--sm">{logo}</div>}
        {links}
        {copyright}
    </footer>
  );
}
