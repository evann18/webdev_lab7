function init(){
//add your javascrip between these two lines of code
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  button.addEventListener("click", function(){
    const textInput = input.value;
    alert("Evan Nickolaou: " + textInput);
    output.textContent= textInput;
  });
}
window.addEventListener('load', init);
