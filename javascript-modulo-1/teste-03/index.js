let opcao = ''
let albums = []

do {
  opcao = prompt(
    'Albums que você mais gosta: ' +
      albums.length +
      '\n\n1 - Novo álbum\n2 - Mostrar álbum\n3 - Sair'
  )

  switch (opcao) {
    case '1':
      let album = {}

      album.nome = prompt('Informe o nome do álbum:')
      album.artista = prompt('Informe o nome do artista:')
      album.lançamento = parseFloat(prompt('Ano de lançamento:'))
      album.melhorMsc = prompt('Melhor música na sua opinião:')

      const confirma = confirm(
        'Deseja colocar esse álbum entre os melhores?' +
          '\nÁlbum: ' +
          album.nome +
          '\nArtista: ' +
          album.artista +
          '\nLançamento: ' +
          album.lançamento +
          '\nMelhor música: ' +
          album.melhorMsc
      )

      if (confirma) {
        albums.push(album)
      }
      break
    case '2':
      for (let i = 0; i < albums.length; i++) {
        alert(
          'Álbum nº: ' +
            (i + 1) +
            '\nNome: ' +
            albums[i].nome +
            '\nArtista: ' +
            albums[i].artista +
            '\nLançamento: ' +
            albums[i].lançamento +
            '\nMelhor música: ' +
            albums[i].melhorMsc
        )
      }
      break
    case '3':
      alert('Encerrando o programa...')
      break
    default:
      alert('Opção inválida')
  }
} while ((opcao = '3'))
