module.exports = function(app){

	var UsuarioController = {
		index: function(req,res){
			var Usuario = app.models.usuarios;
			Usuario.find( function(err,dados){
				if(err){
					//
				}
				else{
					res.render('usuarios/index', {lista: dados});
				}
			});
		},
		create: function(req,res){
			res.render('usuarios/create');
		}
	}
	return UsuarioController;
}