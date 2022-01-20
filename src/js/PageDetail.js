import { storeShow, storeIcons, iconsShow } from './utility'

const PageDetail = (argument) => {
    const preparePage = () => {
        let cleanedArgument = argument.replace(/\s+/g, "-");
        let gameDetail = "";

        const fetchGame = (url, argument) => {
          const apiKey = "?key=cb9cfdda08754058af9c2d08e3043aed";
            let finalURL = url + argument;

            const fetchScreenShots = (finalURL) => {
                fetch(`${finalURL}/screenshots${apiKey}`)
                    .then((response) => response.json())
                    .then((response) => {
                        let screenShots = "";
                        for (let i = 0; i < 4; i++) {
                            if (response.results[i]) {
                                screenShots += `<img src="${response.results[i].image}" alt="">`
                            }
                        }
                        document.getElementById("screen-shots").innerHTML = screenShots;
                    })
            };

            const fetchYouTube = (finalURL) => {
                fetch(`${finalURL}/youtube${apiKey}`)
                    .then((response) => response.json())
                    .then((response) => {
                        let youtube = ""
                        if (response.results[0]) {
                            youtube = `
                            <div class="first-yt">
                              <iframe width="100%" height="500" src="https://www.youtube.com/embed/${
                                response.results[0].external_id
                              }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              </div>
                              <div class="col-lg-6 text-center">
                              <h3 >${response.results[0].name}</h3>
                              <h4 class="rating">${response.results[0].channel_title} - ${response.results[0].created}</h4>
                              </div>
                      `
                        }
                        document.getElementById("youtube").innerHTML = youtube;

                        let youtubeMini = "";
                        for (let i = 1; i < 4; i++) {
                            if (response.results[i]) {
                                youtubeMini += `
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/${response.results[i].external_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              `
                            }
                        }
                        document.getElementById("youtube-mini").innerHTML = youtubeMini;
                    })
            }

            const fetchSimilarGames = (finalURL) => {
                fetch(`${finalURL}/suggested${apiKey}`)
                    .then((response) => response.json())
                    .then((response) => {
                        let similarGames = "";
                        for (let i = 0; i < 6; i++) {
                            similarGames += `
                              <div class="cardGame">
                                  <img class="img-card" src="${response.results[i].background_image}" alt="${response.results[i].name}">
                                  <a href = "#pagedetail/${response.results[i].id}">${response.results[i].name}</a>
                                <div id="icons">
                                  ${iconsShow(response.results[i].parent_platforms)}
                                </div>
                              </div>
                            `
                        }
                        document.getElementById("similar-games").innerHTML = similarGames;
                    })
            }

            fetch(`${finalURL}${apiKey}`)
                .then((response) => response.json())
                .then((response) => {
                    let platforms = response.platforms.map(plat => plat.platform.name).join(", ");
                    let developers = response.developers.map(dev => dev.name).join(", ");
                    let publishers = response.publishers.map(publi => publi.name).join(", ");
                    let genres = response.genres.map(genre => genre.name).join(", ");
                    let tags = response.tags
                        .filter(tag => tag.language === "eng")
                        .map(tag => tag.name).join(", ");

                    const trailer = () => {
                        let trailer = ""
                        if (response.clip) {
                            trailer = `
                        <video controls width ="100%">
                         <source src ="${response.clip.clip}" type="video/mp4">
                        </video>
                        `
                        }
                        return trailer
                    }

                    gameDetail = `
                  <div class="jumbo" style="background-image: url('${response.background_image}');">
                    <a class="btn-website" href="${response.website}">Check Website<i class="fas fa-caret-right fa-2x"></i></a>
                  </div>

                  <div class="title-rating">
                   <div class="title-detail">${response.name},</div>
                   <p class= "rating">${response.rating}/5 - ${response.ratings_count} votes</p>
                  </div>

                  <section class="marg-b50">
                    <p>${response.description}</p>
                    
                    <div class="grid-detail">
                      <p><b>Release</b><br>${response.released}</p>
                      <p><b>Developer</b><br>${developers}</p>
                      <p><b>Platforms</b><br>${platforms}</p>
                      <p><b>Publishers</b><br>${publishers}</p>
                      <p><b>Genre</b><br>${genres}</p>
                      <p></p>
                      <p><b>Tags</b><br>${tags}</p>
                    </div>
                  </section>

                  <section class="marg-b50">
                    <h2 class="title">BUY</h2>
                    ${storeShow(response)}
                  </section>

                  <section class="marg-b50">
                    <h2 class="title">TRAILER</h2>
                    ${trailer()}
                  </section>

                  <section class="marg-b50">
                    <h2 class="title">SCREENSHOTS</h2>
                    <div id="screen-shots" class="grid-screen"></div>
                  </section>

                  <section class="marg-b50">
                    <h2 class="title">YOUTUBE</h2>
                    <div id="youtube"></div>
                    <div id="youtube-mini"></div>
                  </section>

                  <section class="marg-b50">
                    <h2  class="title">SIMILAR GAMES</h2>
                    <div id="similar-games" class="articles"></div>
                  </section>
                  `
                    document.querySelector(".page-detail").innerHTML = gameDetail;

                    fetchScreenShots(finalURL);
                    fetchYouTube(finalURL);
                    fetchSimilarGames(finalURL);
                });
        };

        fetchGame("https://api.rawg.io/api/games", cleanedArgument);
    };

    const welcomeShow = document.getElementById("welcome");
    const render = () => {
        welcomeShow.innerHTML = ``;
        pageContent.innerHTML = `
      <section class="page-detail">
      </section>
    `;

        preparePage();
    };

    render();
};

export { PageDetail };