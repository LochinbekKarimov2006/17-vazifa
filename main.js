let div100=document.querySelector('.div100')
let div10=document.querySelector('.div-10')
let div13=document.querySelector('.div-13')
let div1=document.querySelector('.div-1')
let div4=document.querySelector('.div-4')
let form1=document.querySelector('.form1')
let text=document.querySelector('#text')
let input=document.querySelectorAll('input')
let button1=document.querySelector('.button1')
let button2=document.querySelector('.button2')
let button3=document.querySelector('.button3')
let button=document.querySelectorAll('button')
let img10=document.querySelector('.img10')
let obj=[]
console.log(obj)
let img=['img1','img2','img3','img4']
button3.addEventListener('click',()=>{
    div13.innerHTML=''
})
function tugatish(){
div1.style.display='none'
div10.style.display='none'
}
button2.addEventListener('click',()=>{
    tozalash()
div1.style.display='inline'
div10.style.display='flex'
})
let z=0
function buttonchap(){
    if(z==-1){
        z=3
        img10.src=`./img/${img[z]}.jpg`
        z=2
    }else{
        img10.src=`./img/${img[z]}.jpg`
        z-=1
    }
}
function buttonong(){
    if(z==3){
        img10.src=`./img/${img[0]}.jpg`
        z=0
    }else{
        z+=1
        img10.src=`./img/${img[z]}.jpg`
    }
}
function tozalash(){
    text.value=''
    input[0].value=''
    input[1].value=''
    input[2].value=''
    input[3].value=''
    input[4].value=''
    input[5].value=''
}
button1.addEventListener('click',(e)=>{
    div13.innerHTML=''
    tozalash()
    console.log(obj)
    e.preventDefault()
    let name={
        text:text.value,
        isim:input[0].value,
        familya:input[1].value,
        tel:input[2].value,
        data:input[3].value,
        email:input[4].value,
        parol:input[5].value,
        img:`./img/${img[z]}.jpg`
    }
    console.log(div100)
    obj.push(name)
    obj.forEach((obj)=>{
        let div20=document.createElement('div')
        let div21=document.createElement('div')
        let div22=document.createElement('div')
        let div23=document.createElement('div')
        let img11=document.createElement('img')
        let p=document.createElement('p')
        let h10=document.createElement('h2')
        let h11=document.createElement('h2')
        let h12=document.createElement('h2')
        let h13=document.createElement('h2')
        let h14=document.createElement('h2')
        let h15=document.createElement('h2')
        let h16=document.createElement('h2')
        let h17=document.createElement('h2')
        let h18=document.createElement('h2')
        let h19=document.createElement('h2')
        let button10=document.createElement('button')
        button10.innerHTML=`<i class="fa-solid fa-xmark"></i>`
        p.textContent=`Malumodlar: ${obj.text}`
        h12.textContent=`Telefon raqam: ${obj.tel}`
        h13.textContent=`Tug'ilgan sana: ${obj.data}`
        h14.textContent=`Email: ${obj.email}`
        h15.textContent=`Parol: ${obj.parol}`
        h10.textContent=`Isim: ${obj.isim}`
        h11.textContent=`Familya: ${obj.familya}`
        img11.src=obj.img
        h12.style=`
        border: double 1px #3d3d3d;
        border-top: 0;
        border-left: 0;
        border-right: 0;`
        div21.style=`
        width: 100%;
        `
        h13.style=`
        border: double 1px #3d3d3d;
        border-top: 0;
        border-left: 0;
        border-right: 0;`
        h14.style=`
        border: double 1px #3d3d3d;
            border-top: 0;
            border-left: 0;
            border-right: 0;`
            h15.style=`
            border: double 1px #3d3d3d;
            border-top: 0;
            border-left: 0;
            border-right: 0;`
            p.style=`
            border: double 1px #3d3d3d;
            border-top: 0;
            border-left: 0;
            border-right: 0;`
            button10.style=`
            display:flex;
            `
            div20.style=`
            display: flex;
            justify-content: space-between;
            gap:20px;
            color: black;
            font-size:20px`
            img11.style=`
            width: 100px;
            height: 100px;
            border-radius: 15px;`
            p.style=`
            width: 100%;
            font-size:16px
            `
            div23.style=`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(240, 248, 255, 0.79);
            color: black;
            padding: 20px;
            border-radius: 20px;`
            div22.style=`
            display: flex;
            flex-direction: column;
            gap:10px;
            height: 70%;
            font-size:18px`
            div23.classList='div-14'
            div22.prepend(h12,h13,h14,h15,p)
            div21.prepend(h11,h10)
            div20.prepend( img11,div21,button10)
            div23.prepend(div20,div22)
            div13.appendChild(div23)
            console.log(div100)  
            button10.addEventListener('click',()=>{
                console.log('salom')
                    div23.style.display='none'
                })
        })
        tugatish()
    })
        tugatish()
console.log(obj)
console.log(text.value)
console.log(input[0].value)
console.log(input[1].value)
console.log(input[2].value)
console.log(input[3].value)
console.log(input[4].value)
console.log(input[5].value)
console.log(input[6].value)
console.log(input[7].value)
button[0].addEventListener('click',buttonchap)
button[1].addEventListener('click',buttonong)