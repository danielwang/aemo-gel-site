---
id: z-index
title: Z index
custom_edit_url: null
---

>z-indexes play an important part in how our components overlay and interact with one another. Z-index tokens determine an item’s position in the stacking order.

import * as Token from '@danielwang/aemo-design-tokens/dist'
import ShowVar from './_showVar'
import styles from './_styles.module.scss';

export const Layer = ({zindex, color, mt}) => ( <div style={{
    backgroundColor: color,
    width: '6rem',
    height: '4rem',
    color: 'white',
    marginTop: mt+'rem',
    zIndex: zindex
  }}>{zindex}</div>);

## Tokens

| Value | SCSS Variables | Usage
|---|---|---|
| <ShowVar code={Token.ZindexLayer1} />  | `$gel-zindex-layer-1` | dropdown
| <ShowVar code={Token.ZindexLayer2} />  | `$gel-zindex-layer-2` | sticky
| <ShowVar code={Token.ZindexLayer3} />  | `$gel-zindex-layer-3` | fixed
| <ShowVar code={Token.ZindexLayer4} />  | `$gel-zindex-layer-4` | modal backdrop
| <ShowVar code={Token.ZindexLayer5} />  | `$gel-zindex-layer-5` | offcanvas
| <ShowVar code={Token.ZindexLayer6} />  | `$gel-zindex-layer-6` | modal
| <ShowVar code={Token.ZindexLayer7} />  | `$gel-zindex-layer-7` | popover
| <ShowVar code={Token.ZindexLayer8} />  | `$gel-zindex-layer-8` | tooltip

## Demo

<div className={styles.zindexDemo}>
    <Layer zindex={Token.ZindexLayer1} color={Token.ColorPrimaryPurple500} mt={0}/>
    <Layer zindex={Token.ZindexLayer2} color={Token.ColorFuelBiomass} mt={0.5}/>
    <Layer zindex={Token.ZindexLayer3} color={Token.ColorFuelSolar} mt={1}/>
    <Layer zindex={Token.ZindexLayer4} color={Token.ColorFuelWind} mt={1.5}/>
    <Layer zindex={Token.ZindexLayer5} color={Token.ColorFuelHydro} mt={2}/>
    <Layer zindex={Token.ZindexLayer6} color={Token.ColorFuelBattery} mt={2.5}/>
    <Layer zindex={Token.ZindexLayer7} color={Token.ColorFuelDemandSide} mt={3}/>
    <Layer zindex={Token.ZindexLayer8} color={Token.ColorFuelBrownCoal} mt={3.5}/>
</div>