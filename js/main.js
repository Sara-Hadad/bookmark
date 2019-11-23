let webName = document.getElementById("webName"),
webUrl = document.getElementById("webUrl"),
 btn = document.getElementById("btn"),
 container ;
 if(localStorage.getItem("bookCon") == null)
 {
 container=[];
 }
 else{
  container=JSON.parse(localStorage.getItem("bookCon"));
  displayData();

 }

btn.onclick = function(){
  {
    addBookmark();
    displayData();
    clearForm();
    localStorage.setItem("bookCon",JSON.stringify( container))
  
  }


}





function addBookmark()
{
  let product = {
    name:webName.value,
    url:webUrl.value,
  
  }
  container.push(product);

  
}



function displayData()
{
let rows="",
 i;
for(i=0 ; i<container.length ;i+=1)
    {
      rows+=`  <div class="col-lg-12">
      <div class="con bg-light  p-5 m-3  ">
             <span class="lead" style="font-size: 33px ; font-weight: bolder">${container[i].name}</span>   
             <a  id="btnV" target="-blank" class="btn btn-success p-2" style="color: aliceblue" href="https://${container[i].url}"> Visit</a>
             <a  id="btnD" class="btn btn-danger p-2 " onclick="deleteProduct(id)" style="color: aliceblue" > Delete</a> 
      </div>
  </div>`

    }
 document.getElementById("row").innerHTML=rows
}




function deleteProduct(id)
{
container.splice(id,1);
localStorage.setItem("bookCon",JSON.stringify( container));
displayData()
}



function clearForm(){
  let inputs = document.getElementsByClassName("form-control"),
  i;
  for( i=0 ; i<inputs.length ; i++)
  {
    inputs[i].value=""
  }

}


