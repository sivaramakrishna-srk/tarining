random=Math.floor(Math.random()*50 +1) 
count=5
while(count>0)
    {
     guess=parseInt(prompt('Guess The Number'))
        if (guess>random)
        {
            alert(Try Lower Number.Left Chances ${count-1})
        }
        else if(guess<random)
        {
            alert(Try Higher Number.Left Chances ${count-1})
        }
        else{
            alert('Congratulations! You Matched The Number')
            break;
        }
        count-=1
    }
if (count==0){
    alert(Sorry ! You ran out of your Chances.The Number was ${random})
}