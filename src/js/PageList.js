import { welcome } from './components';

const PageList = (argument) => {
    const preparePage = () => {
        let cleanedArgument = argument.replace(/\s+/g, "-");
        let articles = "";

        const fetchList = (url, argument) => {
            let finalURL = url;
            if (argument) {
                finalURL = url + "?search=" + argument;
            }

            fetch(`${finalURL}`)
                .then((response) => response.json())
                .then((response) => {
                    response.results.forEach((article) => {
                        articles += `
                    <div class="gridcontainer">
                      <div class="cardGame">
                        <a href = "#pagedetail/${article.id}"><h1>${article.name}</h1></a>
                        <h2>${article.released}</h2>
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
        </section>
      `;

        preparePage();
    };

    render();
};

export { PageList };