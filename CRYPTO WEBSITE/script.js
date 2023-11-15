var eth = document.getElementById("ethereum");
var btc = document.getElementById("bitcoin");
var doge = document.getElementById("dogecoin");




var settings = {
  "async": true,
  "scrossDomain": true,
  "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=gbp",
  "method": "GET",
  "headers": {}

}

$.ajax(settings).done(function (response){
    eth.innerHTML = response.ethereum.gbp;
    btc.innerHTML = response.bitcoin.gbp;
    doge.innerHTML = response.dogecoin.gbp;
});

