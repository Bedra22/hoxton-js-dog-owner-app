console.log(data);

// WRITE YOUR CODE BELOW!

let dogslist= document.querySelector('.dogs-list')

let dogdisplay= document.querySelector('.main__dog-section')

function listitem(dog){
    let liEl= document.createElement('li')
    liEl.className='dogs-list__button'
    liEl.textContent= dog.name

    liEl.addEventListener('click',function(){
      dogdisplayment(dog)
    })

    dogslist?.append(liEl)
}

function doglistrow(){
    for (let dog of data){
    listitem()
  }
}

function dogdisplayment(dog){

    dogdisplay.textContent=''

    let headerEl = document.createElement('h2')
    headerEl.textContent=dog.name

    let imgEl = document.createElement('img')
    imgEl.src=dog.image
    imgEl.alt=''

    let divEl = document.createElement('div')
    divEl.className='main__dog-section__desc'

    let h3El = document.createElement('h3')
    h3El.textContent='Bio'
    let longpEl = document.createElement('p')
    longpEl.textContent= dog.bio

    let shortpEl = document.createElement('p')
    let emEl = document.createElement('em')
    shortpEl.textContent='Is naugty?'
    if(dog.isGoodDog===false){
        shortpEl.append(emEl, 'Yes!')
    } else {
        shortpEl.append(emEl, 'No!')
    }     

    let buttonEl = document.createElement('button')
    buttonEl.className='main__dog-section__btn'
    if (dog.isGoodDog){
        buttonEl.textContent="Good dog"
    }else{
        buttonEl.textContent="Bad dog"
    }
    buttonEl.addEventListener('click',function(){
      Goodbadboy(dog)
      dogdisplayment(dog)
    })
 
    divEl.append(h3El,longpEl)
    shortpEl.append(emEl)
    dogdisplay?.append(headerEl, imgEl, divEl, buttonEl)
    
}
function Goodbadboy(){

}

doglistrow()
dogdisplayment()
