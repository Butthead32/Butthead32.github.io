let pageId = 0;
const pagesContent = ["text 0", "text 1", "text 2", "text 3", "text 4", "text 5"];

function changePage() {
    const outputElement = document.getElementById('pageContent');
    outputElement.textContent = pagesContent[pageId];
}

function cyclePage() {
    pageId++;
    changePage();
}

function jumpToPage() {
    pageId = 1;
    changePage();
}