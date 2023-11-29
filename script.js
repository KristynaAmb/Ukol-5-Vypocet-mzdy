/*Vytvořte funkci salary se třemi parametry
wage - hrubá mzda v korunách za hodinuhours - kolik hodin denně průměrně pracujetedays - kolik dní v měsící průměrně pracujeteFunkce spočítá vaši hrubou měsíční mzdu v celých korunách.
Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.
Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.*/

const salary = (wage, hours, days) => 
 { return wage*hours*days}

const taxed = (salary, procento) =>
{ return (salary/100)*procento}
 taxed (salary, 15)

const plat = salary (150, 8, 20)
 const cistaMzda = plat - taxed (plat, 15)

document.body.innerHTML += `${cistaMzda}`