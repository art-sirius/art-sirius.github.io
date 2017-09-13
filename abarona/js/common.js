window.onload = function() {
	var logo = document.getElementById('logoid');
	var h1 = document.getElementById('h1id');
	var h2 = document.getElementById('h2headerid');
// Прелоадер
	var preloader = document.getElementById('preloaderid');
	setTimeout(function() {
		if (preloader.className == 'preloader') {
			preloader.className = 'preloader done';
			logo.style.animationName = 'dash-logo';
			h1.style.animationName = 'headline-in';
			h2.style.animationName = 'headline-in';
		}
	}, 1000);
// Плавный переход
  $(".down").click(function (event) {
		event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
		var id  = $(this).attr('href'), //забираем идентификатор блока с атрибута href
				top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь
		$('body,html').animate({scrollTop: top}, 1000); //анимируем переход на расстояние - top за 1000 мс
	});
// Note
	var moreLink = document.querySelectorAll('.more');
	var allNotes = document.querySelectorAll('.note');
		
	for (var i = 0; i < moreLink.length; i++) {
		moreLink[i].onclick = showNote;
	}
// Обработчик события - щелчок по .more;
	function showNote(eventObj) {
		var moreLinkNumber    = eventObj.target;
		var moreLinkNumberId  = moreLinkNumber.id;
		var noteId            = moreLinkNumberId + '-note';
		var note              = document.getElementById(noteId);
		note.className        = 'note open';
		var closeBtn = document.querySelectorAll('#' + noteId + ' .close-btn');
		for (var i = 0; i < closeBtn.length; i++) {
			closeBtn[i].onclick = hideNote;
		}
	}
// Обработчик события - щелчок по .close-btn;
	function hideNote() {
		for (var i = 0; i < allNotes.length; i++) {
			if (allNotes[i].className == 'note open') {
				allNotes[i].className = 'note';
			}
		}
	}
// Slider
	$('#slider-reviews').slick({
		arrows: false,
		autoplaySpeed: 5000,
		infinite: true,
		autoplay: true,
		dots: true,
		fade: true
	});
	$('#slider-photos').slick({
		arrows: false,
		autoplaySpeed: 5000,
		infinite: true,
		autoplay: true
	});
// Yandex map
ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [53.90551407, 27.50274000],
            zoom: 16
        });
        myPlacemark = new ymaps.Placemark([53.90562833, 27.50269670], { hintContent: 'Адвокат Олег Ракита<br><strong>г. Минск, ул. Болеслава Берута, 3б - 34</strong>', balloonContent: 'С помощью доброго слова и адвоката Вы можете добиться гораздо большего, чем только одним добрым словом.<br><strong>О.И.Ракита</strong>' });
        myMap.geoObjects.add(myPlacemark);
    }
}