height=parseInt(prompt('Enter The Hieght in Centimetrs'))
weight=parseInt(prompt('Enter The Wieght in KiloGrams'))
bmi=(weight/((height)/100)**2)
do{
    if (bmi<18.5)
    {
        alert(Your BMI Reading ${bmi}-UnderWeight)
    }
    else if(bmi>19 && bmi<24.9)
    {
        alert(Your BMI Reading ${bmi}-Normal Weight)
    }
    else if(bmi>25 && bmi<29.9)
    {
        alert(Your BMI Reading ${bmi}-OverWeight)
    }
    else{
        alert(Your BMI Reading ${bmi}-Obesity)
    }
    again=prompt("Do you want calculate again ? YES/NO")
    
}while(again=='Yes')