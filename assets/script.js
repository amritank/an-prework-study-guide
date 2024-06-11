const topics = ["html", "git", "javascript", "css"];
let randomTopic = topics[Math.floor(Math.random() * topics.length)];
randomTopic = randomTopic.toUpperCase();

function selectTopic() {
    if (randomTopic === "HTML") {
        console.log("Let us study HTML!");
    } else if (randomTopic === "CSS") {
        console.log("Let us study CSS!");
    } else if (randomTopic === "GIT") {
        console.log("Let us study GIT!");
    } else if (randomTopic === "Javascript") {
        console.log("Let us study JS!");
    } else {
        console.log("Please try again!");
    }
}

function listTopics() {

    for (let i = 0; i < topics.length; i++) {
        console.log(topics[i].toUpperCase());
    }
}

console.log("Here are the topics we learned through Preworkk!");
listTopics();

console.log("Which topic should we study first?");
selectTopic();
