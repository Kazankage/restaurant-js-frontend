
class RestaurantsAdapter {
    constructor() {

        this.baseUrl = 'http://localhost:3000/api/v1/restaurants'
    }
    getRestaurants() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createRestaurant(value) {
        const restaurant = {
            body: value,
        }
    
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({restaurant}),
        }).then(res => res.json())
    }

    updateValue(value, id){
        const restaurant = {
            body: value,
        }
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({restaurant}),
        }).then(res => res.json())
    }
    deleteRestaurant(e) {
        const id = e.target.dataset.id
        fetch(`${this.baseUrl}/${id}`, {
          method: 'DELETE'
        })
          .then(() => {
            document.getElementById('restaurant-container')
              .removeChild(document.getElementById(id))
          })
      }

}

const app = new App()

