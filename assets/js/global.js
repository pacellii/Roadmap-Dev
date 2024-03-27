const body = document.body
const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');

footer.setAttribute('class', 'footer');

body.appendChild(footer);

const imgFooter = 
        
        "<img src='./assets/img/logo.png' alt='Logo footer' class='imgFooter'>"+
        "<p class='rights'>Todos os direitos reservados</p>" +
        '<p>Criado por<a href="https://github.com/pacellii" target="_blank" id="my-github"> Pacellii <i class="bi bi-github"></i></a></p>';
        
       

    footer.innerHTML += imgFooter;




            

    

