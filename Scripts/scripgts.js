//******* Oulets *******

//Connect
function validaSession() {
    let params = { name: "validaSession", parameters: null, callbackName: null }
    window.webkit.messageHandlers.Connect.postMessage(JSON.stringify(params))
}

function trackEvent() {
    let obj = { code: "trackInfoPrueba" }
    let params = { name: "trackEvent", parameters: obj, callbackName: null }
    window.webkit.messageHandlers.Connect.postMessage(JSON.stringify(params))
}

function CerrarSessionConnect() {
    let params = { name: "CerrarSessionConnect", parameters: null, callbackName: null }
    window.webkit.messageHandlers.Connect.postMessage(JSON.stringify(params))
}

function setTitle() {
    let obj = { title: "Título Prueba" }
    let params = { name: "setTitle", parameters: obj, callbackName: null }
    window.webkit.messageHandlers.Connect.postMessage(JSON.stringify(params))
}

function goToRoot() {
    let params = { name: "goBack", parameters: null, callbackName: null }
    window.webkit.messageHandlers.Connect.postMessage(JSON.stringify(params))
}

function goBack() {
    let params = { name: "goBack", parameters: null, callbackName: null }
    window.webkit.messageHandlers.Connect.postMessage(JSON.stringify(params))
}

function hideBackButton() {
    let params = { name: "hideBackButton", parameters: null, callbackName: null }
    window.webkit.messageHandlers.Connect.postMessage(JSON.stringify(params))
}

function showBackButton() {
    let params = { name: "showBackButton", parameters: null, callbackName: null }
    window.webkit.messageHandlers.Connect.postMessage(JSON.stringify(params))
}

function getBarcode() {
    let params = { name: "getBarcode", parameters: null, callbackName: "getBarcodeResponse" }
    window.webkit.messageHandlers.Connect.postMessage(JSON.stringify(params))
}

function getSSOToken() {
    let params = { name: "getSSOToken", parameters: null, callbackName: null }
    window.webkit.messageHandlers.Connect.postMessage(JSON.stringify(params))
}



function superToken() {
    let params = { name: "superToken", parameters: null, callbackName: "supetokenResponse" }
    window.webkit.messageHandlers.Connect.postMessage(JSON.stringify(params))
}

//TokenManager

function getToken() {
    let params = { name: "getToken", parameters: null, callbackName: null }
    window.webkit.messageHandlers.TokenManager.postMessage(JSON.stringify(params))
}

//Firebase

function sendNfcPay() {
    let obj = { nc: "Prueba NC" }
    let params = { name: "sendNfcPay", parameters: obj, callbackName: null }
    window.webkit.messageHandlers.FireBase.postMessage(JSON.stringify(params))
}

function isNfcActive() {
    let obj = { nc: "Prueba NC Active" }
    let params = { name: "isNfcActive", parameters: obj, callbackName: null }
    window.webkit.messageHandlers.FireBase.postMessage(JSON.stringify(params))
}

function scanQrCode() {
    let obj = { nc: "Prueba NC Code" }
    let params = { name: "scanQrCode", parameters: obj, callbackName: null }
    window.webkit.messageHandlers.FireBase.postMessage(JSON.stringify(params))
}

function initializeFirebase() {
    let obj = { gId: "Prueba gdi", aId: "prueba aid" }
    let params = { name: "initializeFirebase", parameters: obj, callbackName: null }
    window.webkit.messageHandlers.FireBase.postMessage(JSON.stringify(params))
}


function navigateToOtherHTML() {
    window.location.href = "IndexSecondView.html";
}



// ******Handlers Native Code******

function supetokenResponse(code) {

    console.log(code);
    var obj = JSON.parse(code);

    if (obj.status == "true") {
        let label = document.getElementById("tokenLabel")
        label.innerHTML = (obj.params.token)
        console.log('token -> ' + bj.params.token);
    } else {
        let label = document.getElementById("tokenLabel")
        label.innerHTML = (obj.params.token)
        console.log('token -> ' + bj.params.message);
    }


}

function cameraResponse(code) {
    var obj = JSON.parse(code);
    let label = document.getElementById("tokenLabel")
    label.innerHTML = ("camara = " + obj.params.code)
    console.log('camaraode -> ' + code);
}

// function userDidTapBackButton() {
//     window.history.back();
//     console.log("userDidTapBackButton");
// }