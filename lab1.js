// Array containing the botanical names of the orchids
const orchidNames = [
    "Amerorchis rotundifolia",
    "Platanthera dilatata",
    "Calypso bulbosa",
    "Cypripedium calceolus",
    "Spiranthes romanzoffiana",
    "Corallorhiza maculata",
    "Dactylorhiza fuchsii",
    "Epipactis helleborine",
    "Goodyera pubescens",
    "Malaxis paludosa",
    "Neottia cordata",
    "Platanthera bifolia",
    "Cypripedium parviflorum",
    "Spiranthes cernua",
    "Gymnadenia conopsea"
];

// Function to search for an orchid by name
function searchOrchid() {
    
    // Get the value from the search box
    const query = document.getElementById('search-box').value.trim();

    // Validate the input
    const validInput = /^[A-Za-z\s]+$/.test(query) && query.length <= 20;

    if (!validInput) {
        alert("Please enter a valid botanical name (letters only, max 20 characters).");
        return;
    }

    // Filter the array to find matches
    const matches = orchidNames.filter(name => name.toLowerCase().includes(query.toLowerCase()));
    const limitedMatches = matches.slice(0, 5);

    // Display a popup with the matching botanical names
    if (limitedMatches.length > 0) {
        alert("Matches found:\n" + limitedMatches.join("\n"));
    } else {
        alert("No matches found.");
    }
}

