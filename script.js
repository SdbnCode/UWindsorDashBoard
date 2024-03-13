document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-button").addEventListener("click", performSearch);
    document.getElementById("search-input").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

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
});
