var idiom = 'spanish';

function toggleIdiom(){
    if(idiom === 'spanish'){
        idiom = 'english';
    }
    else if(idiom === 'english'){
        idiom = 'spanish';;
    }
    
    if(idiom === 'spanish'){
        location.reload();
    }
    if(idiom === 'english'){
        document.getElementById('idiom_box-text').textContent = 'Ver página en Español 🇪🇸';

        document.querySelector('#main_box-1 h2').textContent = 'Understand. Support. Resolve.';
        
    
        document.querySelector('#btn_about').textContent = 'About Us';
        document.querySelector('#btn_areas').textContent = 'Practice Areas';
        document.querySelector('#btn_team').textContent = 'Our Team';
        document.querySelector('#btn_post').textContent = 'Posts';
        document.querySelector('#btn_contact').textContent = 'Contact Us';
        
    }
}