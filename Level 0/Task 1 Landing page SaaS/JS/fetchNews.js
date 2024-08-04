let allNews = [];
let isViewAll = false;

fetch('https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.news);

        let newscardsContainer = document.getElementById('news-cards');
        newscardsContainer.innerHTML = '';

        data.news.forEach( function(news) {
            let card = document.createElement('div');
            card.className = 'card';

            let img = document.createElement('img');
            img.src = news.image;
            img.alt = news.title;

            let content = document.createElement('div');
            content.className = 'content';

            let h2 = document.createElement('h2');
            h2.textContent = news.title;

            let p = document.createElement('p');
            p.textContent = news.content;

            let a = document.createElement('a');
            a.href = news.link;
            a.innerHTML = 'Learn more <i class="fa-solid fa-arrow-right"></i>';

            content.appendChild(h2);
            content.appendChild(p);
            content.appendChild(a);
            card.appendChild(img);
            card.appendChild(content);

            newscardsContainer.appendChild(card);
        })
    })
    .catch( function (error) {
        console.log(error);
    });