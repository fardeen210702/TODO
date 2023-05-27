let input = document.getElementById('input')
let listcontainer = document.getElementById('list-container');
let button= document.getElementById('button');

// logic---------------->

button.addEventListener('click',()=>{
    if(input.value===''){
        alert('Type Something Before Adding!');
}else{
    let li = document.createElement('li');
    li.innerHTML = input.value;
    listcontainer.appendChild(li);
    let span = document.createElement('span')
    li.appendChild(span)
    span.innerHTML='\u00d7';
}
input.value='';
protect()
})
listcontainer.addEventListener('click',e=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        protect()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        protect()  
    }
    })

    function protect(){
 localStorage.setItem('info',listcontainer.innerHTML);

    }
    function provide(){
        listcontainer.innerHTML=localStorage.getItem('info')
    }
    provide();
 
let Delete = document.getElementById('Delete');
// let String='';

Delete.addEventListener('click',()=>{
  if(listcontainer.innerHTML===''){
    alert('Type Something Before Deleting!')
  }
  else{
string='';
listcontainer.innerHTML=string;
protect() 
  }
})

