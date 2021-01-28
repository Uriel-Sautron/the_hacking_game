import { welcome } from './components';
import { iconsShow } from './utility';

const PageList = (argument) => {
    const preparePage = () => {
        let cleanedArgument = argument.replace(/\s+/g, "-");
        let articles = "";

        const fetchList = (url, argument) => {
            let finalURL = url;
            if (argument) {
                finalURL = url + "?search=" + argument + "&page_size=27";
            }

            fetch(`${finalURL}`)
                .then((response) => response.json())
                .then((response) => {
                    response.results.forEach((article) => {

                        articles += `
                      <div class="cardGame">
                          <img class="img-card" src="${article.background_image}" alt="${article.name}">
                          <a href = "#pagedetail/${article.id}">${article.name}</a>
                          <div id="icons">
                           ${iconsShow(article.parent_platforms)}
                          </div>
                      </div>
                  `;
                    });
                    document.querySelector(".page-list .articles").innerHTML = articles;
                });
        };

        fetchList("https://api.rawg.io/api/games", cleanedArgument);
    };

    const welcomeShow = document.getElementById("welcome");
    const render = () => {
        welcomeShow.innerHTML = `${welcome()}`;
        pageContent.innerHTML = `
        <section class="page-list">
          <div class="articles">...loading</div>
          <div class="load-div">
            <div id ="loadmore" class="loadBtn">Show more</div>
          </div>
        </section>
      `;

        preparePage();
    };

    render();
};

export { PageList };