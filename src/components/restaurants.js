class Restaurants {
    constructor(){
        this.restaurants = []
        this.adapter = new RestaurantsAdapter()
        this.initatingStuffs()
        this.fetchRestaurants()
    }

    initatingStuffs(){ 
        this.restaurantContainer = document.getElementById('restaurant-container')
        this.newRestaurantBody = document.getElementById('new-restaurant-body')
        this.restaurantForm = document.getElementById('new-restaurant-form')
        this.restaurantForm.addEventListener('submit', this.createNote.bind(this))
    }

    createNote(x) {
        x.preventDefault()
        const value = this.newRestaurantBody.value

        this.adapter.createRestaurant(value)
    }

    fetchRestaurants() {  
        this.adapter
        .getRestaurants()
        .then(restaurants => { 
        
            restaurants.forEach(restaurant => this.restaurants.push(restaurant))//new Restaurant(restaurant)))
            
        })
            .then(() => {
                this.render()
            })
    }

    render(){ 
    
        this.restaurantContainer.innerHTML = this.restaurants.map(restaurant => `<li>${restaurant.body}</li>`).join('') // restaurant.renderList()
     
        
}
}