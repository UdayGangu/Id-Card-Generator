$(document).ready(function() {
    // Listen for form submission
    $('#idCardForm').submit(function(event) {
      event.preventDefault();
  
      // Get form data
      var formData = new FormData(this);
      var name = formData.get('name');
      var rollNo = formData.get('rollNo');
      var course = formData.get('course');
      var location = formData.get('location');
      var University = formData.get('University');
      var image = URL.createObjectURL(formData.get('image'));
  
      // Update card elements with form data
      $('#cardImage').attr('src', image);
      $('#cardName').text('Name: ' + name);
      $('#cardRollNo').text('Roll No: ' + rollNo);
      $('#cardCourse').text('Course: ' + course);
      $('#cardlocation').text('Location: ' + location);
      $('#cardUniversity').text('University: ' + University);
    });
  });
  