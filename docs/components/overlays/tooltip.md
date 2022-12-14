---
id: tooltip
title: Tooltip
custom_edit_url: null
---

import AdmonitionExt from '../admonitionExt'

> Tooltip directive provides advisory information for a component.


## Variants

GEL provides designers with a tooltip that is displayed at the top of any element`

![Tooltip types](img/tooltip-types.svg)


## Demo

![Tooltip demo](img/tooltip-demo.svg)


## Guidance

* Tooltip should be as short as possible, ideally a one liner and single line.
* Tooltip should be displayed in hover state.
* Tooltip should be at a gap of spacer-2 with the element.
* Actionable icons/toolbar which does not have a accompanying text should have tooltip added to the icons/toolbar.
* Should remain in place when user moves cursor within the target element.
* The text inside a tooltip should always be center aligned.

### When to use

* Use tooltip when an element requires additional information.
* Consider using tooltip on icon only buttons such as [toolbar](../control-buttons/toolbar.md)


## Designer assets

<AdmonitionExt type="figma" url="https://www.figma.com/file/kzLxtqv6YGL0wotiqzgEo4/GEL-UI-Doc?node-id=8%3A29936" />


## Developer API

<AdmonitionExt type="vue" url="https://primefaces.org/primevue/tooltip" />