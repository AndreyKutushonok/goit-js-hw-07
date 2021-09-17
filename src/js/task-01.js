const categoriesEl = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach((el) => {

    const categoriesName = el.querySelector('h2');
    console.log(`Категория : ${categoriesName.textContent}`);

    const categoriesNameEl = el.querySelector(`ul`);
    console.log(`Количество элементов: ${categoriesNameEl.children.length}`);
});
