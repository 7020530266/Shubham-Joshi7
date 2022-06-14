

// ==================write class for movie
// class movie {

//     constructor (title, studio, rating){
    
//     this.title = title
//     this.studio = studio
//     if (rating ) {
//         this.ratng= rating;
//     }
//     else{ this.rating= "PG"}
    
//     }   
//     GetPG(moviearr){
    
     
//        for(var i=0;i<moviearr.length;i++)
//          { 
//              if (moviearr[i].rating=="PG") {
//                  console.log(moviearr[i])
//              }
            
//          }
//     };
// }
    
//     let moviearray= [{title:"Thala", studio:"Aaron", rating:"PG13"},{title:"Aaron", studio:"Aaron", rating:"PG"},{title:"Casino Rolaye", studio:"Eon Productions", rating:"PG18"}];

//     var movie = new Movie ('Casino Royale','Eon Productions','PG-13')
//     movie.GetPG(moviearray)

//==========UML circle

// class Circle{
//     constructor(radius,color){
//         this.radius=radius;
//         this.color=color;
//     }
//     get calc(){
//         console.log("The properties of the Circle are below");
//         console.log(this.getRadius());
//         console.log(this.getColor());
//         console.log(this.getCircumferance());
//         console.log(this.getArea());
//     }
//     getRadius(){
//         return this.radius;
//     }

//     setRadius(){
//         this.radius=radius;
//     }

//     getColor(){
//         return this.color;
//     }

//     setColor(){
//         this.color=color;
//     }
//     toString(){
//         return `Radius: ${this.radius} Color: ${this.color}`}
  
//  getCircumferance(){
//         return (this.radius*2*Math.PI).toFixed(2);
//     }
//     getArea(){
//         return  (Math.pow(this.radius,3)*4*Math.PI/3).toFixed(2);
//     }


// }
// var rad1=new Circle(1.0,"red");
// console.log(rad1);
// console.log(rad1.calc);
// var rad2=new Circle(5,"blue");
// console.log(rad2);
// console.log(rad2.calc);

    // //============Write a “person” class to hold all the details.
    // class Person{

    //     constructor(Name,Age,City,Country,Gender){
    
    //         this.Name=Name
    //         this.Age=Age
    //         this.City = City
    //         this.Country=Country
    //         this.Gender= Gender
    //     }
    //     getInput(){
    //         var Name = prompt("Enter Full Name");
    //         this.Name=Name
    //         var Age = prompt("Enter Age");
    //         this.Age=Age
    //         var City = prompt("Enter city name");
    //         this.City = City
    //         var Country = prompt("Enter Country name");
    //         this.Country=Country
    //         var Gender = prompt("Enter Gender");
    //         this.Gender= Gender
    //     };
      
    //     PrintOutput()
    //     {
    //         console.log(`Name = ${this.Name}`)
    //         console.log(`Age= ${this.Age}`)
    //         console.log(`City = ${this.City}`)
    //         console.log(`Country = ${this.Country}`)
    //         console.log(`Gender = ${this.Gender}`)
    //     };
    //     };
        
    //     var Person1 = new Person()
    //     Person1.getInput()
    //     Person1.PrintOutput()
        





        // //==========write a class to calculate uber price.

// class UberPrice{

//     constructor(PassengerName,Currency,Kilometers=0,FuelConsumptionInLiter=0,Price= 0){

//         this.PassengerName=PassengerName
//         this.Kilometers=Kilometers
//         this.Currency = Currency
//         this.FuelConsumptionInLiter=FuelConsumptionInLiter
//         this.Price= Price
//     }

// getInput(){
//     var Kilometers = prompt("Enter kilometers travel");
//     this.Kilometers= Kilometers;
//     var Currency = prompt("Enter Currency");
//     this.Currency= Currency;
//     var FuelConsumptionInLiter = prompt("FuelConsumptionInLiter");
//     this.FuelConsumptionInLiter= FuelConsumptionInLiter; 
// };

// calculateRidePrice(){
   
//        if (this.Kilometers == 0)
//        {
//            return false;
//        }
//             else if (this.Currency == "Ruppees")
//             {
//                this.Price = this.FuelConsumptionInLiter*this.Kilometers * 80
//             }
//                  else  (this.Currency == "dollars")
//                 {
//                    this.Price = this.FuelConsumptionInLiter*this.Kilometers * 10
//                 }
    
// };


// PrintOutput()
// {
//     console.log(`PassengerName = ${this.PassengerName}`)
//     console.log(`Currency = ${this.Currency}`)
//     console.log(`Kilometers = ${this.Kilometers}`)
//     console.log(`FuelConsumptionInLiter = ${this.FuelConsumptionInLiter}`)
//     console.log(`Price = ${this.Price}`)
// };
// };

// var UberPrice1 = new UberPrice('Shubham')
// UberPrice1.getInput()
// UberPrice1.calculateRidePrice()
// UberPrice1.PrintOutput()
