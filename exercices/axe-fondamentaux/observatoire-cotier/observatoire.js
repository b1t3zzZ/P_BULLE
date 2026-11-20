// @ts-check

/**
 *
 * @param value N'importe lequel valeur
 * @returns {"undefined"|"object"|"boolean"|"number"|"string"|"function"|"symbol"|"bigint"} Retourne le type de value
 */
export function dataType(value) {
  return typeof value;
}

/**
 *
 * @param count N'importe lequel valeur
 *
 * @returns {boolean} Retourne true si c'est undefined et false pour le reste
 *
 */
export function isNotTransmitted(count) {
    return count === undefined;
}

/**
 *
 * @param count N'importe lequel valeur
 * @returns {boolean} Retourne true si c'est undefined et false pour le reste
 */
export function isOffline(count) {
  return count === null;
}

/**
 *
 * @param count N'importe lequel valeur
 *
 * @returns {boolean} Retourne true si ce n'est pas undefined et null
 *
 */
export function hasBirdCount(count) {
  return count !== undefined && count !== null;
}

/**
 *
 * @param northCount Soit le nombre, soit undefined/null
 *
 * @param southCount Soit le nombre, soit undefined/null
 *
 * @returns {number} le nombre calculer, undefind/null = 0
 *
 */
export function totalBirds(northCount, southCount) {
    let value1 = northCount ?? 0;
    let value2 = southCount ?? 0;

    return value1 + value2;
}

/**
 *
 * @param height Le nombre de la hauteur des vagues
 *
 * @returns {boolean} True si height est le nombre
 *
 */
export function isValidWaveHeight(height) {
    return Number(height) === height ;
}
