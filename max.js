// Find max value
let businessMan = 800;
let primeMinister = 900;
let secretary = 700;

if (businessMan > primeMinister) {
    if (businessMan > secretary) {
        console.log("businessMan is greater");
    }
    else {
        console.log("secretary is greater");
    }
} else {
    if (primeMinister > secretary) {
        console.log('primeMinister is greater');
    } else {
        console.log("secretary is greater");
    }

}

// Another Way
let maxValue = Math.max(businessMan, primeMinister, secretary);
console.log(maxValue);