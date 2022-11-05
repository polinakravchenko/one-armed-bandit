// const N = 7;
// alert("Варіант: " +  N + "\nКравченко Поліна");

var imgs = [
    "./img/apple.png",
    "./img/fig.png",
    "./img/orange.png",
    "./img/pineapple.png",
    "./img/strawberry.png",
    "./img/banana.png"
]

var usrname = prompt("Уведіть ім'я гравця: ");
if (usrname == '')
{
    usrname=prompt("Ви забули ввести ім'я гравця!");
}

var image1 = document.getElementById('pic1');
var image2 = document.getElementById('pic2');
var image3 = document.getElementById('pic3');
var image4 = document.getElementById('pic4');
var image5 = document.getElementById('pic5');
var image6 = document.getElementById('pic6');
var image7 = document.getElementById('pic7');
var image8 = document.getElementById('pic8');
var image9 = document.getElementById('pic9');
var result = document.getElementById('result');

var attempts = 0;

const button=document.querySelector('.button');

button.addEventListener('click', () => {

    image1.src=imgs[Math.floor(Math.random()*imgs.length)];
    image2.src=imgs[Math.floor(Math.random()*imgs.length)];
    image3.src=imgs[Math.floor(Math.random()*imgs.length)];
    image4.src=imgs[Math.floor(Math.random()*imgs.length)];
    image5.src=imgs[Math.floor(Math.random()*imgs.length)];
    image6.src=imgs[Math.floor(Math.random()*imgs.length)];
    image7.src=imgs[Math.floor(Math.random()*imgs.length)];
    image8.src=imgs[Math.floor(Math.random()*imgs.length)];
    image9.src=imgs[Math.floor(Math.random()*imgs.length)];

    if((image1.src == image4.src && image4.src == image7.src) || (image2.src == image5.src && image5.src == image8.src) || (image3.src == image6.src && image6.src == image9.src))
    {
    image1.src=imgs[Math.floor(Math.random()*imgs.length)];
    image2.src=imgs[Math.floor(Math.random()*imgs.length)];
    image3.src=imgs[Math.floor(Math.random()*imgs.length)];
    image4.src=imgs[Math.floor(Math.random()*imgs.length)];
    image5.src=imgs[Math.floor(Math.random()*imgs.length)];
    image6.src=imgs[Math.floor(Math.random()*imgs.length)];
    image7.src=imgs[Math.floor(Math.random()*imgs.length)];
    image8.src=imgs[Math.floor(Math.random()*imgs.length)];
    image9.src=imgs[Math.floor(Math.random()*imgs.length)];
    }

    attempts++;
    document.getElementById('attempts').innerHTML = "Спроба " + attempts + " з 3";
    document.getElementById('button').innerHTML = "Зіграй!";

    if(attempts == 3){
    if ((image1.src == image2.src && image2.src == image3.src) || (image4.src == image5.src && image5.src == image6.src) || (image7.src == image8.src && image8.src == image9.src))
    {
        document.getElementById('result').innerHTML = "Гравець " + usrname + " виграв! :)";
        result.style = "color: rgb(55, 164, 40); text-shadow: 3px 1px 2px rgba(181, 218, 149, 1);";
    }
    else 
    {
        document.getElementById('result').innerHTML = "Гравець " + usrname + " програв! Спробуйте ще! ;)";
        result.style = "color: rgb(242, 77, 40); text-shadow: 3px 1px 2px rgba(255, 92, 133, 1);";
    }
}
    if(attempts >= 4){
        attempts = 0;
        document.getElementById('attempts').innerHTML  = "Спроба " + attempts + " з 3";
        image1.src = "./img/slot.jpg";
        image2.src = "./img/slot.jpg";
        image3.src = "./img/slot.jpg";
        image4.src = "./img/slot.jpg";
        image5.src = "./img/slot.jpg";
        image6.src = "./img/slot.jpg";
        image7.src = "./img/slot.jpg";
        image8.src = "./img/slot.jpg";
        image9.src = "./img/slot.jpg";
        document.getElementById('button').innerHTML = "Ще!"
        document.getElementById('result').innerHTML = " ";
    }
});
