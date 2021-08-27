let c=document.getElementById("mycanvas");
let ctx=c.getContext("2d");



let loadimg=(src,callback)=>{
let img=document.createElement("img");
img.onload=()=>callback(img);
img.src=src;
};
//loadimg("finisher/images/background.jpg",(img)=>{ 
   
   //ctx.drawImage(img,0,0,500,500);
//});
let m=0;
let x=0;
      
function list(p,a){

   if(p=="forward"){
         x=m*10;
      }
   if(p=="backward"){
      
        x=m*10;
   }   
   for(i=0;i<a.length;i++){
      if(p=="forward"){
         m=m+1;
      }
   if(p=="backward"){
      
        m=m-1;
   }
      for(j=0;j<=i*500;j++){
         
      
   loadimg("finisher/images/"+p+"/"+a[i]+".png",(img)=>{ 
      
      ctx.clearRect(0,0,1500,500);
      ctx.drawImage(img,x,0,500,500);});
      
   

}
   }
};
a=[1,2,3,4,5,6,7,8]
b=[1,2,3,4,5,6,7]
c=[1,2,3,4,5,6]
d=[1,2,3,4,5,6,7,8,9]


list("idle",a);







/*let drawline=(sx,ex,sy,ey)=>{
ctx.beginPath();
ctx.moveTo(sx,ex);
ctx.lineTo(sy,ey);
ctx.stroke();

}

let drawcircle=(x,y,r,color)=>{
ctx.beginPath();
ctx.arc(x,y,r,0,2*Math.PI);
ctx.fillStyle=color;
ctx.fill();
ctx.stroke();
}

//body 
drawcircle(250,250,150,"transparent");
drawcircle(300,200,15,"black");
drawcircle(200,200,15,"black");

//head*/
