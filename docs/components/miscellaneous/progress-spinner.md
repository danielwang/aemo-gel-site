---
id: progress-spinner
title: Progress Spinner
custom_edit_url: null
---

import AdmonitionExt from '../admonitionExt'

> A spinner is an animated element that appears a user's action to indicate that saving or loading is in progress.


## Variants

There are 3 different types of progress spinners available to choose from in GEL.

![Progress Spinner types](img/spinner-types.svg)


## Demo

![Progress Spinner demo](img/spinner-demo.svg)


## Guidance

* User spinner to indicate background activity which takes short period of time is in progress .
* Similar to progress bar, if the spinner is either MD or LG, consider accompanying the spinner with a text informing what action/process is taking place.

### When to use

* When an action has been taken and the server/process takes short time to load new data/content.

### When not to use

* Ideally, only one spinner should be used at a time. If a larger section of content is loading, consider using a larger size spinner instead of multiple smaller ones or a [skeleton loader](skeleton.md) instead.
* If the process takes a long period of time such as importing data or exporting reports, consider using a [progress bar](progress-bar.md) instead.


## Designer assets

<AdmonitionExt type="figma" url="https://www.figma.com/file/kzLxtqv6YGL0wotiqzgEo4/GEL-UI-Doc?node-id=618%3A57096" />


## Developer API

<AdmonitionExt type="vue" url="https://primefaces.org/primevue/progressspinner" />