function showAlert(alertId) {
   const bootstrapAlert = document.querySelector("#" + alertId);
   const collapse = new bootstrap.Collapse(bootstrapAlert);
   collapse.show();
}

const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
modalYesBtn.addEventListener("click", function () {
   const sendBtn = document.querySelector("#send-message-btn");
   sendBtn.style.display = "none";
   showAlert("conf-alert");
});


const sendMsgBtn = document.querySelector("#send-message-btn");
sendMsgBtn.addEventListener("click", function () {
   const sendBtn = document.querySelector("#send-message-btn");
   sendBtn.style.display = "none";
   showAlert("conf-alert");
});
