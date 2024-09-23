document.querySelectorAll(".lista-menu__link").forEach(a => a.setAttribute("target", "_blank"))
document.querySelectorAll(".button").forEach(a => a.setAttribute("target", "_blank"))

fetch('http://192.168.1.91:8080/ords/cda/cda-links/links')
  .then(res => res.json())
  .then((json) => {
    const ul = document.getElementById('listApplications');
    json.items.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${item.url}">
          <span class="item-name">${item.nome}</span>
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

                input = document.getElementById('filter')
                ul = document.getElementById('listApplications')

                const texto = document.querySelector('description')

                input.addEventListener('focus', function() {
                  if (ul.children.length > 0) {
                    ul.style.display = 'block';
                  }
                });

                input.addEventListener('blur', function(event) {
                  setTimeout(() => {
                    ul.style.display = 'none';
                  }, 250);
                });

                filter = input.value.toUpperCase();

                li = ul.getElementsByTagName('li');

                for(i = 0; i < li.length; i++){
    
                    a = li[i].getElementsByTagName('a')[0]

                    txtValue = a.textContent || a.innerText;

                    if(txtValue.toUpperCase().indexOf(filter) > -1){

                        li[i].style.display = '';

                        count++

                        span = li[i].querySelector('.item-name');
  
                        if(span){
                            span.innerHTML = txtValue.replace(new RegExp(filter, 'gi'),(match)=>{
                                return "" + match + ""
                            })
                        }
                    } else {

                        li[i].style.display = 'none'
                    }
                }


                  if (filter === '') {
                    ul.style.display = 'none';
                    return;
                  }

                if (count === 0){
                    ul.style.display = 'none'
                } else{
                    ul.style.display = 'block'
                }
            }