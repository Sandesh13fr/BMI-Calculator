let result = document.querySelector("#results")
let button = document.querySelector("button")
let BMI;
let color
button.addEventListener("click",(e)=>{
        e.preventDefault()
        let height =parseInt(document.querySelector("#height").value)
        let weight =parseInt(document.querySelector("#weight").value) 
        if (isNaN(height) || height <= 0) {
            result.textContent="Enter proper values for height"
        } else if(isNaN(weight) || weight <= 0 ){
            result.textContent="Enter proper values for weight"
        } else {
            BMI=weight/((height/100)*(height/100))   
            let category = BMIcategory()
            result.innerHTML=`Your BMI is: ${BMI.toFixed(2)} <br><span style="color:${color};">${category}</span> `
        }
    })

    function BMIcategory(){
        if (BMI< 18.6) {
            color = "blue"
            return "You are Underweight."
        } else if(BMI>=18.6 && BMI <= 24.9){
            color = "yellow"
            return "You are You have a normal BMI."
        } else{
            color = "crimson"
            return "You are Overweight."
        }
    }