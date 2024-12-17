async function fetchHotelsAndRestaurants() {
    try {
        const hotelResponse = await fetch('http://localhost:3001/hotels');
        const hotels = await hotelResponse.json();

        const restaurantResponse = await fetch('http://localhost:3002/restaurant/');
        const restaurants = await restaurantResponse.json();

        const selectHotel = document.querySelector('.select-hotel');
        selectHotel.innerHTML = '<option value="">Выберите отель</option>';  

        hotels.forEach(hotel => {
            const option = document.createElement('option');
            option.value = hotel.id;
            option.textContent = hotel.name;
            option.setAttribute('data-city', hotel.city);
            option.setAttribute('data-price-category', hotel.price_category);
            selectHotel.appendChild(option);
        });

        document.querySelector('.show-restaraunts').addEventListener('click', () => {
            const selectedHotelId = document.querySelector('.select-hotel').value;
            if (selectedHotelId) {
                const selectedHotelElement = document.querySelector('.select-hotel').selectedOptions[0];
                const selectedCity = selectedHotelElement.getAttribute('data-city');
                const selectedPriceCategory = selectedHotelElement.getAttribute('data-price-category');
                
                const filteredRestaurants = restaurants.filter(restaurant => 
                    restaurant.city === selectedCity && restaurant.price_category === selectedPriceCategory
                );

                const sortedRestaurants = filteredRestaurants.sort((a, b) => b.rating - a.rating);

                renderRestaurantList(sortedRestaurants);
            } else {
                document.querySelector('.restaurants-ascending').innerHTML = '<p>Пожалуйста, выберите отель из списка.</p>';
            }
        });
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}

function renderRestaurantList(restaurants) {
    const container = document.querySelector('.restaurants-ascending');
    container.innerHTML = '';  

    if (restaurants.length === 0) {
        const noRestaurantsMessage = document.createElement('p');
        noRestaurantsMessage.textContent = 'Нет ресторанов для отображения.';
        container.appendChild(noRestaurantsMessage);
        return;
    }

    restaurants.forEach(restaurant => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('restaurant');
        restaurantDiv.innerHTML = `
            <h5>${restaurant.name}</h5>
            <p>Рейтинг: ${restaurant.rating}</p>
            <p>Адрес: ${restaurant.address}</p>
            <p>Категория: ${restaurant.price_category}</p>
        `;
        container.appendChild(restaurantDiv);
    });
}

window.addEventListener('DOMContentLoaded', fetchHotelsAndRestaurants);
