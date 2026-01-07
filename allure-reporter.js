const AllureJest = require('allure-jest');

/**
 * Node 24+ peut retourner le reporter de 3 manières différentes
 * selon la configuration du système. On les teste toutes.
 */
let Reporter;

if (typeof AllureJest === 'function') {
    // Cas classique
    Reporter = AllureJest;
} else if (AllureJest.default && typeof AllureJest.default === 'function') {
    // Cas ESM (le plus probable sur Node 24)
    Reporter = AllureJest.default;
} else if (AllureJest.AllureJest && typeof AllureJest.AllureJest === 'function') {
    // Cas alternative v3
    Reporter = AllureJest.AllureJest;
} else {
    throw new Error("Impossible de trouver le constructeur Allure. Contenu reçu : " + typeof AllureJest);
}

module.exports = Reporter;