const datas=[
    {name:"ABC",Proffesion:"Software Developer"},
    {name:"XYZ",Proffesion:"Software Tester"}
   ];
function getDatas(){
setTimeout(() => {
    let output="";
    datas.forEach((datas,index)=>{
        output+=`<li>${datas.name}-${datas.Proffesion}</li>`

    })
document.body.innerHTML=output;


}, 3000);
}
function createData(newData){
    return new Promise((resolve,reject)=>{
setTimeout(() => {
        datas.push(newData);
     //  let error=false; //to understand
      let error=false 
        if(!error){
            resolve();
        }
        else{
            reject("some error occured..........")
        }
       
    }, 5000);
    })
    
}
// createData({name:"Ajay",Proffesion:"Database Admin"})
// .then(getDatas)
// .catch(err=>console.log(err));

async function start(){
   await createData({name:"Ajay",Proffesion:"Database Admin"});
    getDatas();
}

start();


//whn promise is sucess so we use then
//createData is promise
//to rsolve
//callback ->if we put 20000 instead of 5000 it will work but if time is more it wont so we r using callback:
//promise
//async -await //built on top of promise=>makes a functn return a promise

//await -1st promise shoud be resolve then  remaining will execute
