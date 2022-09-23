var myChart;

function init() {
    console.log("init");
    document.getElementById('chartArea');
}

init();

function finalSubmit() {
    var frameValue, bodyWeightValue, skinValue, hairValue, teethValue,
        eyesValue, appetiteValue,
        diseaseTendencyValue, thirstValue, eliminationValue, vatta = 0, pitta = 0, kapha = 0;
    var frame = document.querySelector('input[name="frame"]:checked')?.value;
    var bodyweight = document.querySelector('input[name="bodyweight"]:checked')?.value;
    var skin = document.querySelector('input[name="skin"]:checked')?.value;
    var hair = document.querySelector('input[name="hair"]:checked')?.value;
    var teeth = document.querySelector('input[name="teeth"]:checked')?.value;
    var eyes = document.querySelector('input[name="eyes"]:checked')?.value;
    var appetite = document.querySelector('input[name="appetite"]:checked')?.value;
    var diseaseTendency = document.querySelector('input[name="diseaseTendency"]:checked')?.value;
    var thirst = document.querySelector('input[name="thirst"]:checked')?.value;
    var elimination = document.querySelector('input[name="elimination"]:checked')?.value;
    
    if (frame) {
        if (frame == 1) {
            frameValue = "Thin";
            vatta = vatta + 1;
        }
        if (frame == 2) {
            frameValue = "Moderate";
            pitta = pitta + 1;
        }
        if (frame == 3) {
            frameValue = "Large";
            kapha = kapha + 1;
        }
    }
    if (bodyweight) {
        if (bodyweight == 1) {
            bodyWeightValue = "Low";
            vatta = vatta + 1;
        }
        if (bodyweight == 2) {
            bodyWeightValue = "Moderate";
            pitta = pitta + 1
        }
        if (bodyweight == 3) {
            bodyWeightValue = "Heavy";
            kapha = kapha + 1;
        }
    }
    if (skin) {

        if (skin == 1) {
            skinValue = "Dry, Rough, Cool, Brown, Black";
            vatta = vatta + 1;
        }
        if (skin == 2) {
            skinValue = "Soft, Oily, Warm, Fair, Red, Yellowwish";
            pitta = pitta + 1;
        }
        if (skin == 3) {
            skinValue = "Thick, Oily, Wavy, Dark or Light";
            kapha = kapha + 1;
        }
    }
    if (hair) {

        if (hair == 1) {
            hairValue = "Black, Dry, Kinky";
            vatta = vatta + 1;
        }
        if (hair == 2) {
            hairValue = "Soft, Oily, Yellow, Early Gray, Red";
            pitta = pitta + 1;
        }
        if (hair == 3) {
            hairValue = "Thick, Oily, Wavy, Dark or Light";
            kapha = kapha + 1;
        }
    }
    if (teeth) {
        if (teeth == 1) {
            teethValue = "Potruded, Spaces Bewtwwn Crooked, Gums Emaciated";
            vatta = vatta + 1;
        }
        if (teeth == 2) {
            teethValue = "Moderate in Size, Soft or Bleeding Gums";
            pitta = pitta + 1;
        }
        if (teeth == 3) {
            teethValue = "Strong, White, Full, Well-Formed";
            kapha = kapha + 1;
        }
    }
    if (eyes) {
        if (eyes == 1) {
            eyesValue = "Small, Dry, Active, Brown, Black";
            vatta = vatta + 1;
        }
        if (eyes == 2) {
            eyesValue = "Sharp, Penetrating, Green, Gray, Yellow";
            pitta = pitta + 1;
        }
        if (eyes == 3) {
            eyesValue = "Big, Attractive, Blue, Thick, Eyelashes";
            kapha = kapha + 1;
        }
    }
    if (appetite) {
        if (appetite == 1) {
            appetiteValue = "Variable, Low";
            vatta = vatta + 1;
        }
        if (appetite == 2) {
            appetiteValue = "Good, Sharp, Excessive";
            pitta = pitta + 1;
        }
        if (appetite == 3) {
            appetiteValue = "Slow but Steady";
            kapha = kapha + 1;
        }
    }
    if (diseaseTendency) {
        if (diseaseTendency == 1) {
            diseaseTendencyValue = "Nervous Disorders, Plain";
            vatta = vatta + 1;
        }
        if (diseaseTendency == 2) {
            diseaseTendencyValue = "Heat, Infection, Inflammation";
            pitta = pitta + 1;
        }
        if (diseaseTendency == 3) {
            diseaseTendencyValue = "Excess Water, Mucus";
            kapha = kapha + 1;
        }
    }
    if (thirst) {
        if (thirst == 1) {
            thirstValue = "Variable";
            vatta = vatta + 1;
        }
        if (thirst == 2) {
            thirstValue = "Excessive";
            pitta = pitta + 1;
        }
        if (thirst == 3) {
            thirstValue = "Slight";
            kapha = kapha + 1;
        }
    }
    if (elimination) {
        if (elimination == 1) {
            eliminationValue = "Dry, Hard, Constipated";
            vatta = vatta + 1;
        }
        if (elimination == 2) {
            eliminationValue = "Soft, Oily, Loose";
            pitta = pitta + 1;
        }
        if (elimination == 3) {
            eliminationValue = "Thick, Oily, Heavy, Slow";
            kapha = kapha + 1;
        }
    }
   
    drawChart(vatta, pitta, kapha);
}

function drawChart(vatta, pitta, kapha){
    document.getElementById('chartArea').remove();
    const div = document.createElement('div');
    div.className = 'row';
    div.id ="chartArea";
    div.innerHTML = `<canvas id="myChart"></canvas>`;
    document.getElementById('quiz').appendChild(div);

    const labels = ['VATTA', 'PITTA', 'KAPHA']
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [vatta, pitta, kapha],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        },
    };
    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}
