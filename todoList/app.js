let inp= document.getElementById('inp');
const list =document.querySelector('table');

function addListItem(){
 if(inp.value!=""){
    let text=inp.value;
    let row=document.createElement('tr');
    let item=document.createElement('input');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    console.log(text);
    item.value=text;
    td1.append(item);
    item.disabled=true;
    let moveUp=document.createElement('i');
    moveUp.classList.add('fa','fa-sort-up');
    td2.append(moveUp);
    let moveDown =document.createElement('i');
    moveDown.classList.add('fa','fa-sort-down');
    td3.append(moveDown);
    let editTodo=document.createElement('i');
    editTodo.classList.add('fa','fa-edit')
    td4.append(editTodo);
    let deleteItem = document.createElement('i');
    deleteItem.classList.add('fa','fa-trash');
    td5.append(deleteItem);
    
    deleteItem.addEventListener('click',()=>{
      row.remove();
    });
  
    editTodo.addEventListener('click',()=>{
      item.disabled=!item.disabled;
    });
  
    moveDown.addEventListener('click',()=>{
      let nextRow = row.nextSibling;
      let x = row;
      if (nextRow != null) {
          row.remove();
          nextRow.after(x);
      }
    });
  
    moveUp.addEventListener('click',()=>{
     let prevRow=row.previousSibling;
     let x=row;
     if(prevRow!=null){
      row.remove();
      prevRow.before(x);
     }
    });
    row.append(td1);
    row.append(td2);
    row.append(td3);
    row.append(td4);
    row.append(td5);
    list.append(row);
  
    inp.value="";
 }
}

inp.addEventListener('keypress',(e)=>{
 if(e.key==='Enter'){
  addListItem();
 }
});