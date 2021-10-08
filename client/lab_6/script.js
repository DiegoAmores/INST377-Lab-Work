async function windowActions(event){
    const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const request = await fetch(url);
    const restaurants = await request.json();

    function findMatches(wordToMatch, restaurants){
        return restaurants.filter(place => {

            const regex = new RegExp(wordToMatch, 'gi');
            return place.category.match(regex) || place.zip.match(regex) || place.name.match(regex) || place.city.match(regex); 
        });
    }

    function displayMatches(event){
        const matchArray = findMatches(event.target.value, restaurants);

        if(!event.target.value){
            document.querySelector('.suggestions').innerHTML = '';
            
        } else {
            const html = matchArray.map(place => {
                const regex = new RegExp(event.target.value, 'gi');

                return `
                <li>
                    <span class = "name">${place.name}</span>
                    <br>
                    <span class = "category">${place.category}</span>
                    <br>
                    <span class = "address">${place.address_line_1}</span>
                    <br>
                    <span class = "city">${place.city}</span>
                    <br>
                    <span class = "zipcode">${place.zip}</span>
                </li>
                <br>
                `;

            }).join('');
            suggestions.innerHTML = html;
        }
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', (evt) => {displayMatches(evt)});

}

window.onload = windowActions;