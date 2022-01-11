function bmiCalculator (weight, height) {
    var yourBmi= weight/(height*height);
    if (yourBmi < 18.5) {
        return "You are underweight";
    }
    if (yourBmi >= 18.5 && yourBmi <= 24.9) {
        return "You are normal";
    }

    if (yourBmi >= 25 && yourBmi <= 29.9) {
        return "You are overweight";
    }

    if (yourBmi >= 30 && yourBmi <= 34.9) {
        return "You are obese";
    }

    if (yourBmi >=  35) {
        return "You are extremely obese";
    }
}

bmiCalculator(104,1.55);
