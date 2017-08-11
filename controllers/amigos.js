module.exports = function(app){
	var AmigosController = {
		index: function(req,res){
			res.render('amigos/index');
		}
	}
	return AmigosController;
}