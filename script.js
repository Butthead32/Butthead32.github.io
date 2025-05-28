let pageId = 0;

async function loadJson() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Ошибка загрузки');
        const data = await response.json();
        console.log('Данные:', data);
        return data;  // Можно вернуть данные для дальнейшего использования
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Вызов функции
loadJson().then(data => {
    // Действия с данными
});

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