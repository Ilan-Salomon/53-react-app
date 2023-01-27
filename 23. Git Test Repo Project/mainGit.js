//test git dif

console.log("");
console.log("------------------------");
console.log("Mystery Organism Project");
console.log("--------RESULT----------");
console.log("");

let newNum = [0, 1, 2];
let ArrOfpAequor = [];

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//console.log(mockUpStrand());

const isNewNum = num => {
  let counter = 0;
  for (let i = 0; i < newNum.length ; i++){
    //console.log(i);
      if (newNum[i] === num){
        counter++

  }}
  if (counter > 0){
    return false;
  } else {
    newNum.push(num);
    return true;
  }
};

const pAequorFactory = (num, arr) => {
  //Fell free to commented this for the task number 7, this calls the function isNewNum, to check that the specimenNum will not be repeated when the user enters data calling the function.
  if (isNewNum(num) === true){
  console.log("true");
  return { 
    specimenNum: num,
    dna: arr 
  }
//I commented this for the task number 7
} else {
  console.log("false");
  return "number already exists"
}
};
//console.log(newNum);
//let dnaArray = pAequorFactory(5, mockUpStrand());
//console.log(dnaArray);

const mutate = obj => {
  const strIfA = ['C', 'T', 'G']
  const strIfC = ['T', 'A', 'G']
  const strIfT = ['A', 'G', 'C']
  const strIfG = ['A', 'T', 'C']
  let num = Math.floor(Math.random() * obj.dna.length);
  let lett = obj.dna[num];
  console.log(num);
  console.log(lett);
  if (lett === "A"){
  return obj.dna[num] = strIfA[Math.floor(Math.random() * strIfA.length)]
  } else if (lett === "T"){
    return obj.dna[num] = strIfT[Math.floor(Math.random() * strIfT.length)]
  } else if (lett === "G"){
    return obj.dna[num] = strIfG[Math.floor(Math.random() * strIfG.length)]
  } else if (lett === "C"){
    return obj.dna[num] = strIfC[Math.floor(Math.random() * strIfC.length)]
  }
}

//console.log(mutate(dnaArray));
//console.log(dnaArray.dna.length);
//console.log(dnaArray.dna);

//let replaceDnaArray = dnaArray.dna[0]
//console.log(replaceDnaArray);
//dnaArray.dna[0] = "B"
//console.log(dnaArray);

/*
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn'; //this will update fall that is the 4th index item

For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again. 
*/

const compareDNA = () => {
let ex1 = pAequorFactory(7, mockUpStrand());
console.log(ex1.dna);
let ex2 = pAequorFactory(8, mockUpStrand());
console.log(ex2.dna);
let counterA = 0;
  for (let i = 0; i < ex1.dna.length; i++){
    //console.log(ex1.dna[i]);
   if (ex1.dna[i] === ex2.dna[i]){
      counterA++
    }
  }
console.log("")
console.log("specimen #1 and specimen #2 have " + (counterA/15*100) + "% DNA in common.")
//console.log(counterA)
console.log("")
}

compareDNA();

const willLikelySurvive = () => {
let ex1 = pAequorFactory(9, mockUpStrand());
console.log(ex1.dna);
let counter = 0;
for (let i = 0; i < ex1.dna.length; i++){
  //console.log(ex1.dna[i]);
 if (ex1.dna[i] === "C" || ex1.dna[i] === "G"){
    counter++
  }
}
console.log(counter/15*100);
if (counter/15*100 >= 60){
  return true
} else {
  return false
}
};

console.log(willLikelySurvive());


const makeThirtyObjects = num => {
  for (let i = 100; i < num+100; i++){
    console.log(i);
    console.log("text");
    ArrOfpAequor.push(pAequorFactory(i, mockUpStrand()).dna);
  }
};

makeThirtyObjects(100000000);
console.log(ArrOfpAequor)








console.log("--------RESULT----------");
console.log("");
console.log("");
console.log("");

