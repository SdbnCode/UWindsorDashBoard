document.addEventListener("DOMContentLoaded", function() {

    // Add event listeners to the search button and input field
    document.getElementById("add-new-field").addEventListener("click", addField);
    document.getElementById("search-button").addEventListener("click", performSearch);
    document.getElementById("search-input").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // Takes the user's filter input and compares it to the list of datasets
    function performSearch() {
        let input, search, ul, li, a, i;
        input = document.getElementById("search-input");
        search = input.value.toUpperCase();
        ul = document.getElementById("dataset-list");
        li = ul.getElementsByTagName("li");

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(search) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    // Adds a new field to the additional-information
    function addField() {
        // Create new elements
        var title = document.createElement("input");
        var description = document.createElement("input");

        // Set the type and id attributes
        title.type = "text";
        description.type = "text";

        // Set placeholder text
        title.placeholder = "Enter title";
        description.placeholder = "Enter description";

        // Append the elements to the additional-information div
        var additionalInformationDiv = document.querySelector(".additional-information");
        additionalInformationDiv.appendChild(title);
        additionalInformationDiv.appendChild(description);
        // Add line break for better separation
        additionalInformationDiv.appendChild(document.createElement("br"));
    }


});
