// Function to handle navigation and update content
function navigateToPage(pageName) {
    updateContent(pageName);

    // Push a state to the history API
    history.pushState({ page: pageName }, "", `/${pageName}`);
}

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

// Function to update the content of the 'div' element
function updateContent(pageName) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = pages[pageName] || "Page not found";
}

// Handle initial page load
const initialPage = window.location.pathname.replace("/", "");
updateContent(initialPage);