let addButton = document.getElementById('add');
            let todoitem = document.getElementById('itemid');
            let inputField = document.getElementById('IF');
    addButton.addEventListener('click', function(){
        var paragraph = document.createElement('p');
        paragraph.innerText = inputField.value;
    paragraph.classList.add('paragraph-styling');
        todoitem.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click',function()
    {
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',function()
    {
    todoitem.removeChild(paragraph);
    })
    
    })

setInterval(()=>{
                d=new Date();
                hours=d.getHours();
                minutes=d.getMinutes();
                seconds=d.getSeconds();
                hr=30*hours+minutes*0.5;
                mr=6*minutes;
                sr=6*seconds;
                h.style.transform=`rotate(${hr}deg)`;
                min.style.transform=`rotate(${mr}deg)`;
                sec.style.transform=`rotate(${sr}deg)`;
            },1000);