// DOM Selection
// document.getElementById()
// document.getElementByClassName()

const judul = document.getElementById('judul');

judul.style.color = 'red'; // merubah sebuah elemen dari HYML menggunakan javascript
judul.style.backgroundColor = 'blue'; // merubah background color nya menggunakan javascript 
judul.innerHTML = 'Riwanto Sitinjak'; // merubah judul menggunakan javascript 

// seleksi menggunakan document.getElementByTagName() 
// tag ini mengembalikan HTML Collection

const p = document.getElementsByTagName('p') ; // output = HTMLCollection(4) [p.p1, p.p2, p.p3, p] di console

p[2].style.backgroundColor = 'grey'; // merubah background colornya menggunakan array indeks dari element HTML 

// document.getElementByClassName()
// mengembalikan HTML Collection 

const p1 = document.getElementsByClassName('p1');


