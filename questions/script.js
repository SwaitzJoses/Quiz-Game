async function prom() {
    await fetch("https://opentdb.com/api.php?amount=10")
      .then(function (resp) {
        return resp.json();
      })
      .then(function (jsonString) {

        
        
//           
//   console.log(jsonString.results[0].incorrect_answers)
//   console.log(jsonString.results[0].correct_answer)
//////////////////////////////////////////////////////////////////////////////////////////////////
console.log(jsonString.results)
console.log(document.getElementById("p1").innertext);
        //   if(document.getElementById("p1").value===1){
            var i=0;

document.getElementById("anssw").innerHTML=i+1;

            var arr=jsonString.results[i].incorrect_answers;
            var arr1=jsonString.results[i].correct_answer;

            var arr3 = arr.concat(arr1);
            console.log(arr3);
            var choices = arr3.sort(() => Math.random() - 0.5);
            
            console.log("choices " +choices);

            var mcq = arr3.map(x=>x === arr1);
            console.log(mcq);

            // var div=document.createElement("div") ;
            // div.innerHTML='hi';
            // document.body.appendChild(div)


            var cont = document.createElement("div");
            cont.setAttribute("class","container")
            document.body.appendChild(cont);


            var div = document.createElement("div");
            div.setAttribute("class","row")
            cont.appendChild(div);
            

            var div1 = document.createElement("div");
            div1.setAttribute("class","col-10")
            div1.innerHTML="Question : " +jsonString.results[i].question;
            div.appendChild(div1);

            var brr=document.createElement("br")
            cont.appendChild(brr);
            
            var divR = document.createElement("div");
            divR.setAttribute("class","row")
            cont.appendChild(divR);


        //  var aaa;   

      var but1=document.createElement("button");
      but1.setAttribute("class","col-2 options a cen")
      but1.setAttribute("id","id1")
      but1.addEventListener("click",checka);
      but1.innerHTML="A";
      divR.appendChild(but1);
      
      var ans1 = document.createElement("div");
      ans1.setAttribute("class","col-9 answers","id","a")
      ans1.innerHTML=choices[i]
      divR.appendChild(ans1);

      var divR = document.createElement("div");
      divR.setAttribute("class","row")
      cont.appendChild(divR);
    
      

      

      var but2=document.createElement("button");
      but2.setAttribute("class","col-2 options b cen")
      but2.addEventListener("click",checkb);
      but2.setAttribute("id","id2")
      but2.innerHTML="B";
      divR.appendChild(but2)
      

      var ans2 = document.createElement("div");
      ans2.setAttribute("class","col-9 answers","id","b")
      ans2.innerHTML=choices[i+1]
      divR.appendChild(ans2);

      var divR = document.createElement("div");
      divR.setAttribute("class","row")
      cont.appendChild(divR);

      var but3=document.createElement("button");
      but3.setAttribute("class","col-2 options c cen")
      but3.setAttribute("id","id3")
      but3.addEventListener("click",checkc);
      but3.innerHTML="C";
      divR.appendChild(but3)
      
      var ans3 = document.createElement("div");
      ans3.setAttribute("class","col-9 answers","id","c")
      ans3.innerHTML=choices[i+2]
      divR.appendChild(ans3);

      var divR = document.createElement("div");
      divR.setAttribute("class","row")
      cont.appendChild(divR);


      
      var but4=document.createElement("button");
      but4.setAttribute("class","col-2 options d cen")
      but4.setAttribute("id","id4")
      but4.addEventListener("click",checkd);
    //   but4.addEventListener("click",check4);
      but4.innerHTML="D";
      
      divR.appendChild(but4)

      var ans4 = document.createElement("div");
      ans4.setAttribute("class","col-9 answers","id","d")
      ans4.innerHTML=choices[i+3]
      divR.appendChild(ans4);


     aaa1= document.getElementById("id1").value=mcq[0]
     aaa2= document.getElementById("id2").value=mcq[1]
     aaa3= document.getElementById("id3").value=mcq[2]
     aaa4= document.getElementById("id4").value=mcq[3]
// but2.value=mcq[1];
// but3.value=mcq[2];
// but4.value=mcq[3];

// console.log(aaa1)


// var p;
////////////////////////////////////////////////////////////////////////////
parr=[]
function checka(){

                
    if( aaa1 === true){
    console.log("Right");
    parr.push(10)
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
        var total=parr.reduce(reducer)
        console.log(total);
        document.getElementById("pint").innerHTML=total;
    

}
else {
    console.log("wrong");
}
    check()
}

function checkb(){
    
    if( aaa2 === true){
    console.log("Right");
    // p=document.getElementById("pint").innerHTML=i+1;
    parr.push(10)
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
        var total=parr.reduce(reducer)
        console.log(total);
        document.getElementById("pint").innerHTML=total;
    
}
else {
    console.log("wrong");
}
    check()
}

function checkc(){
   
    if( aaa3 === true){
    console.log("Right");
    // p=document.getElementById("pint").innerHTML=i+1;
    parr.push(10)
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
        var total=parr.reduce(reducer)
        console.log(total);
        document.getElementById("pint").innerHTML=total;
    
}
else {
    console.log("wrong");
}
     check()
}

function checkd(){
    
    if( aaa4 === true){
    console.log("Right");
    //
    parr.push(10)
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
        var total=parr.reduce(reducer)
        console.log(total);
    document.getElementById("pint").innerHTML=total;
}
else {
    console.log("wrong");
}
    check()
}




////////////////////////////////////////////////////////








 function check(){
     
    

     if(i<11){
    i++;
    
   






















    document.getElementById("anssw").innerHTML=i+1;

    // var cont = document.createElement("div");
    // cont.setAttribute("class","container")
    // document.body.appendChild(cont);


    // var divp = document.createElement("div");
    // divp.setAttribute("class","row")
    // cont.appendChild(divp);
    

    // var div1p = document.createElement("span");
    // div1p.setAttribute("class","col-1 ",)
    // div1p.innerHTML="1";
    // cont.appendChild(div1p);


    div1.innerHTML="Question : " +jsonString.results[i].question;
     arr=jsonString.results[i].incorrect_answers;
     arr1=jsonString.results[i].correct_answer;

     var arr3 = arr.concat(arr1);
    //  console.log(arr3);
     var choices = arr3.sort(() => Math.random() - 0.5);
     
    //  console.log("choices " +choices);

     var mcq = arr3.map(x=>x === arr1);

     console.log(mcq)
    //  console.log(mcq);

    aaa1= document.getElementById("id1").value=mcq[0]
    aaa2= document.getElementById("id2").value=mcq[1]
    aaa3= document.getElementById("id3").value=mcq[2]
    aaa4= document.getElementById("id4").value=mcq[3]



    

    ans1.innerHTML=choices[0]
    ans2.innerHTML=choices[1]
    ans3.innerHTML=choices[2]
    ans4.innerHTML=choices[3]

    // if(i===0){
    //     document.getElementById("p1").style.backgroundColor = "rgb(231, 216, 216)"
    // }
   if(i===0){
        document.getElementById("p1").style.backgroundColor = "#ff0000"
        
        }

    else if(i===1){
        document.getElementById("p1").style.backgroundColor = "#ff0000"
        
        
        }
        else if(i===2){
            document.getElementById("p1").style.backgroundColor = "#ff0000"
            document.getElementById("p2").style.backgroundColor = "#ff0000"
           
            
            }
            else if(i===3){
                document.getElementById("p1").style.backgroundColor = "#ff0000"
                document.getElementById("p2").style.backgroundColor = "#ff0000"
                document.getElementById("p3").style.backgroundColor = "#ff0000"
                
                
                }
                else if(i===4){
                    document.getElementById("p1").style.backgroundColor = "#ff0000"
                    document.getElementById("p2").style.backgroundColor = "#ff0000"
                    document.getElementById("p3").style.backgroundColor = "#ff0000"
                    document.getElementById("p4").style.backgroundColor = "#ff0000"
                    
                    
                    }
                    else if(i===5){
                        document.getElementById("p1").style.backgroundColor = "#ff0000"
                        document.getElementById("p2").style.backgroundColor = "#ff0000"
                        document.getElementById("p3").style.backgroundColor = "#ff0000"
                        document.getElementById("p4").style.backgroundColor = "#ff0000"
                        document.getElementById("p5").style.backgroundColor = "#ff0000"
                        
                        
                        }
                        else if(i===6){
                            document.getElementById("p1").style.backgroundColor = "#ff0000"
                            document.getElementById("p2").style.backgroundColor = "#ff0000"
                            document.getElementById("p3").style.backgroundColor = "#ff0000"
                            document.getElementById("p4").style.backgroundColor = "#ff0000"
                            document.getElementById("p5").style.backgroundColor = "#ff0000"
                            document.getElementById("p6").style.backgroundColor = "#ff0000"
                           
                            
                            }
                            else if(i===7){
                                document.getElementById("p1").style.backgroundColor = "#ff0000"
                                document.getElementById("p2").style.backgroundColor = "#ff0000"
                                document.getElementById("p3").style.backgroundColor = "#ff0000"
                                document.getElementById("p4").style.backgroundColor = "#ff0000"
                                document.getElementById("p5").style.backgroundColor = "#ff0000"
                                document.getElementById("p6").style.backgroundColor = "#ff0000"
                                document.getElementById("p7").style.backgroundColor = "#ff0000"
                                
                                
                                }
                                else if(i===8){
                                    document.getElementById("p1").style.backgroundColor = "#ff0000"
                                    document.getElementById("p2").style.backgroundColor = "#ff0000"
                                    document.getElementById("p3").style.backgroundColor = "#ff0000"
                                    document.getElementById("p4").style.backgroundColor = "#ff0000"
                                    document.getElementById("p5").style.backgroundColor = "#ff0000"
                                    document.getElementById("p6").style.backgroundColor = "#ff0000"
                                    document.getElementById("p7").style.backgroundColor = "#ff0000"
                                    document.getElementById("p8").style.backgroundColor = "#ff0000"
                               
                                    
                                    
                 
        
                                }

                                else if(i===9){
                                    document.getElementById("p1").style.backgroundColor = "#ff0000"
                                    document.getElementById("p2").style.backgroundColor = "#ff0000"
                                    document.getElementById("p3").style.backgroundColor = "#ff0000"
                                    document.getElementById("p4").style.backgroundColor = "#ff0000"
                                    document.getElementById("p5").style.backgroundColor = "#ff0000"
                                    document.getElementById("p6").style.backgroundColor = "#ff0000"
                                    document.getElementById("p7").style.backgroundColor = "#ff0000"
                                    document.getElementById("p8").style.backgroundColor = "#ff0000"
                                    document.getElementById("p9").style.backgroundColor = "#ff0000"
                                    
                                    
                                var next = document.createElement("div");
        next.addEventListener("load",location.href='scorep.html')
        document.body.appendChild(next)

var reducer = (accumulator, currentValue) => accumulator + currentValue;
     var total=parr.reduce(reducer)
     console.log("total " +total);


     document.getElementById("total").innerHTML= total
     console.log(total);
        
                                }
}
    else if(i>10){
        console.log("done")

        
    }
}

            
           
        

      })
    .catch(function (){
        console.log("error");
    });
    }



     prom();


    
    