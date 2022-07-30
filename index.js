const qrcode = require('qrcode');
// install this lib and pass in text tto generate qr code , can be a link

// 
qrcode.toDataURL('Hello world' , function( err , url) {
    if(err) throw new Error(err);
    console.log(url);
});

// for react native
// const base64Icon = "url from qrcode";
// <Image style={{width: 100, height: 50, resizeMode: Image.resizeMode.contain, borderWidth: 1, borderColor: 'red'}} source={{uri: base64Icon}}/>