const sendBtn = document.getElementById("sendBtn");
const message = document.getElementById("message");
const displayMessage = document.getElementById("displayMessage");

sendBtn.addEventListener("click", () => {
	let content = message.value;
	if (content === "") {
		alert("Please Enter a Message!");
	} else {
		displayMessage.innerHTML = content;
		message.value = "";
	}
});
