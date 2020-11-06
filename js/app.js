import React, { Component } from "react";
import "./style.css";
"use strict";
(function () {
    const searchButton = document.querySelector("button.search-btn");

    searchButton.addEventListener("click", search);
})();

function search() {
    const inputSearch = document.querySelector("input.search-field");
    const recepeInput = inputSearch.value;
    const url = "http://www.recipepuppy.com/api/?q=" + recepeInput;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let arrSearchResult = JSON.parse(xhr.responseText);
                console.log(arrSearchResult['results']);
                let arrTitle = [];
                for(let i = 0; i<arrSearchResult['results'].length;i++){
                    for (let key in arrSearchResult['results'][i]) {
                    arrTitle[i] = arrSearchResult['results'][i]['title'];
                    }
                }
                console.log("Title:")
                console.log(arrTitle.length);
                for(let i = 0; i<arrTitle.length; i++){
                    console.log(arrTitle[i]);
                }
                let arrPicture = [];
                for(let i = 0; i<arrSearchResult['results'].length;i++){
                    for (let _key in arrSearchResult['results'][i]) {
                        arrPicture[i] = arrSearchResult['results'][i]['thumbnail'];
                    }
                }
                console.log("Picture:")
                console.log(arrPicture.length);
                for(let i = 0; i<arrPicture.length; i++){
                    console.log(arrPicture[i]);
                }
                let arrIng = [];
                for(let i = 0; i<arrSearchResult['results'].length;i++){
                    for (let _key in arrSearchResult['results'][i]) {
                        arrIng[i] = arrSearchResult['results'][i]['ingredients'];
                    }
                }
                console.log("Ingredients:")
                console.log(arrTitle.length);
                for(let i = 0; i<arrIng.length; i++){
                    console.log(arrIng[i]);
                };
                let table = document.createElement("recipesList");
                let tr = table.insertRow(-1);
                let col = ["Title", "Picture", "Ingredients"];
                for (let i = 0; i < 3; i++) {
                    let th = document.createElement("th");
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                };
                for (let i =0; i <arrSearchResult['results'].length; i++){
                    let tabRow = document.createElement("tr");
                    tabRow.innerHTML = "<tr> </tr><td>" +  arrTitle[i] + "</td> <td>"
                                                        + "<img src=" + arrPicture[i] + " > " + "</td> <td>"
                                                        + arrIng[i] + "</td> </tr>";
                    recipesList.appendChild(tabRow);
                };
                var result = document.querySelector('.result');
                result.innerHTML = "";
                result.appendChild(recipesList);
                if(arrSearchResult['results'].length == 0){
                    alert("NOT FOUND!");
                }
            }
        }
    };
    xmlhttp.open("GET", "http://www.recipepuppy.com/api/?q="+ recipes, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
}











//function myFunction() {
    //var input, filter, ul, li, a, i, txtValue;
    //input = document.getElementById("myInput");
    //filter = input.value.toUpperCase();
    //ul = document.getElementById("myUL");
    //li = ul.getElementsByTagName("li");
    //for (i = 0; i < li.length; i++) {
      //  a = li[i].getElementsByTagName("a")[0];
//        txtValue = a.textContent || a.innerText;
//        if (txtValue.toUpperCase().indexOf(filter) > -1) {
//            li[i].style.display = "";
//        } else {
//            li[i].style.display = "none";
//        }
//  }
//}