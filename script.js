document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', function () {
      // Close all other items
      accordionItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      // Toggle current item
      item.classList.toggle('active');
      const content = item.querySelector('.accordion-content');

      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  // Auto open first item
  if (accordionItems.length > 0) {
    accordionItems[0].classList.add('active');
    const content = accordionItems[0].querySelector('.accordion-content');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
});