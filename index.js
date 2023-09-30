function celciustofaranite()
{
    const celciusInput = document.getElementById("celcius");
    const faraniteResult = document.getElementById("fahreheitResult");
    const celcius =parseFloat(celciusInput.value);
    const faranite = celcius*(9/5)+32;
    faraniteResult.textContent=`Fahrenheit : ${faranite.toFixed(1)}°F`
}

function faranitetocelcius()
{
    const faraniteInput = document.getElementById("fahrenheit");
    const celciusResult = document.getElementById("celciusResult");
    const faranite = parseFloat(faraniteInput.value);
    const celcius = (faranite-32)*5/9;
    celciusResult.textContent=`Celcius : ${celcius.toFixed(1)}°C`
}