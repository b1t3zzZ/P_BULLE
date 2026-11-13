// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 */
export function sumRounds(numberOfRounds) {
    let sum = 0;
    for (let i = 1; i <= numberOfRounds; i++) {
        sum += i;

    }
    return sum;
}

/**
 * Compte le nombre de caractères d'un code.
 */
export function countSymbols(code) {
    let reponse = 0;

    for (let x of code) {
        reponse++;
    }

    return reponse;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 */
export function countX(code) {
    let count = 0;
    for (let x of code) {
        if (x == "X") {
            count++;
        }
    }
    return count;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 */
export function turnsBeforeEmpty(energy, consumption) {
    let cycle = 0;
    while (consumption <= energy) {
        energy -= consumption;
        cycle++;
    }
    return cycle;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 */
export function firstRoundAbove(limit) {
    let reponse = 1;
    let i = 0;

    while (i < limit) {
        i += reponse;
        reponse++;
    }
    return reponse;
}
