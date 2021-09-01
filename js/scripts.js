var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loading").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

/* --- Silk That Amethyst --- */

function showSilkAmethyst() 
{
    document.getElementById("silkthatamethyst").style.display = "block";
}

function hideAmethyst() {
  document.getElementById("hideAmethyst").style.textDecoration = "underline";
  document.getElementById("showAmethyst").style.textDecoration = "none";
  hideSilkAmethyst();
}

function showAmethyst() {
  document.getElementById("showAmethyst").style.textDecoration = "underline";
  document.getElementById("hideAmethyst").style.textDecoration = "none";
  showSilkAmethyst();
}

function hideSilkAmethyst() {
  document.getElementById("silkthatamethyst").style.display = "none";
}

/* --- Storage Recursion --- */

function showStorageRecursion() 
{
    document.getElementById("storagerecursion").style.display = "block";
}

function hideStorage() {
  document.getElementById("hideStorage").style.textDecoration = "underline";
  document.getElementById("showStorage").style.textDecoration = "none";
  hideStorageRecursion();
}

function showStorage() {
  document.getElementById("showStorage").style.textDecoration = "underline";
  document.getElementById("hideStorage").style.textDecoration = "none";
  showStorageRecursion();
}

function hideStorageRecursion() 
{
  document.getElementById("storagerecursion").style.display = "none";
}

/* --- NoMoreScore --- */

function showNoMoreScore() 
{
    document.getElementById("rmscore").style.display = "block";
}

function hideScore() {
  document.getElementById("hideScore").style.textDecoration = "underline";
  document.getElementById("showScore").style.textDecoration = "none";
  hideNoMoreScore();
}

function showScore() {
  document.getElementById("showScore").style.textDecoration = "underline";
  document.getElementById("hideScore").style.textDecoration = "none";
  showNoMoreScore();
}

function hideNoMoreScore() 
{
  document.getElementById("rmscore").style.display = "none";
}

