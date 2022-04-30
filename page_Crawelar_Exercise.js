console.log('welcome pranav ');
let str = 'photo';
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element){
href = element.href;
if(href.includes(str)){
    console.log(href);
}
// console.log(href);
})

// links from a site 