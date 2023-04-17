// function myFunction(str, num) {
//     for (let index = 0; index < num; index++) {
//         console.log(str)
//     }
//   }

// myFunction("hello",5);

// function myFunction(a) {
//   let sahe = a * a;
//   let perimetr = 4 * a;
//   console.log(sahe);
//   console.log(perimetr);

// }
// myFunction(5);

// function myFunction(a) {
//     if (a%2==1) {
//         console.log("tek");
//     }
//     else if (a%2==0) {
//         console.log("cut");
//     }
//   }
//   myFunction(5);

// function myFunction(a) {
//     if (a<65) {
//         console.log("pensiya yasina catmamisiniz");
//     }
//     else {
//         console.log("pensiya yasina catmisiniz");
//     }
// }
// myFunction(65);

// function myFunction(n1,n2,n3,n4,n5) {
//     let sum = n1+n2+n3+n4+n5;
//     let avg = sum / 5;
//     console.log(avg);
//   }
//   myFunction(90,60,90,80,90);

// function myFunction(n1,n2) {
//     if (n1>n2) {
//         console.log(n1);
//     }
//    else if (n2>n1) {
//         console.log(n2);
//     }
//     else{
//         console.log("BERABER");
//     }
//   }
//   myFunction(90,90);

// function myFunction(num1, num2) {
//   for (let index = 0; index < num2; index++) {
//     num1*=2;
//     console.log(num1);
//   }
// }
// myFunction(2, 5);

// function myFunction(n1, n2, n3) {
//   if (n1==n2 && n2!=n3 || n2==n3 && n1!=n2 || n1==n3 && n1!=n2) {
//     console.log("beraberyanli");
//   }
//   else if (n1==n2 && n2==n3) {
//     console.log("beraberterefli");

//   }
//   else{
//     console.log("muxtelif teref");
//   }
// }
// myFunction(5, 4 ,3);

// function myFunction(num1, num2) {
//   let sum = 0;
//   for (let index = 0; index < num2; index++) {
//     num1++;
//     sum += num1;
//     console.log(sum);
//   }
// }
// myFunction(1, 10);

// function myFunction(name) {
//   console.log("Salam"+" "+name);
// }
// myFunction("Kamran");

// function myFunction(num) {
//   if (num > 10) {
//     console.log("BOYUKDUR");
//   } else if (num < 10) {
//     console.log("KICIKDIR");
//   } else {
//     console.log("BERABER");
//   }
// }
// myFunction(1);

// function myFunction(n1,n2,n3) {
//   let res = n1 * n2 * n3;
//   if (res<0) {
//     console.log("-"+res);
//   }
//   if (res>0) {
//     console.log("+"+res);
//   }
// }
// myFunction(1,-5,6);

// function myFunction(num) {
//   if (num%5==0) {
//     console.log("bolunur");
//   }
//   if (num%5!=0) {
//     console.log("bolunmur");
//   }
// }
// myFunction(20);

// function myFunction(num1, num2) {
//   let sum = 0;
//   for (let i = 0; i < num2; i++) {
//     num1++;
//     if (num1 % 3 == 0) {
//         console.log(num1);
//     }
//   }
// }
// myFunction(1, 15);

// function myFunction(n1,n2,n3) {
// let a=0;
// let b=0;
// a=n3-n1;
// b=n3-n2;
// if (a<b) {
//     console.log("1ci eded daha yaxindir");
// }
// else if (a>b) {
//     console.log("2ci eded daha yaxindir");
// }
// }
// myFunction(4,3,10);

//1-100 qeder 3 ve 5 e bolunenlerin cemi

// function myFunction(num1, num2) {
//   let sum = 0;
//   for (let i = 0; i < num2; i++) {
//     num1++;
//     if (num1 % 3 == 0 && num1 % 5 == 0) {
//       sum += num1;
//     }
//   }
//   console.log(sum);
// }
// myFunction(1, 100);

// EBOB


    function ebobEkok(num1, num2){
        let ebob;
        let ekob;
        let kicikSayi = (num1 < num2) ? num1 : num2;
        
        for(let i = kicikSayi; i > 0; i--){
            if((num1%i == 0) && (num2%i == 0)){
                ebob = i;
                break;
            }
        }
 
        ekob = (num1 * num2) / ebob;
 
        console.log("Ebob : " + ebob + " Ekob : " + ekob);
    }
 
    ebobEkok(12, 24);