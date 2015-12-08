function id(element) {
    return document.getElementById(element);
  }

  function somatorio(n) {
    if (n <= 0)
     return 0;
    else
     return n + somatorio(n - 1);
  }

  function wesley_safadao(dia, mes, ano) {
    var porcentagem = new Object();

    if (dia || mes || ano) {
      if (String(ano.length) == 4)
        ano = ano.slice(2, 4);
      // Nascimento do mito
      if (dia == 6 && mes == 9 && ano == 88) {
        porcentagem['safado'] = "1 %";
        porcentagem['anjo']   = "99 %";
      } else if (dia == 12 && mes == 10 && ano == 96) {
        // Também sou mito
        porcentagem['safado'] = "1 %";
        porcentagem['anjo']   = "99 %";
      } else if (dia == 20 && mes == 8 && ano == 92) {
        // Pra pessoa mais incrível de todas!
        porcentagem['safado'] = "Amo você!";
        porcentagem['anjo']   = "Você é incrível.";
      } else {
        if (String(ano.length) == 2 && String(mes.length) <= 2 && String(dia.length) <= 2) {
          if (parseInt(mes) <= 12 && parseInt(dia) <= 31) {
            var _safado, _anjo, _residuo;

            _safado = somatorio(parseInt(mes)) + (parseInt(ano)/100) * (50 - parseInt(dia));

            if (_safado > 100) {
              _residuo = _safado - 100;
              _safado -= _residuo*2;
              _anjo    = _residuo;
            } else {
              _anjo = (100 - _safado);
            }

            porcentagem['safado'] = String(_safado.toFixed(2)).concat(" %");
            porcentagem['anjo']   = String(_anjo.toFixed(2)).concat(" %");

            var strMeta = "Sou " + porcentagem['anjo'] + " anjo, perfeito, mas aquele " + porcentagem['safado'] + " é vagabundo!";
            //id("meta-description").setAttribute("content", strMeta);
            //strMeta = "Sou "+porcentagem['anjo']+"% anjo, perfeito, mas aquele "+porcentagem['safado']+"% é vagabundo!"
            //document.getElementById("share-twitter").setAttribute('data-text', strMeta);
          } else {
            porcentagem['safado'] = "0 %";
            porcentagem['anjo']   = "0 %";
          }
        } else {
          porcentagem['safado'] = "0 %";
          porcentagem['anjo']   = "0 %";
        }
      }
    } else {
      porcentagem['safado'] = "0 %";
      porcentagem['anjo']   = "0 %";
    }

    return porcentagem;
  }

  window.onload = function() {
    id('dia').addEventListener('keyup', function() {
      var result = new Object();
      result = wesley_safadao(this.value, id('mes').value, id('ano').value);
      if (result) {
        id('anjo').innerHTML   = result['anjo'];
        id('safado').innerHTML = result['safado'];
      }
    });

    id('mes').addEventListener('keyup', function(){
      var result = new Object();
      result = wesley_safadao(id('dia').value, this.value, id('ano').value);
      if (result) {
        id('anjo').innerHTML   = result['anjo'];
        id('safado').innerHTML = result['safado'];
      }
    });

    id('ano').addEventListener('keyup', function(){
      var result = new Object();
      result = wesley_safadao(id('dia').value, id('mes').value, this.value);
      if (result) {
        id('anjo').innerHTML   = result['anjo'];
        id('safado').innerHTML = result['safado'];
      }
    });
  }