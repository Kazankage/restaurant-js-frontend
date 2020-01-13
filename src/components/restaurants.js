class Restaurants {
    constructor(){
        this.restaurants = []
        this.adapter = new RestaurantsAdapter()
        this.initatingStuffs()
        this.fetchRestaurants()
    }

    initatingStuffs(){ 
        this.restaurantContainer = document.getElementById('restaurant-container')

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