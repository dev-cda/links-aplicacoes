fetch('https://fakestoreapi.com/products?limit=5')
  .then(res => res.json())
  .then((json) => {
    const ul = document.getElementById('listApplications');
    json.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${item.url}">
          <span class="item-name">${item.title}</span>
        </a>
      `;
      ul.appendChild(li);
    });
  })
  .catch(err => console.error('Erro ao buscar dados:', err));


            function filtrar() {
                var input,
                filter,
                ul,
                li,
                a,
                i,
                span,
                txtValue,
                count = 0

                //pegar os elementos html
                input = document.getElementById('filter')
                ul = document.getElementById('listApplications')

                // Mostrar a lista quando o input for clicado ou focado
                input.addEventListener('focus', function() {
                  if (ul.children.length > 0) {
                    ul.style.display = 'block';
                  }
                });

                // Ocultar a lista quando o input perder o foco (se o clique for fora da lista)
                input.addEventListener('blur', function(event) {
                  setTimeout(() => {
                    ul.style.display = 'none';
                  }, 250); // Pequeno delay para permitir o clique nos itens da lista
                });


                //filtro
                filter = input.value.toUpperCase();

                //lista 
                li = ul.getElementsByTagName('li');

                //percorre todos os li
                for(i = 0; i < li.length; i++){
                    //pegar a tag a do elemento percorrido
                    a = li[i].getElementsByTagName('a')[0]
                    //pegar o texto dentro da tag a
                    txtValue = a.textContent || a.innerText;
                    //verificar se o usuário bate com o texto com a tag a
                    if(txtValue.toUpperCase().indexOf(filter) > -1){
                        //valor bateu
                        li[i].style.display = '';
                        //incrementar o contador
                        count++
                        //pegar a tag span do item
                        span = li[i].querySelector('.item-name');
                        //se existir
                        if(span){
                            span.innerHTML = txtValue.replace(new RegExp(filter, 'gi'),(match)=>{
                                return "" + match + ""
                            })
                        }
                    } else {
                        //não mostra o item da lista
                        li[i].style.display = 'none'
                    }
                }

                  // Se o input estiver vazio, ocultar a lista e parar a execução
                  if (filter === '') {
                    ul.style.display = 'none';
                    return;
                  }

                //verificando se tem item na lista
                if (count === 0){
                    ul.style.display = 'none'
                } else{
                    ul.style.display = 'block'
                }
            }


            // pegue o elemento da lista digitado
            // se o elemento da lista digita for igual ao do card leve o usuário até o card com o estilo de hover
