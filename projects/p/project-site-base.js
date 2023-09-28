// Find the custom tag element by its ID
var customTag = document.getElementById('comp-sec-title');

// Create new HTML content
var newContent = document.createElement('div');
newContent.innerHTML = `<div style="display: flex; justify-content: space-between; align-items: center;">
<div style="position: relative; width: 100%; margin-bottom: 6px; margin-top: 25px;">
  <a href="#" class="button-s" style="position: absolute;
  top: 0;
  right: 0;
  display: block;
  z-index: 2;">See All</a>
  <h1 style="position: relative; z-index: 1; text-align: center;">${customTag.innerText}</h1>
</div>
</div>`;

// Replace the custom tag with the new content
customTag.parentNode.replaceChild(newContent, customTag);