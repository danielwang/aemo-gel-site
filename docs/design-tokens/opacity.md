---
id: opacity
title: Opacity
custom_edit_url: null
---
> The opacity property specifies how transparent an element is. Use the below defined tokens to set transparencies consistently.

import * as Token from '@danielwang/aemo-design-tokens/dist'
import ShowVar from './_showVar'
import styles from './_styles.module.scss';

export const Opacity = ({opacity}) => (<div style={{
    backgroundColor: Token.ColorPrimaryPurple500,
    width: '8rem',
    height: '4rem',
    opacity: opacity
  }}></div>);

| Demo | Value | SCSS Variables 
|---|---|---|
| <div className={styles.opacityDemo}><Opacity opacity={Token.Opacity10} /></div> | <ShowVar code={Token.Opacity100} /> | `$gel-opacity-100`
| <div className={styles.opacityDemo}><Opacity opacity={Token.Opacity75} /></div>| <ShowVar code={Token.Opacity75} /> | `$gel-opacity-75`
| <div className={styles.opacityDemo}><Opacity opacity={Token.Opacity50} /></div> | <ShowVar code={Token.Opacity50} /> | `$gel-opacity-50`
| <div className={styles.opacityDemo}><Opacity opacity={Token.Opacity25} /></div> | <ShowVar code={Token.Opacity25} /> | `$gel-opacity-25`
| <div className={styles.opacityDemo}><Opacity opacity={Token.Opacity0} /></div> | <ShowVar code={Token.Opacity0} /> | `$gel-opacity-0`


