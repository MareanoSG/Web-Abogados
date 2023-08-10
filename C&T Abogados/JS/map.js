var openMap = false;

function toggleMap() {
    if (openMap === false) {
        document.getElementById('map_box').style.display = 'flex';
        openMap = true;
    } else if (openMap === true) {
        document.getElementById('map_box').style.display = 'none';
        openMap = false;
    }
}