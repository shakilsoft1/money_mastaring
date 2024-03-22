const calculateExpense = () => {
    const income=document.querySelector('#income').value;
    const  food=document.querySelector('#food').value;
    const rent=document.querySelector('#rent').value;
    const clothes=document.querySelector('#clothes').value;

    if(income<0 ||income=="" || food<0 ||food=="" || rent<0 ||rent=="" ||clothes<0 ||clothes=="")
    {
        alert("Inputs must be positive numbers");
        return;
    }

    const expenses=parseInt(food)+parseInt(rent)+parseInt(clothes);

    const balaance=parseInt(income)-expenses;

    if(expenses>income.value)
    {
        alert("Expenses cannot be more than income");
        return;
    }
    else
    {
        document.getElementById('total-expense').innerText=expenses;
        document.getElementById('balance').innerText=balaance;
    }


}

const calculateSavings=()=>{
    const income=document.querySelector('#income').value;
    // calculate saving amount
    const saveParcentage=document.getElementById('save').value;
    //   Validate saving percentage value
    if(saveParcentage<0)
    {
        alert("Provide positive saving value");
        return;
    }
    console.log(income,saveParcentage);
    const savingAmmount=(saveParcentage/100)*income;
     // calculate remaining balance
     const balance=document.getElementById('balance').innerText;
     const remainingBalance=balance-savingAmmount;

     //   validate saving amount
     if(savingAmmount<0)
    {
        alert("SavingAmount is greater than balance");
        return;
    }
    else
    {
        document.getElementById('saving-amount').innerText=savingAmmount;
        document.getElementById('remaining-balance').innerText=remainingBalance;
    }
}

