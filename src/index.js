module.exports = function toReadable(number) {
    const numbers1_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    // const numbers1_9 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numbers10_19 = ['ten', 'eleven', 'twelve', "thirteen", 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbers20_90 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const numbers100 = ['hundred']
    let str = String(number).split('');
    let index = number % 10;
    let indexForHundred = number % 100;

    for (let i = 0; i < str.length; i++) {

        if (0 <= number && number <= 9) {
            switch (number) {
                case 0:
                    return numbers1_9[0];
                    break;
                case 1:
                    return numbers1_9[1];
                    break;
                case 2:
                    return numbers1_9[2];
                    break;
                case 3:
                    return numbers1_9[3];
                    break;
                case 4:
                    return numbers1_9[4];
                    break;
                case 5:
                    return numbers1_9[5];
                    break;
                case 6:
                    return numbers1_9[6];
                    break;
                case 7:
                    return numbers1_9[7];
                    break;
                case 8:
                    return numbers1_9[8];
                    break;
                case 9:
                    return numbers1_9[9];
                    break;
            }
        } else if (10 <= number && number <= 19) {
            switch (number) {
                case 10:
                    return numbers10_19[0];
                    break;
                case 11:
                    return numbers10_19[1];
                    break;
                case 12:
                    return numbers10_19[2];
                    break;
                case 13:
                    return numbers10_19[3];
                    break;
                case 14:
                    return numbers10_19[4];
                    break;
                case 15:
                    return numbers10_19[5];
                    break;
                case 16:
                    return numbers10_19[6];
                    break;
                case 17:
                    return numbers10_19[7];
                    break;
                case 18:
                    return numbers10_19[8];
                    break;
                case 19:
                    return numbers10_19[9];
                    break;
            }
        } else if (20 <= number && number <= 99) {
            if (index === 0) {
                return `${numbers20_90[Math.floor(number / 10)]}`
            }
            return `${numbers20_90[Math.floor(number / 10)]} ${numbers1_9[index]}`
        } else if (100 <= number && number <= 999) {
            if (indexForHundred < 10) {
                if (indexForHundred === 0) {
                    return `${numbers1_9[Math.floor(number / 100)]} ${numbers100}`
                }
                return `${numbers1_9[Math.floor(number / 100)]} ${numbers100} ${numbers1_9[index]}`
            } if (10 <= indexForHundred && indexForHundred < 20) {

                return `${numbers1_9[Math.floor(number / 100)]} ${numbers100} ${numbers10_19[indexForHundred-10]}`
            } if (indexForHundred % 10 === 0) {
                return `${numbers1_9[Math.floor(number / 100)]} ${numbers100} ${numbers20_90[Math.floor(indexForHundred/10)]}`
            }
            return `${numbers1_9[Math.floor(number/100)]} ${numbers100} ${numbers20_90[Math.floor(indexForHundred/10)]} ${numbers1_9[index]}` 
        }
    }
}

