import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("click",function(e){
     alert("Bana tıkladın!")
});

const yönlendir = (url) => {
    document.location.href = url;
}

document.getElementsByClassName('btn')[0].addEventListener("click", function(e){
    yönlendir('https://www.rixos.com/tr');
})

document.getElementsByClassName('btn')[1].addEventListener("click", function(e){
    yönlendir('https://www.jollytur.com/karadeniz-turlari');
})

document.getElementsByClassName('btn')[2].addEventListener("click", function(e){
    yönlendir('https://www.datcadetay.com/datca-gezi-tekneleri.html');
})

const mouse = document.querySelectorAll('.nav-link')

mouse.forEach((click => {
    click.addEventListener('mouseover', (event) => {
        event.target.style.color = 'darkorange';
        click.style.fontWeight = 'bold';
    })
    click.addEventListener('mouseout', (event) => {
        event.target.style.color = 'black';
        click.style.fontWeight = 'normal';
    })
}))

const button = document.querySelectorAll('.btn');

button.forEach(abutton => {
    abutton.addEventListener('mouseenter', (event) => {
        event.target.style.background = "orange";
    })
    
    abutton.addEventListener('mouseout', (event) => {
        event.target.style.background = "";
    })
})


