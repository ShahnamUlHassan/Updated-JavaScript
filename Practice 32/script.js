let a = document.getElementsByTagName("div")[0]
a.innerHTML = a.innerHTML + "<h1>Hello!</h1>"

// let div = document.createElement("div");
// div.innerHTML = "<h1>Hello 2</h>";
// a.appendChild(div);

// let div = document.createElement("div");
// div.innerHTML = "<h1>Hello 2</h>";
// a.prepend(div);

// let div = document.createElement("div");
// div.innerHTML = "<h1>Hello 2</h>";
// a.before(div);

// let div = document.createElement("div");
// div.innerHTML = "<h1>Hello 2</h>";
// a.after(div);

let div = document.createElement("div");
div.innerHTML = "<h1>Hello 2</h>";
a.replaceWith(div);