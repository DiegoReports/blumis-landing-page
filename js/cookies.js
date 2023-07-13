const popUp = document.getElementById("popUp-cookie");
const result = document.getElementById("result");
const accepted = document.getElementById("result-accepted");
const refused = document.getElementById("result-refused");

// Define o valor da opção "anonymizeIp" de acordo com o consentimento do usuário

function hidePopup() {
  accepted.style.display = 'none';
  refused.style.display = 'none';
  result.style.display = 'none';
}

function aceitarCookies() {
  document.cookie = "cookies=true; max-age=" + 60 * 60 * 24 * 30;
  // Salva o valor do consentimento no localStorage
  localStorage.setItem("cookieBannerDisplayed", "true");
  popUp.classList.add("hide");
  result.style.display = "block";
  refused.style.display = "none";
  accepted.classList.add("view");
  setTimeout(hidePopup, 6000);

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Obrigado por aceitar nossos termos de privacidade!',
    showConfirmButton: false,
    toast: true,
    timer: 6000,
    timerProgressBar: true
  })
}

function recusarCookies() {
  document.cookie = "cookies=false; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  window['ga-disable-G-V6BN0TCY3W'] = true;
  localStorage.setItem("cookieBannerDisplayed", "false");
  popUp.classList.add("hide");
  result.style.display = "block";
  accepted.style.display = "none";
  refused.classList.add("view");
  setTimeout(hidePopup, 6000);

  Swal.fire({
    position: 'top-end',
    icon: 'warning',
    title: 'Você não aceitou os termos de privacidade. Algumas funções do site podem estar indisponíveis',
    showConfirmButton: false,
    toast: true,
    timer: 6000,
    timerProgressBar: true
  })
}

// Checando se o cookie foi aceito. Caso SIM, não exibe msg
let checkCookie = document.cookie.indexOf("cookies=true");
checkCookie != -1 ? popUp.classList.add("hide") : popUp.classList.remove("hide");

// LENDO TERMOS DE POLITICA
function readTerms() {
  Swal.fire({
    title: 'Respeitamos sua privacidade',
    icon: 'info',
    html: '<p>Ao visitar nossa página, podemos coletar informações como sua localização geográfica, gênero, idade, tempo de navegação na página e interesses. Essas informações nos ajudam a entender melhor o perfil dos nossos visitantes e a personalizar a sua experiência de compra em nosso site. </br> Por exemplo, podemos oferecer vestidos que se adequem melhor às suas preferências de estilo ou localização geográfica. É importante destacar que não compartilhamos suas informações pessoais com terceiros, a menos que isso seja necessário para cumprir com obrigações legais.</br> Além disso, tomamos medidas de segurança para proteger seus dados pessoais de perda, roubo ou acesso não autorizado.Ao navegar em nosso site, você pode ver um aviso de cookies. Esse aviso nos ajuda a coletar informações adicionais sobre suas preferências de navegação e aprimorar ainda mais a sua experiência em nosso site. </br>Lembre-se de que você tem o controle sobre suas informações pessoais e pode optar por desativar ou limitar a coleta de cookies por meio das configurações do seu navegador. Esperamos que essa explicação tenha esclarecido como utilizamos seus dados para oferecer um serviço de qualidade e personalizado para você. </br>Em caso de dúvidas ou solicitações relacionadas aos seus dados pessoais, entre em contato conosco por meio do nosso canal de atendimento ao cliente</p>',
    width: '82em',
    customClass: {
      confirmButton: '.button',
    }
  })
  
}
