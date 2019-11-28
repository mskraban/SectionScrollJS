// var lastScrollTop = 0;
// //Začetna vrednost je 0
// var before = 0;
// var after = 0;
// $(window).scroll(function (event) {
//   before++;
//   var st = $(this).scrollTop();
//   if (st > lastScrollTop) {
//
// //Počakaj in zakleni scroll za 800 milisekund
//     $('body').addClass('stop-scrolling');
//     setTimeout(function () {
//       $('body.stop-scrolling').removeClass('stop-scrolling');
//     }, 800);
// after++;
//     console.log("Before" + before);
//     console.log("After" + after);
//     //$(window).scrollTop($("#sect-" + povecanje + "").offset().top);
//
//   } else {
//
// //Počakaj in zakleni scroll za 800 milisekund
//     $('body').addClass('stop-scrolling');
//     setTimeout(function () {
//       $('body.stop-scrolling').removeClass('stop-scrolling');
//     }, 800);
//
//
//     console.log("Before" + before);
//     //$(window).scrollTop($("#sect-" + count + "").offset().top);
//
//   }
//   lastScrollTop = st;
//
// });

// var lastScrollTop = 0;
// var timer;
// var povecanje = 1;
// var maxSections = 3;
//
// $(window).scroll(function(event) {
//   if(timer) {
//     window.clearTimeout(timer);
//   }
//   //Začetek
//   var st = $(this).scrollTop();
//   if (st > lastScrollTop) {
//
// //Počakaj in zakleni scroll za 800 milisekund
//     $('body').addClass('stop-scrolling');
//     setTimeout(function () {
//       $('body.stop-scrolling').removeClass('stop-scrolling');
//     }, 800);
//
//     event.preventDefault();
//
//   $('html, body').animate({
//     scrollTop: $( $("#sect-"+povecanje) ).offset().top
//   }, 800);
//
//     console.log("#sect-"+povecanje);
//
//   }
//   lastScrollTop = st;
//
//   //Konec
//   timer = window.setTimeout(function() {
//     if (povecanje >= 3) {
//       console.log("Do nothing")
//     }
//     else {
//       povecanje++;
//     }
//
//     // actual callback
//     console.log( "Firing!" );
//   }, 800);
//
// });

//Vertikalni scroll

var counter = 1;
//Definiras stevilo sekcij
var maxSections = 3;

console.log(counter);

//Todo za zapis klikov v zanko in poenostaviti namesto class je lahko tudi data-href
$( "a[href='#sect-1']" ).click(function() {
  $('html, body').animate({
    scrollTop: $("#sect-1").offset().top
  }, 800);
  counter = 1;
  console.log("New counter: "+counter);
});
$( "a[href='#sect-2']" ).click(function() {
  $('html, body').animate({
    scrollTop: $("#sect-2").offset().top
  }, 800);
  counter = 2;
  console.log("New counter: "+counter);
});
$( "a[href='#sect-3']" ).click(function() {
  $('html, body').animate({
    scrollTop: $("#sect-3").offset().top
  }, 800);
  counter = 3;
  console.log("New counter: "+counter);
});

$('html').on('wheel', function(event) {
  if (event.originalEvent.deltaY > 0) {
//scroll down
    counter++;

    //Počakaj in zakleni scroll za 800 milisekund
    $('body').addClass('stop-scrolling');
    setTimeout(function () {
      $('body.stop-scrolling').removeClass('stop-scrolling');
    }, 800);


    //Preverimo če je counter večji od vseh sekcij, potem izvedemo animacije
    if (!(counter > maxSections)) {
      $('html, body').animate({
        scrollTop: $( $("#sect-"+counter) ).offset().top
      }, 800);
    }

  } else {
//scroll up
    counter--;

    //Počakaj in zakleni scroll za 800 milisekund
    $('body').addClass('stop-scrolling');
    setTimeout(function () {
      $('body.stop-scrolling').removeClass('stop-scrolling');
    }, 800);

    //Preverimo če je counter manjši od prve sekcije, potem ne izvedemo animacije
    if (!(counter < 1)) {
      $('html, body').animate({
        scrollTop: $( $("#sect-"+counter) ).offset().top
      }, 800);
    }

  }

  if (counter <= 0) {
    counter = 1;
  }
  else if (counter >= 3) {
    counter = maxSections;
  }



  console.log(counter);
});


