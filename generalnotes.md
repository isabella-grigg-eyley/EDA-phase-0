-- CSS --


Responsive Websites

    - Are flexible within the size of the screen
    - Use percentages instead of static pixel sizes
    - They are adjustable. Things can move around depending on the size of the screen.
    - They use media queries. (asks questions to the browser.) "@media only screen and (specification) {code}"

    What's the design process for responsive websites?
        1. What's the content? That's what users are there for. Design needs to enhance, not get in the way of the content.
        2. Design for small screen first. Small screens have linear design, so have the most important things at the top.
        3. Plan with real content.
        4. Use wireframes. Can use Bootstrap.
        5. Use relative measurements. Ems and Rems. Ems: 1em = default paragraph font size. 2em = 2x 1em, 0.5 = half 1em. Set body {font-size: 100%}, sets 1em to ideal reading size for that screen across all screens.
        6. Set maximum percentage line width. Don't have too wide or too narrow. Ideal line length is 45-75 characters. Usually max-width: 26em to 30em (trial with text to test).
            This can have the effect of too much whitespace on larger screens. So use media queries to set text size and max-width to increase for those larger screens. 
        7. Mobile: Anything that people need to touch needs to be 44px X 44px.
        8. Performance is paramount. You can make a performance budget- download time, size of pages in kbytes, etc. Images etc add to load time.
        9. Test across devices. Can test on browserstack.com.
        

Wireframing

    Wireframes are a basic visual representation of elements on a website. A sketch of your website.
    Pieces outlined in boxes and shapes. 
    Important because:
        1. It establishes hierarchy of information on the page. Where will most important information go? Users have F shaped reading/viewing pattern. Most important in top left of page.
        2. Simplifies communication. Makes it easy to convey to clients.
        3. Blueprint. Makes design process easier.