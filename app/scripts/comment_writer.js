function writeComment() {
	var sec = document.createElement('section');
	sec.setAttribute('class', 'travel_review_comment row');
	sec.innerHTML='<img class=\'comment_photo span2 profile_photo_small\' src=\'images/BobPhoto.jpg\' alt=\'\'>'+
				'<dl class=\'comment_element span8\'>'+
				'<dt>Bob: </dt>'+
				'<dd>'+document.getElementById('textarea_comment').value+'</dd>';
	document.getElementById('comment_list').appendChild(sec);
	document.getElementById('textarea_comment').value='';
}