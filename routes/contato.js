module.exports = function(app){
	var contato = app.controllers.contatos;
	app.route('/contatos').get(contato.index);
}