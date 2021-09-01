var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loading").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function showStorageRecursion() 
{
    document.getElementById("storagerecursion").style.display = "block";
}
function showNoMoreScore() 
{
    document.getElementById("rmscore").style.display = "block";
}
function showAmethyst() 
{
    document.getElementById("silkthatamethyst").style.display = "block";
}
