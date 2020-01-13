class RestaurantsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/restaurants'
    }
    getRestaurants() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createRestaurant() {
        const restaurant = {
            body: value,
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify({restaurant}),
        })
    }
}


