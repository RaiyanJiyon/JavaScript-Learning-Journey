const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleSidebar');

toggleButton.addEventListener('click', () => {
    if (sidebar.style.width === '0px' || sidebar.style.width == '') {
        sidebar.style.width = '250px';    
    } else {
        sidebar.style.width = '0';
    };
});
