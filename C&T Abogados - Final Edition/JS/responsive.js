function toggleMenu(element){
    if(element.id === 'btn-close_menu'){
        document.getElementById('mobile-nav_box').style.display = 'none';
    }
    else if(element.id === 'btn-open_menu'){
        document.getElementById('mobile-nav_box').style.display = 'flex';
    }
}

window.addEventListener('scroll', function() {
    if (window.innerWidth <= 850) { // movil
        var element = document.getElementById('header_box');
        var scrollHeight = window.scrollY;

        if (scrollHeight > 50) { 
            document.getElementById('header_box-logo').style.width = '120px';
            document.getElementById('header_box').style.height = '15vh';
        }
        if (scrollHeight < 50) { 
            document.getElementById('header_box-logo').style.width = '120px';
            document.getElementById('header_box').style.height = '15vh';
        }
    }
    else if (window.innerWidth > 850){ //pc
        var element = document.getElementById('header_box');
        var scrollHeight = window.scrollY;

        if (scrollHeight > 100) { 
            this.document.getElementById('header_box').style.display = 'flex';
            this.document.getElementById('header_box').style.flexDirection = 'row';
            this.document.getElementById('header_box').style.height = '12vh';
            this.document.getElementById('header_box').style.boxShadow = ' 0 0 4px black';
            this.document.querySelector('#header_box img').style.width = '80px';
            this.document.querySelector('#header_box img').style.marginRight = '20px';
            
        }
        if (scrollHeight < 100) { 
            this.document.getElementById('header_box').style.display = 'flex';
            this.document.getElementById('header_box').style.flexDirection = 'column';
            this.document.getElementById('header_box').style.height = '25vh';
            this.document.getElementById('header_box').style.boxShadow = 'none';
            this.document.querySelector('#header_box img').style.width = '120px';
            this.document.querySelector('#header_box img').style.marginRight = '0px';
            
        }
    }
});