
// Define and initialize the counter variable
    var counter = 0;

    // Define and initialize the addButton variable
    var addButton = document.querySelector('#addNewStage');

    // Define and initialize the newFields variable
    var newFields = '<div class="stage" id="stage' + counter + '">...</div>';

    // Add the new fields to the form
    var form = document.querySelector('form');
    addButton.insertAdjacentHTML('beforebegin', newFields);

    // Rest of the code...

    // Call this function whenever a new field is added or the field changes
    function updateLabelForAttribute(counter) {
        // Rest of the code...
    }

    // Call the function
    updateLabelForAttribute(counter);

    // Rest of the code...

    // Re-assign the event listener
    function addToggleButtonListener(i) {
        // Rest of the code...
    }

    // Call the function with the correct argument
    for (let i = 0; i < counter; i++) {
        addToggleButtonListener(i);
    }

