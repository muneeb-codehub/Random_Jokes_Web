document.getElementById("getJoke").addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://v2.jokeapi.dev/joke/Any?type=single", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            document.getElementById("joke").innerText = response.joke;
        }
    };

    xhr.send();
});
