// selected checkbox data
var selected = [],
    totalCheckboxes = $('.cbx-group').length;

// select all
$('#cbx-select-all').on('click', function() {
  $('.checkbox').prop('checked', $(this).prop('checked'));
  selected = getSelectedCheckbox();
  showSelected();
})

// select group
$('.cbx-select-group').on('click', function() {
  var selectedGroup = $(this).val();
  $('.cbx-group-'+selectedGroup).prop('checked', $(this).prop('checked'));
  selected = getSelectedCheckbox();
  showSelected();
  checkAllState();
})

// select item
$('[id^=cbx-group-]').on('click', function() {
  $(this).prop('checked', $(this).prop('checked'));
  selected = getSelectedCheckbox();
  showSelected();
  checkAllState();
  
  // update group selector check state
  var group = $(this).data('group')
      totalGroupCheckbox = $('.cbx-group-'+group).length,
      totalGroupSelected = $('.cbx-group-'+group+':checked').length;
  if (totalGroupSelected == totalGroupCheckbox) {
    $('#cbx-select-group-'+group).prop('checked', true)
  } else {
    $('#cbx-select-group-'+group).prop('checked', false)
  }
})

// update select-all check state
function checkAllState() {
  console.log('check all state')
  if ($('.cbx-group:checked').length == totalCheckboxes) {
    $('#cbx-select-all').prop('checked', true)
  } else {
    $('#cbx-select-all').prop('checked', false)
  }
}

// get all selected checkboxes data
function getSelectedCheckbox() {
  var s = []
  $('.cbx-group:checked').each(function() {
    s.push($(this).data('id'));
  })
  return s;
}

function showSelected() {
  $('.output').text('')
  $(selected).each(function(i, v) {
    $('.output').append(v + ', ')
  })
}