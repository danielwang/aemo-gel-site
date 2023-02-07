---
id: accessibility
title: Accessibility
custom_edit_url: null
---
>With 1 in 5 Australians having a disability, we have an obligation to ensure that our tools and services are accessible

The Australian Energy Market Operator (AEMO) is responsible for ensuring the safe, reliable, and efficient operation of the National Electricity Market (NEM) and the gas markets in Australia. As a result, it's important for AEMO to ensure that its websites and digital products are accessible to as many users as possible, including those with disabilities.


## GEL Accessibility
GEL provides an easy-to-use framework of ready-made styles, layout tools, and interactive components, allowing developers to create websites and applications that are visually appealing, functionally rich, and accessible out of the box.

### Overview and Limitations

The overall accessibility of any project built with GEL depends in large part on the author's markup, additional styling, and scripting they've included. However, provided that these have been implemented correctly, it should be perfectly possible to create websites and applications with GEL that fulfill [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1](https://www.w3.org/TR/WCAG21/) (A/AA/AAA), [Section 508](https://www.section508.gov/) and similar accessibility standards and requirements.

### Structural markup

GEL's styling and layout can be applied to a wide range of markup structures. This documentation aims to provide developers with best practice examples to demonstrate the use of GEL itself and illustrate appropriate semantic markup, including ways in which potential accessibility concerns can be addressed.

### Interactive components

Interactive components—such as modal dialogs, dropdown menus and custom tooltips—are designed to work for touch, mouse and keyboard users. Through the use of relevant [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/standards-guidelines/aria/) roles and attributes, these components should also be understandable and operable using assistive technologies (such as screen readers).

Because GEL's components are purposely designed to be fairly generic, authors may need to include further <abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and attributes, as well as JavaScript behavior, to more accurately convey the precise nature and functionality of their component. This is usually noted in the documentation.


## Checklist
### Designers
- Make sure there is enough contrast between text and its background color
- Don't indicate important information using color alone
- Pair values of colors together (not only hues) to increase contrast
- Don't rely on sensory characteristics as the sole indicator for understanding and operating content
- Design focus states to help users navigate and understand where they are
- Help users understand inputs, and help them avoid and correct mistakes
- If an experience cannot be made accessible, create another route for users to get that information
- Be as consistent and clear as possible in layout and copy

### Developers
- Use the correct HTML element for your content
- Support keyboard navigation
- Understand and use HTML landmarks
- Write good alt text for your images
- Design focus states to help users navigate and understand where they are
- Help users understand inputs, and help them avoid and correct mistakes
- Use ARIA attributes when applicable
- Give users a way to skip top level navigation to access main content
- Make links descriptive
- Avoid images and iconography in pseudo-elements
- Make SVGs accessible to assistive technology
- Hide decorative elements from screen readers
- Create alternate routes for users to access information
- Links should be visually identifiable and have clear :focus and :active states
- HTML document should have a language attribute

### Quality Assurance
- Run through each page with the WAVE Chrome Extension.
- Users should be able to navigate through content using their keyboard.
- Users should be able to navigate content using a screen reader.
- Charts and images should all have alt-text so that users with screen readers or users on a slow connection will still be able to understand the images.
- Decorative images should not be visible to screen readers.

### Editorial
- Write good alt text for your images
- Important information should not be conveyed through images, color, or sensory characteristics alone


## Resources
*   [W3C Web Accessibility Initiative](https://www.w3.org/WAI)
*   [WAI-ARIA Authoring Practices](http://w3c.github.io/aria-practices)
*   [WebAIM](https://webaim.org/)
*   [The A11Y Project](https://a11yproject.com/)
*   [Are My Colours Accessible?](http://www.aremycoloursaccessible.com/)