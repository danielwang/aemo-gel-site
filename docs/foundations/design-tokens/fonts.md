---
id: fonts
title: Font Family
custom_edit_url: null
---

>Good typography not only differentiates a brand but also communicates the brand’s style, personality and tone of voice. It has a huge influence on brand perception and recognition. 
     
Our default typeface has been chosen to maximise legibility across a number of font sizes and to ensure we have clear, consistent headings, paragraphs and form elements.

import * as Token from '@danielwang/aemo-design-tokens/dist' 
import ShowVar from './_showVar'

export const Text = ({ff, words} ) => ( <span style={{
    fontFamily: ff,
    fontSize: '1.5rem',
  }}>{words}</span> );

## Fonts

| Demo | Value | SCSS Variables | Usage
|---|---|---|---|
| <Text ff={Token.FontFamilyBlack} words="Avenir Black 95"/> | <ShowVar code={Token.FontFamilyBlack} /> | `$gel-font-family-black` | headings 
| <Text ff={Token.FontFamilyHeavy} words="Avenir Heavy 85"/>  | <ShowVar code={Token.FontFamilyHeavy} />  | `$gel-font-family-heavy` | buttons, links, bold text
| <Text ff={Token.FontFamilyRoman} words="Avenir Roman 55"/>  | <ShowVar code={Token.FontFamilyRoman} />  | `$gel-font-family-roman` | body text
| <Text ff={Token.FontFamilyLight} words="Avenir Book 35"/>  | <ShowVar code={Token.FontFamilyLight} />  | `$gel-font-family-light` | leading text

## Code Formats

### CSS 

```css
    .classname{
        font-family: var(--gel-font-family-roman)
    }
```

### SASS
```sass
    .classname{
        font-family: $gel-font-family-roman
    }
```

### LESS
```less
    .classname{
        font-family: @gel-font-family-roman
    }
```

## Font Weight

Because the weights and styles are set to normal in the @font-face declarations, keeping the weights and styles set to normal when styling the text is important. Otherwise, the bolds may double-bold (some browsers will add a bold weight to the already bold Web font), and the italics may double-italic (some browsers will add an italic style to the already italic Web font).


```css
    .classname{
        font-family: var(--gel-font-weight-normal)
    }
```
