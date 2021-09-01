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
    document.getElementById("silkthatamethyst").onclick = "hideAmethyst()";
}

/* --- Storage Recursion --- */

function showStorageRecursion() 
{
    document.getElementById("storagerecursion").style.display = "block";
    document.getElementById("storagerecursion").setAttribute("onclick","hideStorageRecursion()");
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

