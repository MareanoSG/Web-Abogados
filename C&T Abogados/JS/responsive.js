function toggleMenu(element){
    if(element.id === 'btn-close_menu'){
        document.getElementById('mobile-nav_box').style.display = 'none';
    }
    else if(element.id === 'btn-open_menu'){
        document.getElementById('mobile-nav_box').style.display = 'flex';
    }
}

window.addEventListener('scroll', function() {
    if (window.innerWidth <= 550) {
        var element = document.getElementById('header_box');
        var scrollHeight = window.scrollY;

        if (scrollHeight > 50) { 
            document.getElementById('header_box-logo').style.width = '120px';
            document.getElementById('header_box').style.height = '15vh';
        }
        if (scrollHeight < 50) { 
            document.getElementById('header_box-logo').style.width = '180px';
            document.getElementById('header_box').style.height = '20vh';
        }
    }
    else if (window.innerWidth > 550){
        var element = document.getElementById('header_box');
        var scrollHeight = window.scrollY;

        if (scrollHeight > 100) { 
            this.document.getElementById('header_box').style.backgroundColor = '#f9f6f2f5';
            this.document.getElementById('header_box').style.display = 'flex';
            this.document.getElementById('header_box').style.flexDirection = 'row';
            this.document.getElementById('header_box').style.height = '12vh';
            this.document.getElementById('header_box').style.boxShadow = ' 0 0 4px black';
            this.document.querySelector('#header_box img').style.width = '80px';
            this.document.querySelector('#header_box img').style.marginRight = '20px';
            
        }
        if (scrollHeight < 100) { 
            this.document.getElementById('header_box').style.backgroundColor = '#F9F6F2';
            this.document.getElementById('header_box').style.display = 'flex';
            this.document.getElementById('header_box').style.flexDirection = 'column';
            this.document.getElementById('header_box').style.height = '30vh';
            this.document.getElementById('header_box').style.boxShadow = 'none';
            this.document.querySelector('#header_box img').style.width = '180px';
            this.document.querySelector('#header_box img').style.marginRight = '0px';
            
        }
    }
});