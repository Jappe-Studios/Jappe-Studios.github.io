// Define your page content here
const pages = {
    firstpage: "<h1>First Page</h1><p>This is the content of the first page.</p>",
    secondpage: "<h1>Second Page</h1><p>This is the content of the second page.</p>",
};

// Function to update the content of the 'div' element
function updateContent(pageName) {
    const contentDiv = document.getElementById("content");

    if (pages.hasOwnProperty(pageName)) {
        contentDiv.innerHTML = pages[pageName];
    } else {
        contentDiv.innerHTML = "<h1>Page not found</h1>";
    }
}

// Function to handle navigation and update content
function navigateToPage(pageName) {
    updateContent(pageName);

    // Push a state to the history API
    history.pushState({ page: pageName }, "", `/${pageName}`);
}

// Handle initial page load
const initialPage = window.location.pathname.replace("/", "");
navigateToPage(initialPage);

// Handle clicks on "first page" and "second page" links
document.getElementById("firstPage").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    navigateToPage("firstpage");
});

document.getElementById("secondPage").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    navigateToPage("secondpage");
});

// Listen for popstate event (back/forward navigation)
window.addEventListener("popstate", (event) => {
    const pageName = event.state?.page || initialPage;
    updateContent(pageName);
});