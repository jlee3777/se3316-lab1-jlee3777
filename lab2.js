// Event listeners to dynamically update results

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-box').addEventListener('input', updateSearchResults);
    document.querySelectorAll('.province-checkboxes input').forEach(checkbox => {
        checkbox.addEventListener('change', updateSearchResults);
    });
});


// Array containing orchid data
const orchidData = [
    {
        name: "Amerorchis rotundifolia",
        image: "images/amerorchis.jpg",
        location: ["Newfoundland", "New Brunswick", "Quebec", "Ontario", "Manitoba", "Saskatchewan", "Alberta", "British Columbia", "Yukon", "Northwest Territories"],
        otherNames: "Small Round Leaved Orchis",
        specificHabitat: "In Ottawa District, fairly open treed fens, open sedge fens, and some swamps. In Bruce Peninsula, prefers cold northern forests and shaded bogs and swamps.",
        floweringSeason: "June to early July",
        description: "Height to 15 cm. Flowers white to pale pink with deep purple spots. Petals form a hood. Leaf solitary, dull yellow-green.",
        comments: "Widespread but local in the east. Only two locations in the Bruce Peninsula, rare in Ottawa District. Highly variable lip coloration.",
        references: "Guide to Orchids of North America, Orchids of Ontario, The Orchids of Bruce & Grey",
        link: "https://en.wikipedia.org/wiki/Amerorchis_rotundifolia"
    },
    {
        name: "Aplectrum hyemale",
        image: "images/aplectrum_hyemale.jpg",
        location: ["Quebec", "Ontario"],
        otherNames: "Puttyroot",
        specificHabitat: "Rich deciduous forests on moist, shaded slopes.",
        floweringSeason: "May to June",
        description: "Leaves green, ovate, developing in fall and persisting through winter. Flowers small, brownish-purple.",
        comments: "This species is listed as endangered in some regions.",
        references: "Orchids of Ontario, The Canadian Field-Naturalist Vol III-1, The Orchids of Bruce & Grey",
        link: "https://en.wikipedia.org/wiki/Aplectrum"
    },
    {
        name: "Arethusa bulbosa",
        image: "images/arethusa_bulbosa.jpg",
        location: ["Newfoundland", "Quebec", "Ontario"],
        otherNames: "Dragon's Mouth Orchid",
        specificHabitat: "Bogs and wet meadows.",
        floweringSeason: "June",
        description: "Bright pink flowers, solitary, on short stems. Leaves are absent at flowering time.",
        comments: "Common in the northern part of its range but declining elsewhere.",
        references: "Orchids of Ontario, The Canadian Field-Naturalist Vol III-1, The Orchids of Bruce & Grey",
        link: "https://en.wikipedia.org/wiki/Arethusa_bulbosa"
    },
    {
        name: "Calopogon tuberosus",
        image: "images/calopogon_tuberosus.jpg",
        location: ["Nova Scotia", "Newfoundland", "Quebec"],
        otherNames: "Grass Pink",
        specificHabitat: "Bogs, wet prairies, and open meadows with acidic soils.",
        floweringSeason: "June to August",
        description: "Height 30-70 cm. Flowers are pink with a distinctive yellow crest. Leaves are grass-like and basal.",
        comments: "Found in acidic wetlands. Pollinated by bees attracted to its bright coloration.",
        references: "Field Guide to Orchids of North America, Orchids of Ontario",
        link: "https://en.wikipedia.org/wiki/Calopogon_tuberosus"
    },
    {
        name: "Calypso bulbosa",
        image: "images/calypso.jpg",
        location: ["Newfoundland", "New Brunswick", "Quebec", "Ontario", "Manitoba", "Saskatchewan", "Alberta", "British Columbia", "Yukon", "Northwest Territories"],
        otherNames: "Fairy Slipper",
        specificHabitat: "In the east, often found in inaccessible, damp forests. In the Ottawa District, the plants grow in calcareous cedar swamps in partially open areas in moist needle-mould.",
        floweringSeason: "May to July",
        description: "Height up to 20 cm depending on habitat. Leaf: solitary, basal, dark to bluish-green, appears in autumn. Flower: showy, solitary, pinkish-purple, rarely whitish.",
        comments: "This orchid has been largely reduced to remote colonies due to habitat destruction.",
        references: "Orchids of Ontario, The Orchids of Bruce & Grey",
        link: "https://en.wikipedia.org/wiki/Calypso_bulbosa"
    },
    {
        name: "Cephalanthera austinae",
        image: "images/cephalanthera_austinae.jpg",
        location: ["British Columbia"],
        otherNames: "Phantom Orchid",
        specificHabitat: "Deep, shaded forests.",
        floweringSeason: "June to July",
        description: "Pure white flowers with no leaves, growing on a single stalk.",
        comments: "Threatened due to habitat destruction.",
        references: "Orchids of Ontario, The Canadian Field-Naturalist Vol III-1, The Orchids of Bruce & Grey",
        link: "https://en.wikipedia.org/wiki/Cephalanthera_austinae"
    },
    {
        name: "Corallorhiza striata",
        image: "images/corallorhiza_striata.jpg",
        location: ["Quebec", "Ontario", "Manitoba", "Saskatchewan", "Alberta", "British Columbia"],
        otherNames: "Striped Coralroot",
        specificHabitat: "Dry to moist clear floors in coniferous and deciduous forests, particularly in Ontario.",
        floweringSeason: "Mid-June to early July",
        description: "Height up to 45 cm. Stem erect, stout, leafless, madder-purple to brownish-purple. Flowers are pinkish-yellow or white, striped with reddish-purple.",
        comments: "Identifiable by its distinctive red-striped flowers.",
        references: "Orchids of Ontario, The Canadian Field-Naturalist Vol III-1",
        link: "https://en.wikipedia.org/wiki/Corallorhiza_striata"
    },
    {
        name: "Cypripedium acaule",
        image: "images/cypripedium_acaule.jpg",
        location: ["Quebec", "Ontario", "Manitoba"],
        otherNames: "Pink Lady’s Slipper",
        specificHabitat: "Acidic pine forests and sandy soils.",
        floweringSeason: "May to June",
        description: "Large pink flowers, with a pouch-like lip. Leaves are basal, large, and leathery.",
        comments: "One of the most widespread lady’s slippers, yet sensitive to environmental changes.",
        references: "Orchids of Ontario, The Canadian Field-Naturalist Vol III-1",
        link: "https://en.wikipedia.org/wiki/Cypripedium_acaule"
    },
    {
        name: "Cypripedium candidum",
        image: "images/cypripedium_candidum.jpg",
        location: ["Ontario", "Manitoba", "Saskatchewan"],
        otherNames: "Small White Lady's-slipper",
        specificHabitat: "Found in marly soil of fens, shade intolerant.",
        floweringSeason: "Late May to early June",
        description: "Height up to 25 cm. Leaves 3-4, elliptic to lanceolate. Lip white with violet veins inside, sometimes purple-spotted.",
        comments: "The rarest of the lady's-slippers in Ontario.",
        references: "Orchids of Ontario, The Orchids of Bruce & Grey",
        link: "https://en.wikipedia.org/wiki/Cypripedium_candidum"
    },
    {
        name: "Cypripedium parviflorum",
        image: "images/cypripedium_parviflorum.jpg",
        location: ["Ontario", "Manitoba", "Saskatchewan"],
        otherNames: "Yellow Lady's Slipper",
        specificHabitat: "Rich woodlands, fens, and moist prairies.",
        floweringSeason: "May to July",
        description: "Yellow flowers with twisted brown sepals. Leaves are large and clasp the stem.",
        comments: "This species is common in the prairies but has declined in other regions.",
        references: "Orchids of Ontario, The Canadian Field-Naturalist Vol III-1",
        link: "https://en.wikipedia.org/wiki/Cypripedium_parviflorum"
    },
    {
        name: "Epipactis helleborine",
        image: "images/epipactis_helleborine.jpg",
        location: ["Ontario", "Quebec", "British Columbia"],
        otherNames: "Broad-leaved Helleborine",
        specificHabitat: "Disturbed areas, often near human development, such as roadsides and parks.",
        floweringSeason: "July to September",
        description: "Green to purple flowers in a dense spike. Leaves are broad and clasp the stem.",
        comments: "This non-native orchid is invasive in some regions.",
        references: "Orchids of Ontario, The Canadian Field-Naturalist Vol III-1",
        link: "https://en.wikipedia.org/wiki/Epipactis_helleborine"
    },
    {
        name: "Goodyera pubescens",
        image: "images/goodyera_pubescens.jpg",
        location: ["Ontario", "Quebec"],
        otherNames: "Downy Rattlesnake Plantain",
        specificHabitat: "Dry, sandy forests, especially in pine-dominated areas.",
        floweringSeason: "July to August",
        description: "Small white flowers arranged in a dense spiral along the spike. Leaves are basal with a distinctive white reticulation.",
        comments: "One of the most common orchids in eastern North America.",
        references: "Orchids of Ontario, The Canadian Field-Naturalist Vol III-1",
        link: "https://en.wikipedia.org/wiki/Goodyera_pubescens"
    },
    {
        name: "Platanthera dilatata",
        image: "images/platanthera.jpg",
        location: ["Newfoundland", "Nova Scotia", "Prince Edward Island", "New Brunswick", "Quebec", "Ontario", "Manitoba", "Saskatchewan", "Alberta", "British Columbia", "Yukon", "Northwest Territories"],
        otherNames: "Tall White Bog Orchid, Fragrant White Orchid, Bog Candle",
        specificHabitat: "Sunny wet terrain, primarily in boreal and mixed forest regions.",
        floweringSeason: "June to July, and as late as September.",
        description: "Height 15-65 cm. Leaves linear to lanceolate, dark green, up to 25 x 5 cm. Flowers white, vanilla or clove scented.",
        comments: "Occurs in open sedge fens. Often found alongside orchids like Pogonia ophioglossoides.",
        references: "Orchids of Blue and Grey, Orchids of Ontario, The Canadian Field-Naturalist Vol III-1",
        link: "https://en.wikipedia.org/wiki/Platanthera_dilatata"
    },
    {
        name: "Pogonia ophioglossoides",
        image: "images/pogonia_ophioglossoides.jpg",
        location: ["Ontario", "Quebec", "Newfoundland"],
        otherNames: "Rose Pogonia",
        specificHabitat: "Bogs, fens, and wet meadows.",
        floweringSeason: "June to July",
        description: "Pink flowers with a fringed lip, growing on a short stem. Leaves are lance-shaped and alternate.",
        comments: "This orchid is common in boggy habitats.",
        references: "Orchids of Ontario, The Canadian Field-Naturalist Vol III-1",
        link: "https://en.wikipedia.org/wiki/Pogonia_ophioglossoides"
    },
    {
        name: "Spiranthes romanzoffiana",
        image: "images/spiranthes_romanzoffiana.jpg",
        location: ["Newfoundland", "Nova Scotia", "Prince Edward Island", "New Brunswick", "Quebec", "Ontario", "Manitoba", "Saskatchewan", "Alberta", "British Columbia", "Yukon", "Northwest Territories"],
        otherNames: "Oval Ladies' Tresses",
        specificHabitat: "Boreal and cool temperate regions of North America. Prefers sunny, often marly places.",
        floweringSeason: "Mid July to early September, occasionally later.",
        description: "Height 7-25 cm. Flowers are tubular, white or creamy, and fragrant.",
        comments: "Widespread in Canada. Colonies are small and short-lived.",
        references: "Orchids of Ontario, The Canadian Field-Naturalist Vol III-1",
        link: "https://en.wikipedia.org/wiki/Spiranthes_romanzoffiana"
    }
];






// Function to update search results from filters
function updateSearchResults() {
    const query = document.getElementById('search-box').value.trim().toLowerCase();
    const checkedProvinces = Array.from(document.querySelectorAll('.province-checkboxes input:checked')).map(cb => cb.value);


    // Error handling for invalid inputs
    const validInputPattern = /^[a-z\s]*$/;
    if (!validInputPattern.test(query)) {
        displayError("Invalid input. Please use only letters and spaces.");
        return;
    } else {
        clearError();
    }


    // Filter orchids
    let filteredOrchids = orchidData.filter(orchid => {
        return orchid.name.toLowerCase().includes(query) &&
               orchid.location.some(province => checkedProvinces.includes(province));
    });


    // Get the search results
    const resultsContainer = document.getElementById('search-results');


    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }


    // If there are matches, display
    if (filteredOrchids.length > 0) {
        filteredOrchids.forEach(orchid => {
       
            const orchidDiv = document.createElement('div');
            orchidDiv.classList.add('orchid-item');


            const orchidName = document.createElement('h2');
            orchidName.textContent = orchid.name;
            orchidDiv.appendChild(orchidName);
   
            const orchidImage = document.createElement('img');
            orchidImage.src = orchid.image;
            orchidImage.alt = orchid.name;
            orchidDiv.appendChild(orchidImage);


            const otherNames = document.createElement('p');
            otherNames.textContent = `Other Names: ${orchid.otherNames}`;
            orchidDiv.appendChild(otherNames);


            const location = document.createElement('p');
            location.textContent = `Location: ${orchid.location.join(', ')}`;
            orchidDiv.appendChild(location);


            const specificHabitat = document.createElement('p');
            specificHabitat.textContent = `Specific Habitat: ${orchid.specificHabitat}`;
            orchidDiv.appendChild(specificHabitat);


            const floweringSeason = document.createElement('p');
            floweringSeason.textContent = `Flowering Season: ${orchid.floweringSeason}`;
            orchidDiv.appendChild(floweringSeason);


            const description = document.createElement('p');
            description.textContent = `Description: ${orchid.description}`;
            orchidDiv.appendChild(description);


            const comments = document.createElement('p');
            comments.textContent = `Comments: ${orchid.comments}`;
            orchidDiv.appendChild(comments);


            const references = document.createElement('p');
            references.textContent = `References: ${orchid.references}`;
            orchidDiv.appendChild(references);


            const moreInfoLink = document.createElement('a');
            moreInfoLink.href = orchid.link;
            moreInfoLink.target = "_blank";
            moreInfoLink.textContent = "More Info";
            orchidDiv.appendChild(moreInfoLink);
            resultsContainer.appendChild(orchidDiv);
        });




        resultsContainer.style.display = 'block';
    } else {
       
        resultsContainer.style.display = 'block';
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = "No results found. Try adjusting your search or filter options.";
        resultsContainer.appendChild(noResultsMessage);
    }
}




