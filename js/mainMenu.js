//---------------------------------------------------
function mMinit () {//start app mainMenu

  //document.body.style.overflow = "hidden";

  var width = document.documentElement.clientWidth;
  if (width < 1200) $('div#cardBlock').css({ "width":"60%","margin":"5% 20% 0 20%" });
  
  $( window ).resize(function() {
  	 resizeWidth = document.documentElement.clientWidth;

    if (resizeWidth > 1200) {
      $('div#cardBlock').css({ "width":"40%","margin":"5% 30% 0 30%" });
      console.log("> 1200");
      return;
    } else if (resizeWidth > 600 && resizeWidth < 1100) {
    	$('div#cardBlock').css({ "width":"70%","margin":"5% 15% 0 15%" });
    	console.log("< 1100");
    	return;
    } else if (resizeWidth < 600) {
    	console.log("< 600");
    	$('div#cardBlock').css({ "width":"90%","margin":"5% 5% 0 5%" });
    	return;
    }
  });

function cardClass (name, demage, imgSrc) {
  this.name = name;
  this.demage = demage;
  this.imgSrc = imgSrc;
};

var dragon_card0 = new cardClass ('img0', 10, "img/card0.png");
var dragon_card1 = new cardClass ('img1', 15, "img/card1.png");
var dragon_card2 = new cardClass ('img2', 12, "img/card2.png");
var dragon_card3 = new cardClass ('img2', 17, "img/card3.png");
var dragon_card4 = new cardClass ('img2', 17, "img/card4.png");

var cardArr = [dragon_card0, dragon_card1, dragon_card2, dragon_card3, dragon_card4];
var nextLCard = 1;
var nextRCard = 3;

//start interface
for(var i = 0, length = 3; i < length; i++){
	$("img#cardsOnTheTableImage" + i).attr({"src":cardArr[i].imgSrc});
};


//---------------------------------------------------

$(".about").click(function(){ //CARD MOVE ***

  var cardId = $(this).attr('id');
  var posLeft = parseInt($(this).css('left'), 10);
  
  var cardTable0Id = $('#cardBlock div.about')[cardId == 0 ? 2 : cardId == 1 ? 0 : 1];
  var cardTable1Id = $('#cardBlock div.about')[cardId];
  var cardTable2Id = $('#cardBlock div.about')[cardId == 0 ? 1 : cardId == 1 ? 2 : 0];

  //$(".about").last()[0].id
  if (posLeft == 500) {//if click Right card

    $("div#" + cardTable2Id.id).animate({
      left: '+=500'
    }, "1500", function() {
      //'animate ready'
    });

    $("div#" + cardTable0Id.id).animate({
     left: '-=250'
    }, "1500", function() {
      //'animate ready'
    });

    $("div#" + cardTable1Id.id).animate({
      left: '-=250'
    }, "1500", function() {
      //'animate ready'
    });
    layer (cardTable2Id, cardTable0Id, cardTable1Id);

    if (nextRCard < cardArr.length) {
      $("img#cardsOnTheTableImage" + cardTable2Id.id).attr({
      "src":cardArr[ nextRCard++ ].imgSrc});
      nextLCard++;
    } else {
    	nextRCard = 0;
        $("img#cardsOnTheTableImage" + cardTable2Id.id).attr({
        "src":cardArr[ nextRCard++ ].imgSrc});
    }
    console.log("nextRCard  " + nextRCard + " nextLCard  " + nextLCard + "  cardArr.length " + cardArr.length);

    anim();
  };//if click Right card ---^^^

//-----------------------
  if (posLeft == 0) {//if click Left card

    $("div#" + cardTable2Id.id).animate({
      left: '+=250'
    }, "1500", function() {
      //'animate ready'
    });

    $("div#" + cardTable0Id.id).animate({
      left: '-=500'
    }, "1500", function() {
      //'animate ready'
    });

    $("div#" + cardTable1Id.id).animate({
     left: '+=250'
    }, "1500", function() {
      //'animate ready'
    });
    layer (cardTable0Id, cardTable2Id, cardTable1Id)
    
    if (nextLCard <= cardArr.length) {
      $("img#cardsOnTheTableImage" + cardTable0Id.id).attr({
      "src":cardArr[ cardArr.length - nextLCard++ ].imgSrc});
      nextRCard--
    } else {
    	nextLCard = 1;
        $("img#cardsOnTheTableImage" + cardTable0Id.id).attr({
        "src":cardArr[ cardArr.length - nextLCard++ ].imgSrc});
    }
  console.log("nextRCard  " + nextRCard + " nextLCard  " + nextLCard + "  cardArr.length " + cardArr.length);
    anim();
  };//if click Left card ---^^^

  function anim () {

    $({scale: 1}).animate({
      scale: 1.25,
    }, {
      duration: 1000,
      step: function(now, fx) {
        $(".about#" + cardTable1Id.id).css('transform', 'scale(' + now + ')');
      }
    }, 'linear');

    $({scale: 1}).animate({
      scale: 0.75,
    }, {
      duration: 1000,
      step: function(now, fx) {
        $(".about#" + cardTable0Id.id).css('transform', 'scale(' + now + ')');
        $(".about#" + cardTable2Id.id).css('transform', 'scale(' + now + ')');
      }
    }, 'linear');
  }
  function layer (zIndex1, zIndex2, zIndex3) {
    $(".about#" + zIndex1.id).css('z-index', 1);
    $(".about#" + zIndex2.id).css('z-index', 2);
    $(".about#" + zIndex3.id).css('z-index', 3);
  }
});//CARD MOVE *** ^^^

};//mMinit ^^^
