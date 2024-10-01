document.querySelectorAll("a").forEach(a => a.setAttribute("target", "_blank"))
document.querySelectorAll("nav a").forEach(a => a.setAttribute("target", "_self"))


const checkbox = document.querySelector('.opções__botão');

document.addEventListener('click', function(event) {
    if (!checkbox.contains(event.target)) {
        checkbox.checked = false;
    }
});

fetch('http://192.168.1.91:8080/ords/cda/cda-links/links')
  .then(res => res.json())
  .then((json) => {
    const ulApplications = document.getElementById('listApplications');
    const ulIntranet = document.querySelector('.lista-menu')
    
    const linksIntranet = document.querySelectorAll('.lista-menu__link')

    json.items.forEach((item) => {
      
      if(item.categoria.includes('Internet')){
        const li = document.createElement('li');
      li.setAttribute("class", "lista-menu__item")
      li.innerHTML = `
        <a href="${item.url}">
          <span class="item-name">${item.nome}</span>
        </a>`
        ulIntranet.appendChild(li)
      }
      
    if(item.nome.includes('APEX')){
    
      const apex = document.getElementById('apex');
      
      const card = document.createElement('div');
      const cardIcon = document.createElement('div');
      const tittle = document.createElement('h3');
      const button = document.createElement('a');
      const description = document.createElement('span');
      const ul = document.createElement('ul');
      const li = document.createElement('li')
      ul.appendChild(li)


      card.setAttribute('class', 'card apex')
      cardIcon.setAttribute('class', 'icon')
      tittle.setAttribute('class', 'card-title apex')
      button.setAttribute('class', 'button apex')
      button.setAttribute('href', item.url)

      tittle.innerHTML = `${item.nome}`;
      description.innerHTML = `${item.descricao}`;
      li.innerHTML =  `${item.categoria}`;
      ul.innerHTML = `${item.categoria}`
      button.innerHTML = `<a class=button">Acessar</a>`

    card.appendChild(cardIcon)
    card.appendChild(tittle)
    card.appendChild(button)
    card.appendChild(description)
    card.appendChild(ul)

    apex.appendChild(card)

    } if(item.nome.includes('Grafana')){
      const grafana = document.getElementById('grafana');
      
      const card = document.createElement('div');
      const cardIcon = document.createElement('div');
      const tittle = document.createElement('h3');
      const button = document.createElement('a');
      const description = document.createElement('span');
      const ul = document.createElement('ul');
      const li = document.createElement('li')
      ul.appendChild(li)


      card.setAttribute('class', 'card oxar')
      cardIcon.setAttribute('class', 'icon oxar')
      tittle.setAttribute('class', 'card-title oxar')
      button.setAttribute('class', 'button oxar')

      tittle.innerHTML = `${item.nome}`;
      description.innerHTML = `${item.descricao}`;
      li.innerHTML =  `${item.categoria}`;
      ul.innerHTML = `${item.categoria}`
      button.innerHTML = `<a class=button">Acessar</a>`

    card.appendChild(cardIcon)
    card.appendChild(tittle)
    card.appendChild(button)
    card.appendChild(description)
    card.appendChild(li)

    grafana.appendChild(card)

    } if (item.nome.includes('OXAR')){
      const oxar = document.getElementById('oxar');
        
      const card = document.createElement('div');
      const cardIcon = document.createElement('div');
      const tittle = document.createElement('h3');
      const button = document.createElement('a');
      const description = document.createElement('span');
      const ul = document.createElement('ul');
      const li = document.createElement('li')
      ul.appendChild(li)


      card.setAttribute('class', 'card grafana')
      cardIcon.setAttribute('class', 'icon grafana')
      tittle.setAttribute('class', 'card-title grafana')
      button.setAttribute('class', 'button grafana')

      tittle.innerHTML = `${item.nome}`;
      description.innerHTML = `${item.descricao}`;
      li.innerHTML =  `${item.categoria}`;
      ul.innerHTML = `${item.categoria}`
      button.innerHTML = `<a class=button">Acessar</a>`

    card.appendChild(cardIcon)
    card.appendChild(tittle)
    card.appendChild(button)
    card.appendChild(description)
    card.appendChild(li)

    oxar.appendChild(card)

    } 

    

      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${item.url}">
          <span class="item-name">${item.nome}</span>
        </a>
      `;
      ulApplications.appendChild(li);
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