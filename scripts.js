var currentPage = "home";

function show(content) {
    document.getElementById(currentPage).style.display = 'none';
    document.getElementById(content).style.display = "block";

    currentPage = content;
    topFunction();
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function close(){
    window.close();
}
