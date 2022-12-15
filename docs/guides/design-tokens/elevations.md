---
id: elevations
title: Elevations
custom_edit_url: null
---

>Elevation is the relative distance between two surfaces along the z-axis.
     
Shadows can add very attractive depth and interaction to our design. Keeping them consistent from one component to another is very important. 

import * as Token from '@danielwang/aemo-design-tokens/dist'
import ShowVar from './_showVar'

export const Box = ({code}) => ( <div style={{
    backgroundColor: '#ffffff',
    width: '6rem',
    height: '6rem',
    boxShadow: code
  }}></div> );

| Demo | Value | SCSS Variables 
|---|---|---|
| <Box code={Token.ElevationNone} /> | <ShowVar code={Token.ElevationNone} />  | `$gel-elevation-none`
| <Box code={Token.ElevationLow} /> | <ShowVar code={Token.ElevationLow} /> | `$gel-elevation-low`
| <Box code={Token.ElevationMedium} /> | <ShowVar code={Token.ElevationMedium} /> | `$gel-elevation-medium`
| <Box code={Token.ElevationHigh} /> | <ShowVar code={Token.ElevationHigh} /> | `$gel-elevation-high`
