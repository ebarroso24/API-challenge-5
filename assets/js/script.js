
$(function () {
     var currentDayEl = $('#currentDay');

//   Used daysjs to format the current date.
  function displayCurrentDay() {
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    // Will input the text for the current date on the app.
    currentDayEl.text(currentDate);
  }

  // Function to apply the appropriate color coding to each time block
  function colorCoding() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
      var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
// Loop used to determine past, present, and future hours.
      if (timeBlockHour < currentHour) {
        $(this).addClass('past').removeClass('present future');
      } else if (timeBlockHour === currentHour) {
        $(this).addClass('present').removeClass('past future');
      } else {
        $(this).addClass('future').removeClass('past present');
      }
    });
  }

  // Function to load saved events from local storage. Used ChatGPT to assist with this function.
  function loadSavedEvents() {
    $('.time-block').each(function () {
      var timeBlockId = $(this).attr('id');
      var savedEvent = localStorage.getItem(timeBlockId);

      if (savedEvent) {
        $(this).find('.description').val(savedEvent);
      }
    });
  }

  // Function to save an event in local storage. Used ChatGPT to assist with this function.
  function saveEvent() {
    var timeBlockId = $(this).closest('.time-block').attr('id');
    var eventDescription = $(this).siblings('.description').val();

    localStorage.setItem(timeBlockId, eventDescription);
  }

  // Added the click event listener to the save button. Used ChatGPT to assist with this.
  $('.saveBtn').on('click', saveEvent);

  // Display the current day
  displayCurrentDay();

  // Apply color coding to each time block
  colorCoding();

  // Load saved events from local storage
  loadSavedEvents();
   
  });