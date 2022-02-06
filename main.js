import { deploy } from "./contracts.js";

$(window).on('load', async () => {
    //Load map
    window.map = L.map('map').setView([51.505, -0.09], 3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //Setup events
    $('#openMint').click(() => $(".modal").show());
    $('#mint').click(async () => mint());
    $('#close').click(() => {
        $(".modal").hide()
        $("#error").text("");
    });

    //Get accounts from metamask
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if(accounts.length > 0) {
        window.account = accounts[0];
        $('.metamask').text(accounts[0]);
    }else {
        $('.metamask').click(async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            window.account = accounts[0];
            $('.metamask').text(accounts[0]);
        });
    }

    loadNFTs();
});

async function uploadFile(position) {
    let photo = document.getElementById("file").files[0];
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    let formData = new FormData();
    formData.append("file", photo);
    formData.append("lat", `${latitude}`);
    formData.append("lon", `${longitude}`);

    let res = await fetch('arweave.php', {method: "POST", body: formData});
    let arweave = await res.text();

    return arweave.split("\n");
}

async function saveSmartContract(address, arweave, lat, lon) {
    await fetch('polygon.php?' + new URLSearchParams({
        tx: address,
        arweave: arweave,
        lat: lat,
        lon: lon
    }), { method: "GET" });
}

function getPosition(){
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
}

function deployContract(account, url){
    return new Promise((resolve, reject) => 
        deploy(account, url, resolve, reject)
    );
}

function addMarker(lat, lon, image, content) {
    var nft = L.icon({
        iconUrl: image,
        className: 'marker-image',
        iconSize:     [48, 48],
        iconAnchor:   [24, 24],
        popupAnchor:  [0, -24]
    });

    var marker = L.marker([lat, lon], {icon: nft}).addTo(map);
    return marker.bindPopup(content)
}

function generateMarkerContent(contract, arweave) {
    return `Contract: <b>${contract}</b></br>Image: <a href="https://arweave.net/${arweave}" target="_blank" rel="noopener noreferrer">${arweave}</a>`
}

async function loadNFTs() {
    let res = await fetch('polygon.php', { method: "GET" });
    let nfts = await res.json();

    nfts.forEach(it => {
        let parts = it.split("|");

        let contract = parts[0];
        let arweave = parts[1];
        let lat = parts[2];
        let lon = parts[3];

        let content = generateMarkerContent(contract, arweave);
        let image = `https://arweave.net/${arweave}`
        addMarker(parseFloat(lat), parseFloat(lon), image, content);
    });
}

async function mint() {

    //Preliminary checks
    if (window.accounts !== undefined && window.accounts.lenght > 0 && account !== undefined){
        $("#message").addClass(".text-error").text("Connect metamask first");
        return;
    }

    $(".progress-bar").show();
    $("#message").removeClass(".text-error").text("");
    $("#mint").addClass("is-disabled");

    //Step 0 - Get the position from the browser
    var position;
    try {
        position = await getPosition();
    }catch(e) {
        $("#message").addClass(".text-error").text("Unable to retrieve your location");
        $(".progress-bar").hide();
        $("#mint").removeClass("is-disabled");
        return;
    }

    //Step 1 - Upload file to Arweave
    let arweaveResult = await uploadFile(position);
    let arweave = arweaveResult[1]; //NFT Metadata
    let image = arweaveResult[0]; //Uploaded image


    //Step 2 - Deploy contract
    var contract;
    try {
        $("#message").text("Deploying your NFT....");
        contract = await deployContract(account, "https://arweave.net/" + arweave);
    }catch(e) {
        if(e) {
            $("#message").addClass(".text-error").text("Error in deploying smart contract");
            $(".progress-bar").hide();
            $("#mint").removeClass("is-disabled");
            return;
        }
    }

    //Step 3 - Save contract hash
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    await saveSmartContract(contract, image, latitude, longitude);

    //Step 4 - Add point to map
    let content = generateMarkerContent(contract, image);
    let imageUrl = "https://arweave.net/" + image

    addMarker(latitude, longitude, imageUrl, content).openPopup();
    $(".progress-bar").hide();
    $("#mint").removeClass("is-disabled");
    $("#message").text("Done!");
}
