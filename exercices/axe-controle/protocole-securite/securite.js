// @ts-check

/**
 *
 * @param energy Le nombre d'énergie
 *
 * @returns {*} Retourne l'énergie
 *
 */


export function validateEnergy(energy) {
    if (energy < 0) {
        throw new Error("Énergie invalide");
    } else {
        return energy;
    }

}

/**
 *
 * @param energy Le nombre d'energie
 *
 * @returns {string} Text selon le résultat
 *
 */


export function safeEnergyCheck(energy) {
    try {
        if (validateEnergy(energy)) {
            return "Énergie valide";
        }
    } catch (e) {
        return "Énergie invalide"
    }
}

/**
 *
 * @param code Le code "ALPHA", "BETA", "OMEGA"
 *
 * @returns {string} Retourne le code entré, sinon une erreur
 *
 */


export function validateGateCode(code) {
    switch (code) {
        case "ALPHA":
            return "ALPHA";
        case "BETA":
            return "BETA";
        case "OMEGA":
            return "OMEGA";
        default:
            throw new Error("Code inconnu");
    }
}

/**
 *
 * @param code Le code
 *
 * @returns {string} Reponse si code est accepté ou pas
 *
 */

export function safeGateCheck(code) {
    try{
        validateGateCode(code)
        return "Code accepté";
    }catch(e){
        return "Code refusé";
    }
}

/**
 *
 * @param text Le text de tentative
 *
 * @returns {number} Le nombre de tentatives valides
 *
 */
export function countValidAttempts(text) {
    let count = 0;
    for(let i of text) {
        if(i == "A" || i == "B"){
            count++;
        }
    }
    return count;
}

/**
 *
 * @param sequence Le text de tentative
 *
 * @returns {number} Le nombre total de tentatives traitées avant le verrouillage inclus.
 *
 */

export function attemptsBeforeLock(sequence) {
    let countOfFault = 0;
    let countOfLength = 0;

    for(let i of sequence) {
        if( countOfFault >= 3 ){
            return countOfLength;
        }
        else if( i === "X" ){
            countOfFault++;
            countOfLength++;
        }
        else if( i === "V"){
            countOfLength++;
        }
        if( sequence.length === countOfLength ){
            return countOfLength;
        }
    }

}
