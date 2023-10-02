let images=["0","1","2"];
let id=0;
function next(){
    if (id==(images.length-1)){
        console.log("im in if :" ,id);
        id=0;
        document.getElementById("im").src=images[id]+".jpg";
    }else{
        console.log("im in else :" ,id);
    id++;
    document.getElementById("im").src=images[id]+".jpg";
}

}
function prev(){
    if (id==0){
        console.log("im in if :" ,id);
        id=(images.length-1);
        document.getElementById("im").src=images[id]+".jpg";
    }else{
        console.log("im in else :" ,id);
    id--;
    document.getElementById("im").src=images[id]+".jpg";
}
}
function repete(){
    setInterval(next, 3000);
    for(let i=0;i<6;i++){
    console.log("i'm in infinite lopp");
    
    }
}