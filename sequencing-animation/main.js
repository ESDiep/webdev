
//To do: rotate each image then make it dissapear in sequence.
//This code is to implement Promises and async/await.

const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


//Promise Chain version
/*
alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() =>  alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() =>  alice3.animate(aliceTumbling, aliceTiming).finished)
  .catch(error => console.error(`Eror animating Alices: ${error}`));

*/

//async function version

async function tumble(){

  try{
    const response = alice1.animate(aliceTumbling, aliceTiming);
    await response.finished;
    const response2 = alice2.animate(aliceTumbling, aliceTiming);
    await response2.finished;
    alice3.animate(aliceTumbling, aliceTiming);
  
  
  }catch(error){
    console.error(`Eror animating Alices: ${error}`);
  }

}


tumble();