// EX-1
// let var1=prompt("enter le 1er variable ");
// let var2=prompt("enter 2eme 1er variable ");

// alert(`le nombre ${var1} et ${var2} sont-ils égaux ?`);    

// if (var1==var2) {
//     alert("les valeurs sont egaux");    
// }else{
//     alert("les valeurs sont deffirent");
// }

// EX-2
// let var1=prompt("enter le 1er variable ");
// let var2=prompt("enter 2eme 1er variable ");

// alert(`le nombre ${var1} et-il plus petit que le nombre ${var2} ?`);    

// if (var1 < var2) {
//     alert("la première valeures est plus petite que la seconde");    
// }else{
//     alert("la premièr valeures est plus grande que la seconde");
// }
// EX-3
// let var1=prompt("enter le 1er variable ");
// let var2=prompt("enter 2eme 1er variable ");
// let var3=prompt("enter 3eme 1er variable ");

// alert(`la somme des nombres ${var1} et ${var2} est-elle plus grande que le nombre ${var3} ?`);    

// if ((var1+var2)>var3) {
//     alert("la somme est plus grande");    
// }else{
//     alert("la somme est plus petite");    

// }
// EX-4
// let phrase=prompt("enter une phrase ");
// let istim=parseInt(prompt("estimer le nombre de caractere de ceet phrase"));
// if (istim==phrase.length) {
//     alert("Votre estimation est correct");
    
// }else{
//     alert(`Votre estimation est incorrect  tu étais à ${Math.abs(istim-phrase.length)} unités de la bonne réponse !`);
// }

// EX-5
// let pranom=prompt("enter votre pranom ");
// while (pranom.length==0 || pranom==" " ) {
//     pranom=prompt("Quel est votre prénom ?");
    
// }
// alert(`Bonjour, ${pranom}`);

// EX-6

// let conf = confirm("S'abonner ?");

// if(conf){
//     let promt1=prompt("Quelle formule vous voullez prendre Luxe ou Normal ?");
//     promt1=promt1.trim();
//     if((promt1==`Normal`)||(promt1==`Luxe`)){
//         alert("Félicitation vous ete abonné");
//         if ((promt1==`Luxe`)) {
//             alert("Félicitation vous avez choisis la formule Luxe !");
            
//         }else {
//             alert("Merci pour votre abonnement !");
//         }       
//     }
//     else{
//         alert("il faut choisir Normal ou Luxe !");
//     }
// }else{
//     let conf1 = confirm("Vous ete certaine ?");
//     if (conf1) {
//         alert("C'est dommage je te souhaiter une bonne journée !");
//     }
//     else{
//         let promt2=prompt("Quelle formule vous voullez prendre Luxe ou Normal ?");
//         promt2=promt2.trim();
//         if ((promt2==`Luxe`)) {
//             alert("Félicitation vous avez choisis la formule Luxe !");
            
//         }else if(promt2==`Normal`){
//             alert("Merci pour votre abonnement !");
//         }
//         else{
//             alert("il faut choisir Normal ou Luxe !");
//         }
//     }
// }


// EX-7

// let prom1=parseInt(prompt("5 x 5 = "));
// let prom2=parseInt(prompt("5 + 5 = "));

// let rep1=25;
// let rep2=10;

// if ((rep1!=prom1) && (rep2!=prom2)) {
//     alert("Domage vous ete échoué !");
    
// }
// else if ((rep1==prom1) || (rep2==prom2)){
//     if ((rep1==prom1) && (rep2==prom2)) {
//         alert("félicitation !!!!!!");
//     }
//     else if ((rep1==prom1) && (rep2!=prom2)){
//         alert("Bravo la premere reponce correct mais la deuxeme est fausse !")

//     }   
//     else {
//         alert("Bravo la deuxeme reponce correct mais la premere est fausse !")

//     }
// }

// EX-8
// let age=parseInt(prompt("Entrer votre Age :"));
// let date = new Date().getFullYear();
// age=date-age;
// if ( age >=18) {
//     alert("vous êtes majeur, vous pouvez réserver");
//     if(age>=100){
//         alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.");
//     }else if(age==18){
//         alert("pouvez rentrer mais c'est tout juste, n'oubliez pas que ce film peut être choquant.");
//     }
    
// }
// else if(age<=18){
//     alert("vous êtes mineur, l’accès est réservé aux grands");
//     if(age==0){
//         alert("vous n'êtes même pas nés, n'essayez pas de tricher");
//     } 

// }

// EX-9
// let promt1=confirm("est-ce que vous êtes riche ?");
// let promt2=confirm("voulez-vous partir en vacance  ?");
// let promt3=confirm("est-ce que vous avez un chat ?");

// if ((promt2==false)&&(promt3==false)&&(promt1==false)) {
//     alert("pas de problème, ne partez pas en vacance")
// }
// else if((promt1==false)||(promt3==false)){
//     alert("Même si vous le voulez, vous ne pouvez pas partir.");
// }else if((promt1==true)&&(promt3==false)){
//     alert("Vous pourriez partir en vacance si vous le voulez");
// }else if((promt1==true)&&(promt3==false)&&(promt2==true)){
//     alert("Tout est parfait, partez en vacance !");
// }
