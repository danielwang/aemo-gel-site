---
id: icons
title: Iconography
custom_edit_url: null
---

import Iconlist from './Iconlist';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> A library of icons has been curated for AEMO. The suite of icons has been carefully created to sit cohesively alongside other brand elements and forms the basis of many of the brand’s graphic illustrations and elements.


Icons can be used to represent abstract concepts or physical objects. Paired with type, icons can help tell many different stories and add visual interest to reports, documents and presentations.

All icons have been created in three colour versions:

1. Colour 
2. Black
3. Reverse

A sample selection of our icon library is shown here.

If there is a need for an icon that does not exist within the library, contact the Communications and Corporate Affairs team to inquire about creating custom icons.
<Tabs>
<TabItem value="banana" label="Library" default>
    <Iconlist />
</TabItem>
<TabItem value="howtouse" label="How To Use">

### Install
Run the following command to donwlaod it to your project.

```bash
npm install aemo-gel-icons --save 
```

Then import the library

```js
import 'gel-icon/style.css'
```

### Use font icons by coding in HTML

Gel icons use the `pi pi-{icon}` syntax such as pi pi-check following the reference from PrimeVue. A standalone icon can be displayed using an element like i or span.

The icons are treated as fonts. So they can be resized by giving font-size styling to the icon class.

```html
<i class="pi pi-check" style="font-size: 2rem"></i>
```

  </TabItem>

</Tabs>




