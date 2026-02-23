/*
  Prologue by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  var $window = $(window),
    $body = $('body');

  // Breakpoints.
  breakpoints({
    wide:      [ '961px',  '1880px' ],
    normal:    [ '961px',  '1620px' ],
    narrow:    [ '961px',  '1320px' ],
    narrower:  [ '737px',  '960px'  ],
    mobile:    [ null,     '736px'  ]
  });

  // Play initial animations on page load.
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // NOTE:
  // The original template used single-page scrolling (#hash links),
  // Scrolly (smooth scroll) and Scrollex (active section tracking).
  // Since we switched to separate pages (index.html, portfolio.html, etc.),
  // we intentionally do NOT run any of that code here.

  // Header (narrower + mobile).

    // Toggle.
    $(
      '<div id="headerToggle">' +
        '<a href="#header" class="toggle"></a>' +
      '</div>'
    )
      .appendTo($body);

    // Header.
    $('#header')
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'left',
        target: $body,
        visibleClass: 'header-visible'
      });

})(jQuery);