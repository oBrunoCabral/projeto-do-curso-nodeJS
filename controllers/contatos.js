module.exports = function(app){
	var ContatosController = {
		index: function(req,res){
			res.render('contatos/index'); //contatos = diretorio dentro de VIEWS --- index = nome do arquivo dentro de CONTATOS dentro de VIEWS

		}
	}
	return ContatosController;
}