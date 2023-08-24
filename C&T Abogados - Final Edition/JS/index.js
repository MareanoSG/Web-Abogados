function toggleMenu(element){
    if(element.id === 'btn-close_menu'){
        document.getElementById('mobile-nav_box').style.display = 'none';
    }
    else if(element.id === 'btn-open_menu'){
        document.getElementById('mobile-nav_box').style.display = 'flex';
    }
}

window.addEventListener('scroll', function() {
    var element = document.getElementById('header_box');
    var scrollHeight = window.scrollY;

    if (scrollHeight > 100) { 
        this.document.getElementById('header_box-logo').style.width = '120px';
        this.document.getElementById('header_box').style.height = '15vh';
    }
    if (scrollHeight < 100) { 
        this.document.getElementById('header_box-logo').style.width = '180px';
        this.document.getElementById('header_box').style.height = '20vh';
    }
  });