import { welcome } from './components';
import { iconsShow, hiddenShow, showMore, getDate, showDetails, hiddenDetail, fetchSelect } from './utility';

const PageList = (argument) => {
    const preparePage = () => {
        let cleanedArgument = argument.replace(/\s+/g, "-");
        let articles = "";

        const fetchList = (url, argument) => {
            let finalURL = url;
            if (argument) {
                finalURL = url + "?search=" + argument + "&page_size=27";
            } else {
                finalURL = url + "?dates=" + getDate() + "&page_size=27";
            }

            fetch(`${finalURL}`)
                .then((response) => response.json())
                .then((response) => {
                    response.results.forEach((article) => {
                        let tags = article.tags
                            .filter(tag => tag.language === "eng")
                            .map(tag => tag.name).join(", ");

                        articles += `
                      <div class="cardGame">
                          <img class="img-card" src="${article.background_image}" alt="${article.name}">
                          <div id="detail-cardGame"class="hidden detail-card">
                            <h3>${article.released}</h3>
                            <h3>Studio</h3>
                            <h3>${article.rating}/5 - ${article.ratings_count} votes</h3>
                            <p>${tags}</p>
                          </div>
                          <a href = "#pagedetail/${article.id}">${article.name}</a>
                          <div id="icons">
                           ${iconsShow(article.parent_platforms)}
                          </div>
                      </div>
                  `;
                    });
                    document.querySelector(".page-list .articles").innerHTML = articles;
                    hiddenShow()

                    // Card Hover
                    const cards = document.querySelectorAll(".img-card");

                    cards.forEach((img) => {
                        img.addEventListener("mouseover", showDetails)
                    });

                    document.querySelectorAll("#detail-cardGame").forEach((detail) => {
                        detail.addEventListener("mouseleave", hiddenDetail)
                    })

                });
        };

        fetchList("https://api.rawg.io/api/games", cleanedArgument);
        fetchSelect();
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
    showMore();
};

export { PageList };