import { fetchSelect } from './utility'

const welcome = () => {
    return `
    <h1 class="saywelcome">Welcome,</h1>
    <p class="description marg-b50">The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industy's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industy. For three exiting days, leading-edge compagnies, groundbrealing new technologies, and never-before seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>
    <div>
      <select name="selectplatform">
        <option value="any">Platform : any</option>
        <option value="pc">PC</option>
        <option value="playstation">Playstation</option>
        <option value="xbox">Xbox</option>
        <option value="ios">Ios</option>
        <option value="android">Android</option>
        <option value="mac">Mac</option>
        <option value="linux">Linux</option>
        <option value="nintendo">Nintendo</option>
        <option value="atari">Atari</option>
        <option value="sega">Sega</option>
        <option value="web">Web</option>
      </select>
    </div>
  `
}

export { welcome }