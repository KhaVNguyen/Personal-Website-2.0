var $cell = $('.card');
var $currentlyExpanded;

// On click on card, open / close the card
$cell.find('.js-expander').click(function() {

  var $thisCell = $(this).closest('.card');

  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed');
    $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    $currentlyExpanded = $(this).closest('.card');
  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
  }
});

// Close card when click on cross
$cell.find('.js-collapser').click(function() {
  var $thisCell = $(this).closest('.card');
  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
});

// Close card when clicking outside of card
$(document).click(function(event) { 
    if(!$(event.target).closest('.card').length) {
       $currentlyExpanded.removeClass('is-expanded').addClass('is-collapsed');
    }        
});