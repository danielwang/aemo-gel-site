---
id: space
title: Spaces
custom_edit_url: null
---
>Use the below defined tokens to create a predictable and harmonious spacing for our interface. These tokens should be used for all padding, margin and position coordinates. 

:::tip
Multiplying and dividing these values is allowed using even numbers ( x2 x4 or /2 /4 etc ).
:::

import * as Token from '@danielwang/aemo-design-tokens/dist'
import ShowVar from './_showVar'

export const Space = ({spacer}) => ( <div style={{
    backgroundColor: Token.ColorPrimaryPurple500,
    width: spacer,
    height: '2rem',
  }}></div> );

| Demo | Value | SCSS Variables 
|---|---|---|
| <Space spacer={Token.Spacer0} /> | <ShowVar code={Token.Spacer0} /> | `$gel-spacer-0`
| <Space spacer={Token.Spacer1} /> | <ShowVar code={Token.Spacer1} /> | `$gel-spacer-1`
| <Space spacer={Token.Spacer2} /> | <ShowVar code={Token.Spacer2} /> | `$gel-spacer-2`
| <Space spacer={Token.Spacer3} /> | <ShowVar code={Token.Spacer3} /> | `$gel-spacer-3`
| <Space spacer={Token.Spacer4} /> | <ShowVar code={Token.Spacer4} /> | `$gel-spacer-4`
| <Space spacer={Token.Spacer5} /> | <ShowVar code={Token.Spacer5} /> | `$gel-spacer-5`
| <Space spacer={Token.Spacer6} /> | <ShowVar code={Token.Spacer6} /> | `$gel-spacer-6`
| <Space spacer={Token.Spacer7} /> | <ShowVar code={Token.Spacer7} /> | `$gel-spacer-7`