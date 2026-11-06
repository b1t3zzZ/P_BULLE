// @ts-check

/**
 * Retourne le message d'accès correspondant au niveau.
 */
export function accessMessage(level) {
  // TODO
    if(level >= 5){
        return "Accès autorisé"
    }
    else{
        return "Accès refusé"
    }

}

/**
 * Retourne l'état textuel d'une porte.
 */
export function doorStatus(isOpen) {
  // TODO
    return isOpen ? "Ouverte" : "Fermée";
}

/**
 * Retourne le nom de la zone correspondant à un code.
 */
export function zoneName(code) {
  // TODO
    switch(code) {
        case 'N': return 'Les Fondations';
        case 'E': return 'Les Archives';
        case 'SE': return 'La Forge';
        case 'SO': return 'La Citadelle';
        case 'O': return 'La Faille';
        case 'X': return 'Zone inconnue';
        default: return  'Zone inconnue' ;
    }
}

/**
 * Détermine le niveau d'alerte selon l'énergie disponible.
 */
export function alertLevel(energy) {
  // TODO
    if(energy < 20){
        return "CRITIQUE";
    }
    else if(energy >= 20 && energy <= 49){
        return "FAIBLE";
    }
    else if(energy >= 50 && energy <= 79){
        return "STABLE";
    }
    else {
        return "OPTIMAL";
    }

}
