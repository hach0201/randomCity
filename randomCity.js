// Créer un tableau de villes
const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
 ];

// Définir une fonction qui sélectionne aléatoirement une ville du tableau
function selectRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}

// Définir une fonction qui fait un appel API asynchrone pour récupérer les données de température pour la ville sélectionnée
// En utilisant des promesses et async/await
async function laTemperature(city) {
    try{
        // Définir l'URL de l'API en utilisant le paramètre city
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&hourly=temperature_2m`;
        // Utiliser la méthode fetch pour faire l'appel API et retourner une promesse
        const response = await fetch(url);
        // Vérifier si la réponse est réussie
        if (response.ok){
            // Convertir la réponse en JSON et retourner une autre promesse
            const data = await response.json();
            // Extraire la valeur de température des données
            const temperature = data.hourly.temperature_2m[0];
            // Afficher le nom de la ville et sa valeur de température à l'utilisateur
            console.log(`La température à ${city.name} est ${temperature} °C.`);
        } else {
            // Lancer une erreur si la réponse n'est pas réussie
            throw new Error (`Erreur : ${response.status}`);
        }
    } catch (error) {
        // Afficher le message d'erreur s'il y en a un
        console.log(error.message);
    }
}

// Appeler les fonctions pour les tester
const city = selectRandomCity(cities);
laTemperature(city);



