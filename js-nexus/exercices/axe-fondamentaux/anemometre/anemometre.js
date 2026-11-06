// @ts-check

// TODO : déclarer la constante de conversion entre les km/h et les m/s
const KM_EN_M = 3.6;

/**
 * Convertit une vitesse de km/h en m/s.
 */
export function kmhToMs(speedKmh) {
  return speedKmh /= KM_EN_M;
}

/**
 * Calcule l'écart entre une rafale et le vent moyen.
 */
export function gustGap(gustKmh, averageKmh) {
  return gustKmh - averageKmh;
}

/**
 * Calcule la moyenne de trois mesures.
 */
export function averageOfThree(speed1, speed2, speed3) {
  return (speed1 + speed2 + speed3) / 3;
}

/**
 * Indique si le vent atteint au moins 75 km/h.
 */
export function isStormAlert(speedKmh) {
  return speedKmh >= 75 ? true : false;
}

/**
 * Construit le bulletin météo d'une station.
 */
export function windReport(station, speedKmh) {
    let speedMs = speedKmh / KM_EN_M;
  return  station + " : vent de " + speedKmh + " km/h (" + speedMs + " m/s)." ;
}
