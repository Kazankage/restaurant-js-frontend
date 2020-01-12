class Restaurants {
    constructor(){
        this.restaurants = []
        this.adapter = new RestaurantsAdapter()
        //  this.bindEventListeners()
        this.fetchAndLoadRestaurants()
    }
    fetchAndLoadRestaurants() {  
        this.adapter
        .getRestaurants()
        .then(restaurants => { //console.log(restaurants)
            restaurants.forEach(restaurant => this.restaurants.push(restaurant))
          console.log(this.restaurants)
        })
            .then(() =>{
                this.render()
            })
    }

    render(){ 
        console.log ('Hello right back at you world')
        const restaurantContainer = document.getElementById('restaurant-container')
         restaurantContainer.innerHTML = "Foodie Journal"
     
        
}
}