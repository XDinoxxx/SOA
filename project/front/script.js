async function fetchHotel() {
    try {
        const response = await fetch('http://localhost:3001/hotels');
        const hotels = await response.json();

        renderHotelList(hotels);
    } catch (error) {
        console.error('Ошибка при загрузке данных', error);
    }
}

function renderHotelList(hotels) {
    if (!Array.isArray(hotels)) {
        console.error('Некорректные данные от API:', hotels);
        return;
    }

    const allHotelsSelect = document.querySelector('.all-hotels');
    allHotelsSelect.innerHTML = '<option value="">Выберите отель</option>'; 

    hotels.forEach(hotel => {
        const hotelOption = document.createElement('option');
        hotelOption.value = hotel.id; 
        hotelOption.textContent = hotel.name; 

        allHotelsSelect.appendChild(hotelOption);
    });

    const showInfoButton = document.querySelector('.show-info-button-hotel');
    showInfoButton.addEventListener('click', () => {
        const selectedHotelId = parseInt(allHotelsSelect.value, 10); 
        const selectedHotel = hotels.find(hotel => hotel.id === selectedHotelId); 

        if (selectedHotel) {
            renderHotelInfo(selectedHotel); 
        } else {
            document.querySelector('.info-hotel').innerHTML = '<p>Пожалуйста, выберите отель из списка.</p>';
        }
    });
}

function renderHotelInfo(hotel) {
    const infoHotelDiv = document.querySelector('.info-hotel');
    infoHotelDiv.innerHTML = `
        <h2>${hotel.name}</h2>
        <p><strong>Описание:</strong> ${hotel.description}</p>
        <p><strong>Адрес:</strong> ${hotel.address}</p>
        <p><strong>Город:</strong> ${hotel.city}</p>
        <p><strong>Ценовая категория:</strong> ${hotel.price_category}</p>
        <p><strong>Рейтинг:</strong> ${hotel.rating || 'Нет данных'}</p>
    `;
    
}

async function fetchRestaurant() {
    try {
        const response = await fetch('http://localhost:3002/restaurant/');
        const restaurant = await response.json();

        renderRestaurantList(restaurant);
    } catch (error) {
        console.error('Ошибка при загрузке данных', error);
    }
}

function renderRestaurantList(restaurant) {
    if (!Array.isArray(restaurant)) {
        console.error('Некорректные данные от API:', restaurant);
        return;
    }

    const allRestaurantsSelect = document.querySelector('.all-restaurant');
    allRestaurantsSelect.innerHTML = '<option value="">Выберите ресторан</option>'; 

    restaurant.forEach(restaurantItem => {
        const restaurantOption = document.createElement('option');
        restaurantOption.value = restaurantItem.id; 
        restaurantOption.textContent = restaurantItem.name; 

        allRestaurantsSelect.appendChild(restaurantOption);
    });

    const showInfoButton = document.querySelector('.show-info-button-restaurant');
    showInfoButton.addEventListener('click', () => {
        const selectedRestaurantId = parseInt(allRestaurantsSelect.value, 10);
        const selectedRestaurant = restaurant.find(restaurantItem => restaurantItem.id === selectedRestaurantId); 

        if (selectedRestaurant) {
            renderRestaurantInfo(selectedRestaurant); 
        } else {
            document.querySelector('.info-restaurant').innerHTML = '<p>Пожалуйста, выберите ресторан из списка.</p>'; 
        }
    });
}

function renderRestaurantInfo(restaurant) {
    const infoRestaurantDiv = document.querySelector('.info-restaurant');
    infoRestaurantDiv.innerHTML = `
        <h2>${restaurant.name}</h2>
        <p><strong>Описание:</strong> ${restaurant.description}</p>
        <p><strong>Адрес:</strong> ${restaurant.address}</p>
        <p><strong>Город:</strong> ${restaurant.city}</p>
        <p><strong>Ценовая категория:</strong> ${restaurant.price_category}</p>
        <p><strong>Рейтинг:</strong> ${restaurant.rating || 'Нет данных'}</p>
    `;
}


window.addEventListener('DOMContentLoaded', fetchRestaurant);
window.addEventListener('DOMContentLoaded', fetchHotel);