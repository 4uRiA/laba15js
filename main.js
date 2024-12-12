let companion = {
    name: prompt("Вопрос о себе: Введите имя?"),
    favoriteColor: prompt("Вопрос о себе: Введите любимый цвет?"),
    favoriteFood: prompt("Вопрос о себе: Введите любимую еду?"),
    favoriteSeason: prompt("Вопрос о себе: Введите любимое время года?"),
    favoriteDrink: prompt("Вопрос о себе: Введите любимый напиток?"),
    favoriteAnimal: prompt("Вопрос о себе: Введите любимое животное?")
}

let myself = {
    name: prompt("Введите имя?"),
    favoriteColor: prompt("Вопрос о друге: Введите любимый цвет?"),
    favoriteFood: prompt("Вопрос о друге: Введите любимую еду?"),
    favoriteSeason: prompt("Вопрос о друге: Введите любимое время года?"),
    favoriteDrink: prompt("Вопрос о друге: Введите любимый напиток?"),
    favoriteAnimal: prompt("Вопрос о друге: Введите любимое животное?")
}

let compatibilityScore = 0;

if(myself.favoriteColor === companion.favoriteColor){
    compatibilityScore += 20;
}
if(myself.favoriteFood === companion.favoriteFood){
    compatibilityScore += 20;
}
if(myself.favoriteSeason === companion.favoriteSeason){
    compatibilityScore += 20;
}
if(myself.favoriteDrink === companion.favoriteDrink){
    compatibilityScore += 20;
}
if(myself.favoriteAnimal === companion.favoriteAnimal){
    compatibilityScore += 20;
}

alert("Совместимы на " + compatibilityScore + "%");

let scoreMyself = 0;
let scoreCompanion = 0;

alert("Вопросы о друге:");
if(prompt("Какой любимый цвет друга?") === myself.favoriteColor){
    scoreCompanion++;
}
if(prompt("Какая любимая еда друга?") === myself.favoriteFood){
    scoreCompanion++;
}
if(prompt("Какое любимое время года друга?") === myself.favoriteSeason){
    scoreCompanion++;
}
if(prompt("Какой любимый напиток друга?") === myself.favoriteDrink){
    scoreCompanion++;
}
if(prompt("Какое любимое животное друга?") === myself.favoriteAnimal){
    scoreCompanion++;
}

alert("Вопросы о себе:");
if(prompt("Какой мой любимый цвет?") === myself.favoriteColor){
    scoreMyself++;
}
if(prompt("Какая моя любимая еда?") === myself.favoriteFood){
    scoreMyself++;
}
if(prompt("Какое мое любимое время года?") === myself.favoriteSeason){
    scoreMyself++;
}
if(prompt("Какой мой любимый напиток?") === myself.favoriteDrink){
    scoreMyself++;
}
if(prompt("Какое мое любимое животное?") === myself.favoriteAnimal){
    scoreMyself++;
}

if(scoreCompanion > scoreMyself){
    document.write("Друг победил");
}
else if(scoreMyself > scoreCompanion){
    document.write("Автор победил");
}
else{
    document.write("Ничья");
}