fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then((json) =>
            {
                const ul = document.getElementById('listApplications');
                json.forEach((item) => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                     <a href="${item.URL}">
                            <img width="45" src="./utils/img/oracle-apex-logo.png" alt="">
                            <span class="item-name">${item.title}</span>
                        </a>
                    `;
                    ul.appendChild(li);
                })
            })

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
                                return "<strong>" + match + "</strong>"
                            })
                        }
                    } else {
                        //não mostra o item da lista
                        li[i].style.display = 'none'
                    }
                }

                //verificando se tem item na lista
                if (count === 0){
                    ul.style.display = 'none'
                } else{
                    ul.style.display = 'block'
                }
            }