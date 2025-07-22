# Accordion Component - FAQ Section

This project features a responsive, accessible accordion component for displaying FAQs. It allows only one section to be open at a time, providing a clean and organized user experience.

**Live Demo**: [https://nurf21.github.io/accordion](https://nurf21.github.io/accordion)  
**Project Source**: [https://roadmap.sh/projects/accordion](https://roadmap.sh/projects/accordion)

## Features

- **Single-item expansion**: Only one FAQ opens at a time
- **Smooth animations**: CSS transitions for expand/collapse
- **Responsive design**: Works on mobile, tablet, and desktop
- **Customizable**: Easily modify colors, fonts, and content
- **Visual indicators**: Clear + and - icons showing state

## How to Use

1. Include the HTML structure in your project:
```html
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header">Your Question Here</div>
    <div class="accordion-content">
      <div class="accordion-content-inner">
        Your answer here
      </div>
    </div>
  </div>
  <!-- More items... -->
</div>
```

2. Add the CSS to your stylesheet or in a `<style>` tag

3. Include the JavaScript functionality

## Customization

### Adjusting Animation Speed
Modify the transition duration in the CSS:
```css
.accordion-content {
  transition: max-height 0.3s ease;
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Project Structure

```
accordion/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── LICENSE             # License file
```