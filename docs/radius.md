---
id: radius
title: Radius
custom_edit_url: null
---

>Border-radius is used to give any element rounded corners. Use the below defined tokens to set radiuses consistently.

import * as Token from '@danielwang/aemo-design-tokens/dist'
import ShowVar from './_showVar'

export const Box = ({code}) => ( <div style={{
    backgroundColor: Token.ColorPrimaryPurple200,
    width: '6rem',
    height: '6rem',
    borderRadius: code
  }}></div> );

| Demo | Value | SCSS Variables 
|---|---|---|
| <Box code={Token.RadiusNone} /> | <ShowVar code={Token.RadiusNone} />  | `$gel-radius-none`
| <Box code={Token.RadiusSm} /> | <ShowVar code={Token.RadiusSm} />  | `$gel-radius-sm`
| <Box code={Token.RadiusMd} /> | <ShowVar code={Token.RadiusMd} />  | `$gel-radius-md`
| <Box code={Token.RadiusLg} /> | <ShowVar code={Token.RadiusLg} />  | `$gel-radius-lg`
| <Box code={Token.RadiusCircle} /> | <ShowVar code={Token.RadiusCircle} />  | `$gel-radius-circle`