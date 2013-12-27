(function() {
	var menu = document.getElementById("id-menu").innerHTML;
	
	$('#'+menu).addClass('active');
})();

(function() {
	document.getElementById('go').onclick = function() {
		var original = document.getElementById('cbOriginal').value;
		var limpo = original.replace(/[. -]/g, '');
		
		document.getElementById('cbLivre').value = limpo;
                document.getElementById('cbLivre').select();
	};
})();
