class Restaurants {
    constructor(){
        this.restaurants = []
        this.adapter = new RestaurantsAdapter()
        this.initBindingAndListeners()
        this.fetchRestaurants()
    }


    initBindingAndListeners(){ 
        this.restaurantContainer = document.getElementById('restaurant-container')
        this.newRestaurantBody = document.getElementById('new-restaurant-body')
        this.restaurantForm = document.getElementById('new-restaurant-form')
        this.restaurantForm.addEventListener('submit', this.createRestaurant.bind(this))
        this.restaurantContainer.addEventListener('dblclick', this.toggleRestaurant.bind(this))
        this.restaurantContainer.addEventListener('blur', this.updateRestaurant.bind(this), true)
        }
        

    deleteRestaurant(){
        let elem = document.getElementById("data-id");
        elem.parentNode.removeChild(elem);
    }

   clickingStuff(){
       this.toggleRestaurant(e)
   }
    
    toggleRestaurant(e){
        const li = e.target
        li.contentEditable = true
        li.focus()
        li.classList.add('editable')
    }
    updateRestaurant(e) {
         
        const li = e.target
        li.contentEditable = false
        li.classList.remove('editable')
        const newValue = li.innerHTML
        const id = li.dataset.id
      /*     if (li.innerHTML = "")
        {
            delete dataset.id
        }
        */
        this.adapter.updateValue(newValue,id)

        
    }

    createRestaurant(e) { 
        e.preventDefault() 
        const value = this.newRestaurantBody.value

        this.adapter.createRestaurant(value).then(restaurant => {
            this.restaurants.push(restaurant)
            this.newRestaurantBody.value = ''
            this.render()
        })
    }

    fetchRestaurants() {  
        this.adapter
        .getRestaurants()
        .then(restaurants => { 
            restaurants.sort((a,b) => a.id - b.id)
            .forEach(restaurant => 
                this.restaurants.push(restaurant))//new Restaurant(restaurant)))
        })
            .then(() => {
                this.render()
            })
    }

    render(){ 
      
        this.restaurantContainer.innerHTML = 
        this.restaurants.map(restaurant => `<li data-id = ${restaurant.id}>${restaurant.body}</li>`).join('')
        // restaurant.renderList()
     
    }
}

class App {
    constructor() {
        this.restaurants = new Restaurants()
    }
} 

/*
class Restaurant {
    constructor (restaurantJSON) {
        this.id = restaurantJSON.id
        this.body = restaurantJSON.body
    }   

    renderList() {
        return `<li data-id=${this.id}>${this.body}</li>`
    }
}
*/