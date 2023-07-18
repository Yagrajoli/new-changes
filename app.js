// const navLink = document.querySelector(".nav-link");
// const drpDmenu = document.querySelector(".dropdown-menu");
// const dropDown = () =>{
//    drpDmenu.classList.toggle('active');
// }
// navLink.addEventListener('click', () => dropDown());

function myfun(){
    const dropDown = document.querySelector(".dropdown-menu");
    dropDown.classList.toggle("active");
}


// window.onclick = function(event){
//     if(event.target.matches(".nav-link")){
//         const removeShow = document.querySelector(".dropdown-menu");
//         if(removeShow.classList.contains("active")){
//             removeShow.classList.remove("active");
//         }

//     }
// }

//for second Dropdown menu

// const navLink2 = document.querySelector(".nav-link-2");
// const drpDmenu2 = document.querySelector(".dropdown-menu-2");
// const dropDown2 = () =>{
//     drpDmenu2.classList.toggle("now");
    
// }
// navLink2.addEventListener('click', () => dropDown2());

// const navLinkForlink = document.querySelector(".nav-link");
// const navLink23 = document.querySelector(".nav-link-2");





    

// navLink.addEventListener('click', openClose());
// navLink2.addEventListener('click', openClose());


// const drpdow = document.querySelector(".dropdown-menu");


// for bubble sort--------------------------------------------------------------------------
const n=10;
const arr=[];

//defining init function to initilize
function init(){
    for(let i=0;i<n;i++){
        arr[i]=Math.random();
    }
    showbars();
}

//play function start perfor a sort
function play(){
    const copy=[...arr];
    const swap=bubblesort(copy);
    animate(swap);
}

// animation function
function animate(swap){
    if(swap.length==0){
        showbars();
        return;
    }
    const [i,j]=swap.shift();
    [arr[i],arr[j]]=[arr[j],arr[i]];
    showbars([i,j]);
    setTimeout(function(){
        animate(swap);
    },50);
}


//bubblr sort algorithm
function bubblesort(arr){
    const swap=[];
    do{
        var swapped=false;
        for(let i=1;i<arr.length;i++){
            if(arr[i-1]>arr[i]){
                swapped=true;
                swap.push([i-1,i]);
                [arr[i-1],arr[i]]=[arr[i],arr[i-1]];
            }
        }
    }while(swapped);
    return swap;
}

//creating bars
function showbars(indices){
    container.innerHTML="";
    for(let i =0; i<arr.length; i++){
        const bar=document.createElement("div");
        bar.style.height=arr[i]*100+"%";
        bar.classList.add("bar");
        
        if(indices && indices.includes(i)){
            bar.style.backgroundColor="red";
        }
        container.appendChild(bar);
    }
}



//for toggle bubble sort

const bblSort = document.querySelector(".bubble-sort");
const heapel = document.querySelector('.heapsort');
const bubble = document.querySelector(".bubble");
const bubbleele = `<h2>Bubble sort</h2>
<div id = "container"></div>
<hr>

<div>
    <button onclick="init()">init</button>
    <button onclick="play()">play</button>
</div>`;

const heapsortt =  `<h2>Heap sort</h2>
<div id = "container"></div>
<hr>

<div>
    <button onclick="init()">init</button>
    <button onclick="play()">play</button>
</div>`;
const bblToggle = () =>{

    bubble.innerHTML = bubbleele
}
const heap = () => {
    bubble.innerHTML = heapsortt;
}
    

bblSort.addEventListener('click', () => bblToggle());
heapel.addEventListener('click', () => heap());