const platformsIcons = {
    pc: "<img data-id='1' src='src/images/icons/windows.svg' alt='' class='platform-icon'>",
    playstation: "<img data-id='2' src='src/images/icons/ps4.svg' alt='' class='platform-icon'>",
    xbox: "<img data-id='3' src='src/images/icons/xbox.svg' alt='' class='platform-icon'>",
    ios: "<img data-id='4' src='src/images/icons/mobile.svg' alt='' class='platform-icon'>",
    android: "<img data-id='8' src='src/images/icons/androi.svg' alt='' class='platform-icon'>",
    mac: "<img data-id='5' src='src/images/icons/apple.svg' alt='' class='platform-icon'>",
    linux: "<img data-id='6' src='src/images/icons/linux.svg' alt='' class='platform-icon'>",
    nintendo: "<img data-id='7' src='src/images/icons/switch.svg' alt='' class='platform-icon'>",
    atari: "<img data-id='9' src='src/images/icons/ghost-solid.svg' alt='' class='platform-icon'>",
    "commodore-amiga": "<img data-id='10' src='src/images/icons/ghost-solid.svg' alt='' class='platform-icon'>",
    sega: "<img data-id='11' src='src/images/icons/ghost-solid.svg' alt='' class='platform-icon'>",
    "3do": "<img data-id='12' src='src/images/icons/ghost-solid.svg' alt='' class='platform-icon'>",
    "neo-geo": "<img data-id='13' src='src/images/icons/ghost-solid.svg' alt='' class='platform-icon'>",
    web: "<img data-id='14' src='src/images/icons/ie.svg' alt='' class='platform-icon'><img data-id='14' src='src/images/icons/firefox.svg' alt='' class='platform-icon'><img data-id='14' src='src/images/icons/chrome.svg' alt='' class='platform-icon'>",
};

const storeIcons = {
    steam: "<img data-id='1' src='src/images/icons/steam.svg' alt='' class='platform-icon'>",
    "playstation-store": "<img data-id='2' src='src/images/icons/ps4.svg' alt='' class='platform-icon'>",
    "xbox-store": "<img data-id='3' src='src/images/icons/xbox.svg' alt='' class='platform-icon'>",
    "apple-appstore": "<img data-id='4' src='src/images/icons/applestore.svg' alt='' class='platform-icon'>",
    gog: "<img data-id='5' src='src/images/icons/gog.svg' alt='' class='platform-icon'>",
    nintendo: "<img data-id='6' src='src/images/icons/switch.svg' alt='' class='platform-icon'>",
    xbox360: "<img data-id='7' src='src/images/icons/xbox.svg' alt='' class='platform-icon'>",
    "google-play": "<img data-id='8' src='src/images/icons/googleplay.svg' alt='' class='platform-icon'>",
    itch: "<img data-id='9' src='src/images/icons/itch.svg' alt='' class='platform-icon'>",
    "epic-games": "<img data-id='10' src='src/images/icons/epic.svg' alt='' class='platform-icon'>",
};

const iconsShow = (platforms) => {
    let icons = "";
    platforms.forEach(platform => {
        let icon = platform.platform.slug;
        icons += platformsIcons[`${icon}`] + " "
    });
    return icons
}

const storeShow = (game) => {
    let iconsStore = ""
    game.stores.forEach(store => {
        let iconStore = store.store.slug;
        iconsStore += `
        <div>
            <a class="store-name" href="${store.url}">${store.store.name}</a>
            ${storeIcons[iconStore]}
        </div>
        `
    })
    return iconsStore;
}

export { iconsShow, storeShow, storeIcons }