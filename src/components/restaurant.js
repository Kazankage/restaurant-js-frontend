class Restaurant {
    constructor (restaurantJSON) {
        this.id = restaurantJSON.id
        this.body = restaurantJSON.body
    }   

    renderList() {
        return `<li>${this.body}</li>`
    }
}