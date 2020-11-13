var showModal = async (e) => {
    var element = document.querySelector('.modal-container').style;
    if (e.name == 'search') {
        element.opacity = '1';
        element.zIndex = '5';
    }
    else if (e.name == 'cancle') {
        element.opacity = '0';
        element.zIndex = '-10';
    }
}