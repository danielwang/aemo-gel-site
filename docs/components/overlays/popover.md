---
id: popover
title: Popover
custom_edit_url: null
---

import AdmonitionExt from '../admonitionExt'

> Popover are similar to tooltip but varies in the fact that Popover can have multi line information about the target element.


## Variants

GEL provides designers with a popover that is displayed next to the help icon.

![Popover types](img/popover-types.svg)


## Demo

![Popover demo](img/popover-demo.svg)


## Guidance

* Popover should be used in conjunction with the help icon to provide extended information for the target element.
* Popover is an actionable overlay, therefore requiring user to click the icon to dipslay the popover.
* Use Tooltip if its not multiline and requires no extra information.
* Consider using Modal if you are displaying information that require action to complete the task.


## When to use

* When you don’t want to lose the context but still would like to provided extended information to the user.
* Should be used to provide short summaries about the target element.


## Designer assets

<AdmonitionExt type="figma" url="https://www.figma.com/file/kzLxtqv6YGL0wotiqzgEo4/GEL-UI-Doc?node-id=8%3A29775" />


## Developer API

:::caution Code

Popover component is specific to GEL only and is not available in PrimeVue.

:::