let headers = {
'cookie': 'ggjoin-session-cookie-battlechess=8a39adf6-4623-4241-8d9f-abef6387d8a5; _ga=GA1.1.1133604209.1659614723; _ga_7RNMCFRZKG=GS1.1.1659636480.2.0.1659636480.0',
'accept': '*/*',
'ggjoin-app': 'battlechess',
'content-type': 'application/json'

}

let url = "https://adventure.chessarena.io/api/me/profile"

let payload = {"nickname":"","nickname_tag":"","is_guest":true,"client_data":{"ColorId":37,"SkinId":4,"ShowKeybindings":true,"ControlType":0,"PreselectLastPiece":false,"AlwaysShowNames":false,"ShowFrameRatePing":false,"LowFrameRate":false,"AutoCastItems":false,"CenteringWithKeybinding":0},"server_data":{}}

fetch(url, {
	method: "post",
	headers: headers,
	body: JSON.stringify(payload)
    }).then(res => res.json())
  .then(res => console.log(res));
