---
id: icons
title: Iconography
custom_edit_url: null
---

import Iconlist from './Iconlist';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> The GEL icon library is a comprehensive collection of symbols and graphical elements used to create a consistent and recognizable visual language across various digital platforms. 

It is an essential tool for ensuring brand consistency and improving user experience, as it provides designers and developers with a standardized set of icons to use in their designs.

The icon library should also be comprehensive, covering a wide range of concepts and functions, from basic system icons to more complex and specialized icons for AEMO's business and energy industry. This makes it easier for designers to create interfaces that are intuitive and user-friendly, without having to create new icons from scratch.

Having a well-designed icon library is essential for any design system, as it provides a foundation for building cohesive and recognizable digital products. It can help save time and resources, while also improving the overall quality of the user experience

:::tip
If there is a need for an icon that does not exist within the library, contact the <a href="/community">DDC Design team</a> to inquire about creating new icons.
:::

<Tabs>
<TabItem value="banana" label="Library" default>
    <Iconlist />
</TabItem>
<TabItem value="howtouse" label="How To Use">

### Install
Run the following command to donwlaod it to your project.

```bash
npm install aemo-gel-icon --save 
```

Then import the library

```js
import 'aemo-gel-icon/style.css'
```

### Use font icons by coding in HTML

Gel icons use the `pi pi-{icon}` syntax such as pi pi-check following the reference from PrimeVue. A standalone icon can be displayed using an element like i or span.

The icons are treated as fonts. So they can be resized by giving font-size styling to the icon class.

```html
<i class="pi pi-check" style="font-size: 2rem"></i>
```

  </TabItem>

</Tabs>




