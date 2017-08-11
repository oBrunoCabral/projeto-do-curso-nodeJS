module.exports = function (app){
	var amigo = app.controllers.amigos;
	app.route('/amigos').get(amigo.index);
}