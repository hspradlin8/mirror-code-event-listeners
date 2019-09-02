// Mirror, Mirror in the code 
// 1.Create an input field in your DOM. Give it an id of message.
// 2.Create two article elements with unique id values. 
//Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// 3.Give each article a different border color.
// 4.Write an event listener that listens for the keyup event on the input field.
// 5.The event handler function should update the textContent property of both sections.


const articleBuilder  = (item) => {
    return`
        <div>
            <artilce>${item.text}</article>
            <article>${item.text}</article>
        </div>
       `
}

const input = document.getElementById("message");
const articles = document.getElementById("art1");
const articleTwo = document.getElementById("art2");

input.addEventListener("keyup", () => {
    articles.innerHTML = event.target.value  
})
 
input.addEventListener("keyup", () => {
    articleTwo.innerHTML = event.target.value  
})
