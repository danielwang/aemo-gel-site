---
id: font-size
title: Font Sizes
custom_edit_url: null
---

>Good typography not only differentiates a brand but also communicates the brand’s style, personality and tone of voice. It has a huge influence on brand perception and recognition. 
     
Our default typeface has been chosen to maximise legibility across a number of font sizes and to ensure we have clear, consistent headings, paragraphs and form elements.

import * as Token from '@danielwang/aemo-design-tokens/dist' 

export const Text = ({fs, words} ) => ( <span style={{
    fontSize: fs,
}}>{words} {fs}</span> );

## Sizes

### Heading

| Demo | SCSS Variables 
|---|---|
| <Text fs={Token.FontSizeHeading1} words="Font size"/> | `$gel-font-size-heading-1` 
| <Text fs={Token.FontSizeHeading2} words="Font size"/> | `$gel-font-size-heading-2` 
| <Text fs={Token.FontSizeHeading3} words="Font size"/> | `$gel-font-size-heading-3` 
| <Text fs={Token.FontSizeHeading4} words="Font size"/> | `$gel-font-size-heading-4` 
| <Text fs={Token.FontSizeHeading5} words="Font size"/> | `$gel-font-size-heading-5`


### Text
| Demo | SCSS Variables 
|---|---|
| <Text fs={Token.FontSizeTextXl} words="Font size"/> | `$gel-font-size-xl` 
| <Text fs={Token.FontSizeTextLg} words="Font size"/> | `$gel-font-size-lg` 
| <Text fs={Token.FontSizeTextDefault} words="Font size"/> | `$gel-font-size-default` 
| <Text fs={Token.FontSizeTextSm} words="Font size"/> | `$gel-font-size-sm` 
| <Text fs={Token.FontSizeTextXs} words="Font size"/> | `$gel-font-size-xs` 

## Line Height

| Value | SCSS Variables 
|---|---|
| 1 | `$gel-line-heihgt-reset` 
| 1.25 | `$gel-line-heihgt-heading` 
| 1.5 | `$gel-line-heihgt-text` 

## Code Formats

### CSS

```css
    .classname{
        font-size: var(--gel-font-size-default)
    }
```

### SASS
```sass
    .classname{
        font-size: $gel-font-size-default
    }
```

### LESS
```less
    .classname{
        font-size: @gel-font-size-default
    }
```