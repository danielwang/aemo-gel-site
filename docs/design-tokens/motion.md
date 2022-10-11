---
id: motion
title: Motion
custom_edit_url: null
---

>We use transitions to add a sense of playfulness and delight to our interface. Transitions also hint at functionality and inform the user's mental model of how an interface functions.


import * as Token from '@danielwang/aemo-design-tokens/dist'
import ShowVar from './_showVar'
import styles from './_styles.module.scss';

## Easing
| Value | SCSS Variables | Description
|---|---|---|
| <ShowVar code={Token.MotionEaseIn} /> | `$gel-motion-ease-in` |  Start the animation slowly, and finish at full speed.
| <ShowVar code={Token.MotionEaseOut} /> | `$gel-motion-ease-out` | Start the animation at full speed, then finish slowly.

### Demo
Hover the blocks to view the motion
<div className={`${styles.motionDemo} ${styles.easeIn}`} > Ease In</div>
<div className={`${styles.motionDemo} ${styles.easeOut}`} > Ease Out</div>

## Duration
| Value | SCSS Variables | Usage
|---|---|---|
| <ShowVar code={Token.DurationSlow} /> | `$gel-duration-slow` | Large UI objects. navigation slide in
| <ShowVar code={Token.DurationMedium} /> | `$gel-duration-medium` | Medium UI objects. Toast
| <ShowVar code={Token.DurationFast} /> | `$gel-duration-fast` |  Small UI objects. button, link and form input hover effects.


### Demo
Hover the blocks to view the motion
<div className={`${styles.motionDemo} ${styles.fast}`} > Fast </div>
<div className={`${styles.motionDemo} ${styles.medium}`} > Medium</div>
<div className={`${styles.motionDemo} ${styles.slow}`} > Slow</div>
