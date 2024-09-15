const Added = document.querySelector(".inputs");
const form = document.querySelector('form')


const data = document.querySelector(".data");

const btn = document.querySelector(".AddBtn");
const deleted=document.querySelector('.delete')
deleted.addEventListener('click',()=>{
   const lists=document.querySelectorAll('.list').forEach((li)=>{
    li.remove()
    }
)
const fonte=document.querySelectorAll('.fa-solid').forEach((li)=>{
    li.remove()
    }
) 
    
    })

    function logSubmit(e) {
        e.preventDefault();  
    
        if(data.value===''){
            return
        }
        if(data.value.trim()===''){
            return
        }
    
        const created=document.createElement('input');
        created.readOnly=true;
    
        Added.appendChild(created);
        created.classList.add('list')
        console.log(data.value )
        
        const fontAwesome=document.createElement('i')
        fontAwesome.classList.add('fa-solid','fa-pen-to-square');
        Added.appendChild(fontAwesome)
    
        const fontAwesome2=document.createElement('i')
        fontAwesome2.classList.add('fa-solid','fa-trash');
        Added.appendChild(fontAwesome2)
    
        created.value=data.value.trim()
        data.value='';
        
        fontAwesome.addEventListener('click',()=>{
            created.readOnly=false;
            created.addEventListener('mouseleave',()=>{
                created.readOnly=true;
            })
        })
        
        fontAwesome2.addEventListener('click',()=>{
            created.remove()
            fontAwesome.remove()
            fontAwesome2.remove()
        })
    }
    



form.addEventListener("submit", logSubmit);
