/**
Hayden Price
CSC 337, Spring 2019
Final Project

Javascript for the final project, a webapp with information for my friend's business.
*/

(function () {
    'use strict';
    window.onload = function () {

        document.getElementById("send").onclick = addList;

        document.getElementById("showImage").onclick = function () {
            document.getElementById("secret").style.visibility = "visible";
            document.getElementById("theImage").style.visibility = "visible";
        };

    };



    /**
     *  // sends the values the user input into the page as post parameters
     *  // to a service and logs the response. 
     */
    function addList() {
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        const person = {
            name: name,
            email: email
        };
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        };

        let url = "http://final-project-hayden-p.herokuapp.com";
        fetch(url, fetchOptions)
            .then(checkStatus)
            .catch(function (error) {
                console.log(error);
            });
    }

    /**
     * sends error response message
     * @returns {string} error responses
     * @param {string} response param for error response
     */
    function checkStatus(response) {
        
        if (response.status >= 200 && response.status < 300) {
            return response.text();
        } else if (response.status == 404) {
            // sends back a different error when we have a 404 than when we have
            // a different error
            return Promise.reject(new Error("Sorry, we couldn't find that page"));
        } else {
            return Promise.reject(new Error(response.status + ": " + response.statusText));
        }
    }
})();