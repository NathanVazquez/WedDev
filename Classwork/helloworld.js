
let introduction = "Hello World";
console.log(introduction);

function pascalsTriangle() {

  for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
    let height = 6;
    let width = 6;
    //review string methods
    //let height = prompt("give height");
    //let width = prompt("give width");
  let line1;
  let line2;
    for( let i =0  ; i<width;i++){
      if(i%2==0){
          line2 += "#";
          line1 += " ";
      }else {
          line2 += " ";
          line1 += "#";
      }
    }
    for (let i =0;i<height;i++){
      if(i%2==0){
          console.log(line1);
      }else {
          console.log(line2);
      }
    }
}

function chessboard(){



}



