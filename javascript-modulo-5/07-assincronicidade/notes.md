## Código Síncrono:
- O instrutor começa explicando o que é código síncrono. Em JavaScript, código síncrono é o comportamento padrão, onde as instruções são executadas linha por linha, de forma sequencial. Isso significa que, se uma função for chamada, o programa espera que ela termine antes de continuar para a próxima linha. O exemplo dado mostra uma função sendo declarada e chamada em sequência, com logs sendo exibidos de acordo com a ordem das instruções, o que caracteriza a execução linear.

## Código Assíncrono:
- Já o código assíncrono não segue essa execução linha por linha. Ele permite que certas partes do código sejam "puladas" temporariamente para que a aplicação não trave enquanto espera uma tarefa demorada (como um cálculo complexo ou uma requisição de rede) ser concluída. O instrutor usa o exemplo do setTimeout para demonstrar isso. Mesmo que o setTimeout seja chamado, o JavaScript não espera ele terminar para seguir para a próxima linha, ele continua a execução do código enquanto "aguarda" o setTimeout completar a tarefa de forma assíncrona.

## Exemplo Prático:
- No exemplo prático, o código mostra a execução de logs com e sem setTimeout. O resultado é que, mesmo com a função setTimeout inserida no meio da execução, o programa não trava, e o log que deveria aparecer depois da execução do setTimeout pode ser mostrado antes, por causa do comportamento assíncrono do JavaScript.

### Conclusão:
- A principal diferença destacada na aula é que o código assíncrono permite que o JavaScript execute outras tarefas enquanto aguarda o término de funções que podem demorar. Isso evita o travamento da aplicação, tornando-a mais eficiente, especialmente em tarefas que envolvem espera, como requisições de API ou leitura de arquivos.

- Essa base é essencial para entender conceitos mais avançados que serão abordados posteriormente, como Promises e async/await.