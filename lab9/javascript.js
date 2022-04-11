// function sum() {
//     let a,b;
//     // alert("hello")

// p = parseInt(prompt("a"));
// q = parseInt(prompt("b"));

// let r = p+q;

// alert(r);
// }




    // function data(){
    //     let n = parseInt(prompt("enter number"));
    // let x = "";
    // console.log(n);

    // for(let i=1; i<=n; i++){

    //     x = x + i;
    //     document.getElementById(data).innerHTML = x;
    // }
    // }



    function intrest(){
        let x,y,z;

        x = parseInt(prompt("Enter amount:"));
        y  = parseInt(prompt("Enter Intrest rate (%):"));
        z = parseInt(prompt("Enter year:"));

        let a = ((x*y)/100)*z;
        console.log(a);
        

        document.getElementById("amount").innerHTML = x;
        document.getElementById("intrest").innerHTML = y;
        document.getElementById("year").innerHTML = z;
        document.getElementById("result").innerHTML = a;
    }
    
    
