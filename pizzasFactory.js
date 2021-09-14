module.exports = function pizzaPerfect(){

    let totalSmall = 0;
    let totalMedium = 0;
    let totalLarge = 0;
    let sum = 0;
    let smallPizzaCounter = 0;
    let mediumPizzaCounter = 0;
    let largePizzaCounter = 0;

    
    function buySmallPizza(pizza){
        if(pizza === 'small'){
            totalSmall += 35.00;
            sum += 35.00;
            smallPizzaCounter++;
        } 
    }

    function buyMediumPizza(pizza){
        if(pizza === 'medium'){
            totalMedium += 75.00;
            sum += 75.00;
           mediumPizzaCounter++;
        } 
    }

    function buyLargePizza(pizza){
        if(pizza === 'large'){
            totalLarge += 90.00;
            sum += 90.00;
            largePizzaCounter++;
        } 
    }

    function counterForSmall(){
        return smallPizzaCounter;
    }

    function counuterForMedium(){
        return mediumPizzaCounter;
    }

    function counterForLarge(){
        return largePizzaCounter;
    }

    function smallTotal(){
        return totalSmall.toFixed(2);
    }

    function mediumTotal(){
        return totalMedium.toFixed(2);
    }
    function largeTotal(){
        return totalLarge.toFixed(2);
    }
    function grandPizza(){
        return smallTotal() + mediumTotal() + largeTotal()
    }

    return{
        buySmallPizza,
        buyMediumPizza,
        buyLargePizza,
        counterForSmall,
        counuterForMedium,
        counterForLarge,
        smallTotal,
        mediumTotal,
        largeTotal,
        grandPizza
    }

}