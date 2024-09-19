// Array containing the botanical names of the orchids in the HTML file
const orchidNames = [
    "Amerorchis rotundifolia",
    "Platanthera dilatata",
    "Calypso bulbosa",
    "Cypripedium candidum",
    "Spiranthes romanzoffiana",
    "Corallorhiza striata",
    "Aplectrum hyemale",
    "Arethusa bulbosa",
    "Calopogon tuberosus",
    "Cephalanthera austinae",
    "Cypripedium acaule",
    "Cypripedium parviflorum",
    "Epipactis helleborine",
    "Goodyera pubescens",
    "Pogonia ophioglossoides"
];

// Function to search for an orchid by name
function searchOrchid() {
    const query = document.getElementById('search-box').value.trim();
    const validInput = /^[A-Za-z\s]+$/.test(query) && query.length <= 20;

    if (!validInput) {
        alert("Please enter a valid botanical name (letters only, max 20 characters).");
        return;
    }

    const matches = orchidNames.filter(name => name.toLowerCase().includes(query.toLowerCase()));
    const limitedMatches = matches.slice(0, 5);

    if (limitedMatches.length > 0) {
        alert("Matches found:\n" + limitedMatches.join("\n"));
    } else {
        alert("No matches found.");
    }
}

const orchidByProvince = {
    "British Columbia": ["Platanthera dilatata", "Corallorhiza striata", "Cephalanthera austinae"],
    "Alberta": ["Platanthera dilatata", "Cypripedium parviflorum", "Corallorhiza striata"],
    "Saskatchewan": ["Cypripedium candidum", "Cypripedium parviflorum", "Corallorhiza striata"],
    "Manitoba": ["Cypripedium candidum", "Cypripedium parviflorum", "Corallorhiza striata"],
    "Ontario": ["Amerorchis rotundifolia", "Cypripedium candidum", "Aplectrum hyemale", "Arethusa bulbosa", "Calopogon tuberosus", "Cypripedium acaule", "Goodyera pubescens", "Epipactis helleborine", "Pogonia ophioglossoides"],
    "Quebec": ["Amerorchis rotundifolia", "Goodyera pubescens", "Arethusa bulbosa", "Calopogon tuberosus", "Epipactis helleborine", "Pogonia ophioglossoides"],
    "New Brunswick": ["Spiranthes romanzoffiana", "Arethusa bulbosa"],
    "Nova Scotia": ["Spiranthes romanzoffiana", "Platanthera dilatata", "Calopogon tuberosus"],
    "Prince Edward Island": ["Spiranthes romanzoffiana"],
    "Newfoundland": ["Platanthera dilatata", "Calypso bulbosa", "Pogonia ophioglossoides"]
};

// Function to display orchids by province
function showOrchidsByProvince() {
    const selectedProvince = document.getElementById('province-dropdown').value;

    if (selectedProvince === "") {
        alert("Please select a province.");
        return;
    }

    const orchidsInProvince = orchidByProvince[selectedProvince];

    if (orchidsInProvince && orchidsInProvince.length > 0) {
        alert("Orchids found in " + selectedProvince + ":\n" + orchidsInProvince.join("\n"));
    } else {
        alert("No orchids found in " + selectedProvince + ".");
    }
}
