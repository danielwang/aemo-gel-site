---
id: skeleton
title: Skeleton
custom_edit_url: null
---

import AdmonitionExt from '../admonitionExt'

> Skeletons are loaders used as placeholders instead of actual content prior to being loaded completely.


## Variants

There are 4 different types of skeletons provided in GEL as MVP.

![Skeleton types](img/skeleton-types.svg)


## Demo

![Skeleton demo](img/skeleton-demo.svg)


## Guidance

* Avatars, cards, charts, content blocks, lists, and tables are good candidates for a skeleton state.
* Use rounded corners, even for rectangular shapes. Shapes follow the standard spacing guidelines.
* Each shape should represent content in a recognizable way. For example, a long rectangle for a line of text or a circle for an avatar.


### When to use

* Offer a simplified preview of loading content to help manage user expectations while decreasing perceived load time.
* Use skeleton on high-traffic pages, such as account dashboard, and pages with tables, lists etc.

### When not to use

* Instantly loading content doesn't need a skeleton loader.
* A skeleton loader shouldn’t be used in combination with a [spinner](progress-spinner.md), choose the one that fits the use case best.
* If a backround action is taking place such as importing data or exporting reports, consider using a [progress bar](progress-bar.md) instead.

### Considerations

* **Don't:** Load skeleton before [progress spinner](progress-spinner.md) if a spinner is being used.


## Designer assets

<AdmonitionExt type="figma" url="https://www.figma.com/file/kzLxtqv6YGL0wotiqzgEo4/GEL-UI-Doc?node-id=618%3A56921" />


## Developer API

<AdmonitionExt type="vue" url="https://primefaces.org/primevue/skeleton" />