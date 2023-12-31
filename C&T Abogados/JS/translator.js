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
        document.querySelector('#main_box-1 h2').textContent = 'Understand. Support. Resolve.';
        
        /* Nav */
        translate('#btn_idiom', 'Página en Español');


        /* Titulos de secciones */
        translate('#about_box-about-title', 'About Us');
        translate('#info_box-section-title', 'Practice Areas');
        translate('#assoc_box-assoc-title', 'Associations');
        translate('#team_box-team-title', 'Our Team');
        translate('#post_box-post-title', 'Posts');
        translate('#contact_box-contact-title', 'Contact Us');

        /* Otros */

        translate('#about_text', 
            "'CYT Abogados' was founded by young professionals, highly trained and experienced in various areas of the legal profession, providing services to both individuals and companies, with a service vocation and results orientation. With continuous and permanent training, we seek to advise our clients by working closely and offering added value with technical quality in the study's practice areas."
        );

        
    }
}

function translate(elementSelected, translation){
    document.querySelector(elementSelected).textContent = translation;
}