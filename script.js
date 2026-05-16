function calculateRoute() {

    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let weather = document.getElementById("weather").value;

    // simple fake distance logic (you can improve later)
    let distance = Math.floor(Math.random() * 15) + 5;

    // weather effect
    if (weather === "Rainy") {
        distance += 2;
    } 
    else if (weather === "Storm") {
        distance += 5;
    }

    let cost = distance * 20;
    let time = distance / 40;

    document.getElementById("result").innerHTML =
        "📍 From: " + source + "<br>" +
        "📍 To: " + destination + "<br>" +
        "📏 Distance: " + distance + " KM<br>" +
        "⏱ Time: " + time.toFixed(2) + " Hours<br>" +
        "💰 Cost: Rs " + cost;
}