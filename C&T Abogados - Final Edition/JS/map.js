var openMap = false;

function toggleMap() {
    if (openMap === false) {
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('header').style.display = 'none';
        document.getElementById('map_box').style.display = 'flex';
        openMap = true;
    } else if (openMap === true) {
        document.querySelector('body').style.overflow = 'scroll';
        document.querySelector('header').style.display = 'flex';
        document.getElementById('map_box').style.display = 'none';
        openMap = false;
    }
}