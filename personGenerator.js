let generatedRandomGender = '';
const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"

        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "София",
            "id_3": "Мария",
            "id_4": "Любовь",
            "id_5": "Анна",
            "id_6": "Виктория",
            "id_7": "Валерия",
            "id_8": "Ольга",
            "id_9": "Ирина",
            "id_10": "Нина"
        }
    }`,

    ProfessionMaleJson: `{
        "count": 3,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Солдат",
            "id_3": "Шахтер"
        }
    }`,

    ProfessionFemaleJson: `{
        "count": 3,
        "list": {     
            "id_1": "Швея",
            "id_2": "Медсестра",
            "id_3": "Парикмахер"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {

        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  
        return obj.list[prop];
    },

    randomGender: function() {
        
        let myArray = [this.GENDER_MALE, this.GENDER_FEMALE];
        let rand = Math.floor(Math.random() * myArray.length);
        generatedRandomGender = myArray[rand];

        return myArray[rand];

    },

    randomFirstName: function() {
        
        return generatedRandomGender == this.GENDER_MALE ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson)

    },


    randomSurname: function() {
        
        return generatedRandomGender == this.GENDER_MALE ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'a';

    },

    randomDateOfBirth: function() {
        
        randomMonthOfBirth = this.randomIntNumber(11, 1);
        if (randomMonthOfBirth == 2) {
            randomDayOfBirth = this.randomIntNumber(28, 1);
        } else if (randomMonthOfBirth == 4 || randomMonthOfBirth == 6 || randomMonthOfBirth == 9 || randomMonthOfBirth == 11){
            randomDayOfBirth = this.randomIntNumber(30, 1); 
        } else {
            randomDayOfBirth = this.randomIntNumber(31, 1);
        }
        
        randomYearOfBith = this.randomIntNumber(2023, 1900);

        let nameOfTheMonth = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'ноября',
            'декабря',
        ];

        randomMonthOfBirth = nameOfTheMonth[randomMonthOfBirth - 1] ;

        return randomDayOfBirth + ' ' + randomMonthOfBirth + ' ' + randomYearOfBith;

    },
    
    randomFatherName: function() {
        
        let generatedRandomFatherName = this.randomValue(this.firstNameMaleJson);
        let lastСharacter = generatedRandomFatherName.substring(generatedRandomFatherName.length - 1);

        if (generatedRandomGender == this.GENDER_MALE){
            if (lastСharacter == 'й'){
                return generatedRandomFatherName = generatedRandomFatherName.slice(0, generatedRandomFatherName.length - 1) + 'евич';
            } else if (generatedRandomFatherName == 'Никита'){
                return generatedRandomFatherName = generatedRandomFatherName.slice(0, generatedRandomFatherName.length - 1) + 'ович';
            } else {
                return generatedRandomFatherName = generatedRandomFatherName + 'ович';
            }
            
        } else {
            if (lastСharacter == 'й'){
                return generatedRandomFatherName = generatedRandomFatherName.slice(0, generatedRandomFatherName.length - 1) + 'евна';
            } else if (generatedRandomFatherName == 'Никита'){
                return generatedRandomFatherName = generatedRandomFatherName.slice(0, generatedRandomFatherName.length - 1) + 'овна';
            } else {
                return generatedRandomFatherName = generatedRandomFatherName + 'овна';
            }
        }

    },

    randomProfession: function() {

        return generatedRandomGender == this.GENDER_MALE ? this.randomValue(this.ProfessionMaleJson) : this.randomValue(this.ProfessionFemaleJson)

    },

    getPerson: function () {

        this.person = {};
        this.person.gander = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.firstSurname = this.randomSurname();
        this.person.dateOfBirth = this.randomDateOfBirth();
        this.person.fatherName = this.randomFatherName();
        this.person.profession = this.randomProfession();
        
        
        return this.person;
    }
};

document.getElementById('clearData').addEventListener('click', function (){

    document.getElementById('genderOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('dateOfBirthOutput').innerText = '';
    document.getElementById('fatherNameOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';

})

document.getElementById('generateData').addEventListener('click', function(){

    let initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gander;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.firstSurname;
    document.getElementById('dateOfBirthOutput').innerText = initPerson.dateOfBirth;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('professionOutput').innerText = initPerson.profession;

})