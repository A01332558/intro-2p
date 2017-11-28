const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// Post processing de la imagen de perfil
// Para reducir su tamaño a 200x200
// luego de que el usuario la sube

exports.postProcessImg =functions.database.ref('/users/{userId}/picURL').onWrite((event)=>{
	event.data.ref.parent.child('function').set('entre!');


	let url = event.data.val();

	// Descargar la imagen
	var request = require('request').defaults({encoding: null});
		// request.get(URL, CALLBACK)
		request.get(url, (err, response, imageBuffer)=>{
			event.data.ref.parent.child('step').set('readyToResize');

		
		// Resize de la imagen
		var sharp = require('sharp');
		sharp(imageBuffer).resize(200,200);

		// Volver a guardar la imagen
		
	
		// -- actualizar la url de la imagen
	});
})