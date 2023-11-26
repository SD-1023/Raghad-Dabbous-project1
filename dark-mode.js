function darkMode(page){
    const body = document.body;
    body.classList.toggle("txt-color-dark-mode");
    body.classList.toggle("backgroung-color-default-dark");

    const headerBtn = document.getElementsByClassName("header-btn");
    for(let i=0; i<headerBtn.length ;i++){
        headerBtn[i].classList.toggle("header-btn-Dark");
        headerBtn[i].classList.toggle("dark-mood-Line");
    }

    const main = document.getElementById("main");
    main.classList.toggle("dark-mood-background-body");

    const footer = document.getElementById("footer");
    footer.classList.toggle("dark-mood-background-body");


//     var path = window.location.pathname;
// var page = path.split("/").pop();
// console.log( page );

    if(page == "home"){
        const searchDiv = document.getElementsByClassName("search-container");
        searchDiv[0].classList.toggle("backgroung-color-default-dark");
        searchDiv[0].classList.toggle("border-line");
    

        const searchInput = document.getElementsByClassName("search-input");
        searchInput[0].classList.toggle("backgroung-color-default-dark");
        searchInput[0].classList.toggle("border-line");
        searchInput[0].classList.toggle("search-input-text");

        const selectDiv = document.getElementsByClassName("select-container");
        for(let i=0; i<selectDiv.length ;i++){
            selectDiv[i].classList.toggle("select-container-Dark");
            // selectDiv[i].classList.toggle("dark-mood-background");
        }

        const filterBy = document.getElementsByClassName("filterBy");
        filterBy[0].classList.toggle("filterBy-dark");
        
        const selectsTag = document.getElementsByTagName("select");
        for(let i=0; i<selectDiv.length ;i++){
            selectsTag[i].classList.toggle("backgroung-color-default-dark");
            selectsTag[i].classList.toggle("txt-color-dark-mode");
        }

        // const selectSort =document.getElementById("sort");
        // selectSort.classList.toggle("sort")

        const items = document.getElementsByClassName("card");
        for(let i=0; i<items.length ; i++){
            items[i].classList.toggle("backgroung-color-default-dark")
            items[i].classList.toggle("txt-color-dark-mode");
        }

        // console.log(document.getElementsByClassName("favourite-section")[i].getAttribute("style"))

        const favouriteSection = document.getElementsByClassName("favourite-section");
        favouriteSection[0].classList.toggle("backgroung-color-default-dark");
        favouriteSection[0].classList.toggle("border-line");

        const favouritItem = document.getElementsByClassName("favourit-item");
        for(let i=0; i<favouritItem.length ; i++){
            favouritItem[i].classList.toggle("backgroung-color-default-dark")
            favouritItem[i].classList.toggle("border-line");
        }
    }
    else if(page == "details"){
        const td = document.getElementsByTagName("td");
        for(let i=0; i<td.length ;i++){
            td[i].classList.toggle("backgroung-color-default-dark");
            td[i].classList.toggle("txt-color-dark-mode");
            td[i].classList.toggle("td-border");
        }

        const th = document.getElementsByTagName("th");
        th[0].classList.toggle("backgroung-color-default-dark");
        th[0].classList.toggle("txt-color-dark-mode");
        th[0].classList.toggle("th-border");
    }


}