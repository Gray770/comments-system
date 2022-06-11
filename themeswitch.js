var Theme = document.getElementById('theme');
var SavedTheme = localStorage.getItem("theme");
console.log("Saved theme is", SavedTheme)

Theme.addEventListener("click", themeswitch);

function themeswitch(){
    if(SavedTheme === "dark"){
        document.querySelector("body").classList.remove("dark");
        SavedTheme = "light";
    }
    else {
        document.querySelector("body").classList.add("dark");
        SavedTheme = "dark";
    }

    localStorage.setItem("theme", SavedTheme)
}

if(SavedTheme === "dark"){
    document.querySelector("body").classList.toggle("dark");
}
