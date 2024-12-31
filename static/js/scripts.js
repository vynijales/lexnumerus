function sendEmail() {
  const nome = document.querySelector('input[name="nome"]').value;
  const assunto = document.querySelector('input[name="assunto"]').value;
  const mensagem = document.querySelector('textarea[name="mensagem"]').value;

  const emailLink = document.getElementById('sendEmailLink');
  const modelo = `Olá, meu nome é ${nome}.

${mensagem}

Aguardo retorno. Obrigado!`;
  window.location.href = `mailto:atendimento@lexnumerus.com.br?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(modelo)}`;
}
