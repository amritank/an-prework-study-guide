const topic = "Foo";

if (topic === "HTML") {
    console.log("Let us study HTML!");
} else if (topic === "CSS") {
    console.log("Let us study CSS!");
} else if (topic === "GIT") {
    console.log("Let us study GIT!");
} else if (topic === "Javascript") {
    console.log("Let us study JS!");
} else {
    console.log("Please try again!");
}

const topics = ["html", "git", "javascript", "css"];
for (let i = 0; i < topics.length; i++) {
    console.log(topics[i].toUpperCase());
}