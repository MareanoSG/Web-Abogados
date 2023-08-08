var idiom = 'spanish';

function toggleIdiom(element){
    if(element.id === 'btn-spanish'){
        idiom = 'spanish';
    }
    else if(element.id === 'btn-english'){
        idiom = 'english';
    }
    
    if(idiom === 'spanish'){
        location.reload();
    }
    if(idiom === 'english'){
        document.getElementById('btn-english').style.display = 'none';
        document.getElementById('btn-spanish').style.display = 'flex';

        document.querySelector('#main_box-1 h2').textContent = 'Understand. Support. Resolve.';
        document.querySelector('#main_box-2 h2').textContent = 'Contact us via WhatsApp';
        document.querySelector('#header_box nav').style.width = '300px';
        document.querySelector('#btn_about').textContent = 'About Us';
        document.querySelector('#btn_team').textContent = 'Our Team';
        document.querySelector('#btn_contact').textContent = 'Contact Us';
        document.querySelector('#idiom_box-text').textContent = 'Ver página en Español';
        
        // Additional translations can be added here for other sections
        // For example:
        // document.getElementById('header_box-logo').src = 'RESOURCES/logo-en.png'; // Update logo image path
    }
}