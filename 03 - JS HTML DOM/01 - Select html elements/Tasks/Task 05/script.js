document.getElementById('removeLast').addEventListener('click', () => {
    let list = document.getElementById('itemList');
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    };
});