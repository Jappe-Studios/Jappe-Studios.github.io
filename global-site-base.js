// Find the custom tag element by its ID
var customTag = document.getElementById('global-site-base')
    || document.getElementById('global-site-base(home)')
    || document.getElementById('global-site-base(prjs)')
    || document.getElementById('global-site-base(cntc)')
    || document.getElementById('global-site-base(scil)')
    || document.getElementById('global-site-base(abt)');

// Get the current HTML content of the div
var currentHTMLContent = customTag.innerHTML;

// Create new HTML content
var newContent = document.createElement('div');
newContent.innerHTML = `
<header class="header">
  <a href="#" class="logo">Jappe Studios</a>
  <nav class="navbar">
    <a href="#" ${customTag.id == "global-site-base(home)" ? 'class="active"' : ""}>Home</a>
    <a href="#" ${customTag.id == "global-site-base(prjs)" ? 'class="active"' : ""}>Projects</a>
    <a href="#" ${customTag.id == "global-site-base(cntc)" ? 'class="active"' : ""}>Contact</a>
    <a href="#" ${customTag.id == "global-site-base(scil)" ? 'class="active"' : ""}>Socials</a>
    <a href="#" ${customTag.id == "global-site-base(abt)" ? 'class="active"' : ""}>About</a>
  </nav>
</header>
<div style="padding-top: 100px; display: flex; justify-content: center; align-items: center;">
  ${currentHTMLContent}
</div>
<div style="height: 20px;"></div>
<div class="footer">
  <p>© Jappe Studios 2023</p>
  <p>jappe.studios@gmail.com</p>
</div>`;

// Replace the custom tag with the new content
customTag.parentNode.replaceChild(newContent, customTag);