import { welcome } from './components';
import { iconsShow } from './utility';


const Home = (argument = "") => {
    const getDate = () => {
        let dateNow = new Date();
        let month = dateNow.getMonth() + 1;
        let day = dateNow.getDate();
        let fullCurrentDate = dateNow.getFullYear() + '-' +
            (('' + month).length < 2 ? '0' : '') + month + '-' +
            (('' + day).length < 2 ? '0' : '') + day;

        // get current year+1
        let fullNextYear = dateNow.getFullYear() + 1 + '-' +
            (('' + month).length < 2 ? '0' : '') + month + '-' +
            (('' + day).length < 2 ? '0' : '') + day;

        return `${fullCurrentDate},${fullNextYear}`
    }


    const preparePage = () => {
        let cleanedArgument = getDate();
        let articles = "";

        const fetchList = (url, argument) => {
            let finalURL = url;
            if (argument) {
                finalURL = url + "?dates=" + argument + "&page_size=27";
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

export { Home };