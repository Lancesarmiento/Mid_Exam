//Formula na pang randomize sa picture na lalabas
var num1 = Math.floor(Math.random() * 3) + 1;
var num2 = Math.floor(Math.random() * 3) + 1;

//Yung mga picture na irarandomize kasama na ang directory tapos naka es6
var randomImage1 = `images/rsp${num1}.jpg`;
var randomImage2 = `images/rsp${num2}.jpg`;

//Variables na gagamitin sa if else if conditions
var rock = 'images/rsp1.jpg';
var scissors = 'images/rsp2.jpg';
var paper = 'images/rsp3.jpg';

//Data object model na kinuha sa html, yung img1 at img2 sa rcp, rcp1 na div tapos ginawang variable
var hand1 = document.querySelectorAll('img')[0];
var hand2 = document.querySelectorAll('img')[1];

//pagset ng attribute sa hand1 at hand2 gamit ang value ng randomImage1 and 2 na variables. Yung src is short for source
hand1.setAttribute('src',  randomImage1);
hand2.setAttribute('src',  randomImage2);


//Boolean if else if para madetermine sinong panalo at sinong talo. Halos parehas na logic dun sa dice game kaya may idea na


            if(randomImage1 === scissors && randomImage2 === paper ){
                document.querySelector('h1').textContent = "Scissor Wins!";
                document.querySelector('.p1').textContent = "Playe 1 wins!";
                document.querySelector('.p2').textContent = "Playe 2 lose!";
            }

            
            else if (randomImage2 === scissors && randomImage1 === paper ){
                document.querySelector('h1').textContent = "Scissor Wins!";
                document.querySelector('.p1').textContent = "Playe 1 lose!";
                document.querySelector('.p2').textContent = "Playe 2 wins!";
            }


            else if (randomImage1 === paper && randomImage2 === rock ){
                document.querySelector('h1').textContent = "Paper Wins!";
                document.querySelector('.p1').textContent = "Playe 1 wins!";
                document.querySelector('.p2').textContent = "Playe 2 lose!";
            }


            else if (randomImage1 === rock && randomImage2 === paper ){
                document.querySelector('h1').textContent = "Paper Wins!";
                document.querySelector('.p1').textContent = "Playe 1 lose!";
                document.querySelector('.p2').textContent = "Playe 2 wins!";
            }

            else if (randomImage1 === rock && randomImage2 === scissors ){
                document.querySelector('h1').textContent = "Rock Wins!";
                document.querySelector('.p1').textContent = "Playe 1 wins!";
                document.querySelector('.p2').textContent = "Playe 2 lose!";
            }


            else if (randomImage1 === scissors && randomImage2 === rock ){
                document.querySelector('h1').textContent = "Rock Wins!";
                document.querySelector('.p1').textContent = "Playe 1 lose!";
                document.querySelector('.p2').textContent = "Playe 2 wins!";
            }

            else {
                document.querySelector('h1').textContent = "Try again!";
                document.querySelector('.p1').textContent = "Draw!";
                document.querySelector('.p2').textContent = "Draw!";
            }