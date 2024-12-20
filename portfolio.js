
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    alert('Correo copiado al portapapeles: ' + text);
  }, function(err) {
    alert('Hubo un error al copiar el correo: ', err);
  });
}

