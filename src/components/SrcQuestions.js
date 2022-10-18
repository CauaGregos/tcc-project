import React from 'react';

const SourceQuestions = (props, planet) => {

    const json = {
        'Earth': [{ // fase 1
            question: 'Traduza : * Hello * para o Inglês',
            resp: 'Olá',
            hasOptions: true,
            op1: "Olá",
            op2: "Tchau",
            op3: "Tudo bem?",
            op4: "Kitty",
            reqProgres: 0
        },
        { // fase 2
            question: 'Traduza: * Tudo bem? * para o Inglês',
            resp: 'Are you ok?',
            hasOptions: true,
            op1: "Im Fine",
            op2: "Are you ok?",
            op3: "Im Sad",
            op4: "Do you need a hug?",
            reqProgres: 0

        },
        { // fase 3 
            question: '* Hello *,  Significa " Olá " em português',
            resp: 'True',
            hasOptions: true,
            op1: 'True',
            op2: "False",
            reqProgres: 0
        },
        { // fase 4 
            question: 'Traduza: * Qual o seu nome? * para o Inglês',
            resp: 'Whats your name?',


            hasOptions: true,
            op1: "Whats your age?",
            op2: "How are you?",
            op3: "Are you married?",
            op4: "Whats your name?",
            reqProgres: 10
        },
        { // fase 5
            question: 'Traduza: * Qual a sua idade? * para o inglês',
            resp: 'Whats your age?',


            hasOptions: true,
            op1: "Whats your name?",
            op2: "How are you?",
            op3: "Im fine, and you?",
            op4: "Whats your age?",
            reqProgres: 10
        },
        { // fase 6
            question: 'Complete a frase em Inglês: \n + A) ~ Hi, How are you? \n B) _______, Thanks. And you? ',
            resp: 'Im Fine',


            hasOptions: true,
            op1: "Im married",
            op2: "My name is",
            op3: "Im Fine",
            op4: "I have money",
            reqProgres: 10
        },
        { // fase 7
            question: '*I´m fine*, em Inglês significa:',
            resp: 'Estou bem',


            hasOptions: true,
            op1: "Estou mal",
            op2: "Meu nome é...",
            op3: "Estou bem",
            op4: "Obrigado",
            reqProgres: 20
        },
        {// 8 fase
            question: '*Casado*, em Inglês é:',
            resp: 'Married',


            hasOptions: true,
            op1: "Fine",
            op2: "Married",
            op3: "Thanks",
            op4: "Alone",
            reqProgres: 20
        },
        { // fase 9
            question: '* Família * em Inglês é:',
            resp: 'Family',


            hasOptions: true,
            op1: "Age",
            op2: "Fine",
            op3: "Family",
            op4: "Home",
            reqProgres: 20
        },
        { // fase 10
            question: 'O que é * God * em Inglês:',
            resp: 'Deus',


            hasOptions: true,
            op1: "Deus",
            op2: "Mal",
            op3: "Bom",
            op4: "Bem",
            reqProgres: 30
        },
        { // fase 11 
            question: '* Estudo * em Inglês:',
            resp: 'Study',


            hasOptions: true,
            op1: "School",
            op2: "Study",
            op3: "Run",
            op4: "God",
            reqProgres: 30
        },
        { // fase 12
            // question: 'Escreva * Estou bem * em Inglês',
            // resp: 'Im fine',

            // hasOptions: false,
            // reqProgres: 30

            question: '* Estudo * em Inglês:',
            resp: 'Study',


            hasOptions: true,
            op1: "School",
            op2: "Study",
            op3: "Run",
            op4: "God",
            reqProgres: 30

        },
        { // fase 13
            question: '* Estudo * em Inglês:',
            resp: 'Study',


            hasOptions: true,
            op1: "School",
            op2: "Study",
            op3: "Run",
            op4: "God",
            reqProgres: 40
        },
        { // fase 14
            question: 'Escreva * Estou bem * em Inglês',
            resp: 'Im fine',

            hasOptions: false,
            reqProgres: 40
        },
        { // fase 15
            question: 'Complete a frase em Inglês: \n + A) How old are you? \n B) ___________, And you? ',
            resp: 'My age is 18,',


            hasOptions: true,
            op1: "My age is 18,",
            op2: "My Name is:",
            op3: "I will go to",
            op4: "Hello!",
            reqProgres: 40
        },
        { // fase 16
            question: 'O que significa * Computer * em Inglês?',
            resp: 'Computador',


            hasOptions: true,
            op1: "Video-game",
            op2: "Computador",
            op3: "Programação",
            op4: "Desenvolvedor",
            reqProgres: 50
        },
        { // fase 17
            question: 'O que significa * Monster * em Inglês?',
            resp: 'Monstro',


            hasOptions: true,
            op1: "Energético",
            op2: "Monstro",
            op3: "Pessoa",
            op4: "Feliz",
            reqProgres: 50
        },
        { // fase 18
            question: '* Posso ir ao banheiro? *, Escreva em Inglês:',
            resp: 'Can I go to the bathroom?',


            hasOptions: false,
            reqProgres: 50
        },
        { // fase 19
            question: 'Como é * Banheiro * em Inglês:',
            resp: 'Bathroom',


            hasOptions: true,
            op1: "Room",
            op2: "Home",
            op3: "Bedroom",
            op4: "Bathroom",
            reqProgres: 60
        },
        { // fase 20
            question: 'O que é * Bathroom * em Inglês:',
            resp: 'Banheiro',


            hasOptions: true,
            op1: "Quarto",
            op2: "Casa",
            op3: "Banheiro",
            op4: "Cozinha",
            reqProgres: 60
        },
        { // fase 21
            question: '* Café * em Inglês é ?',
            resp: 'Coffee',


            hasOptions: true,
            op1: "Tea",
            op2: "Coffee",
            op3: "Beer",
            op4: "Water",
            reqProgres: 60
        },
        { // fase 22
            question: '* Eu quero beber um café * em Inglês é:',
            resp: 'I want to drink a coffee',


            hasOptions: true,
            op1: "I want to drink a beer",
            op2: "I want to drink some water",
            op3: "I want to drink a coffee",
            op4: "I want to drink some Wine",
            reqProgres: 70
        },
        { // fase 23 
            question: '* Play video-game is my favorite hobbie * traduzindo pro português é:',
            resp: 'Jogar Video-game é meu hobbie favorito',


            hasOptions: true,
            op1: "Jogar futebol é meu hobbie favorito",
            op2: "Jogar cartas é meu hobbie favorito",
            op3: "Jogar Video-game é meu hobbie favorito",
            op4: "Tocar violão é meu hobbie favorito",
            reqProgres: 70
        },
        { // fase 24
            question: 'Escreva * Água * em Inglês :',
            resp: 'Water',

            hasOptions: false,
            reqProgres: 70
        },
        { // fase 25
            question: 'Escreva * Jogar * em Inglês:',
            resp: 'Play',

            hasOptions: false,
            reqProgres: 80
        },
        { // fase 26
            question: 'Escreva * beber * em Inglês:',
            resp: 'Drink',

            hasOptions: false,
            reqProgres: 80
        },
        { // fase 27
            question: 'Escreva * Inglês * em Inglês:',
            resp: 'English',

            hasOptions: false,
            reqProgres: 80
        },
        { // fase 28
            question: 'Escreva * Eu quero beber água * em Inglês:',
            resp: 'I want to drink some water',

            hasOptions: false,
            reqProgres: 90
        },
        { // fase 29
            question: 'Escreva * Brasil * em Inglês :',
            resp: 'Brazil',

            hasOptions: false,
            reqProgres: 90
        },
        { // fase 30
            question: '* Eu estou em fome * em inglês é :',
            resp: 'Im hungry',

            hasOptions: true,
            op1: "Im hungry",
            op2: "Im thirst",
            op3: "Im tired",
            op4: "Im sleepy",
            reqProgres: 90
        },
        { // fase 31
            question: 'Escreva *Eu estou com fome* em inglês:',
            resp: 'I am Hungry',

            hasOptions: false,
            reqProgres: 100
        },],
        'Mars':[
            { //fase 32
                question: '* Meu pai está com fome * em Inglês é?',
                resp:  'My Father is hungry',

                hasOptions: true,
                op1: 'My Mom is hungry',
                op2: 'My Boyfriend is hungry',
                op3: 'My Father is hungry',
                op4: 'My Dog is hungry',
                reqProgres:  0
            },
            { //fase 33
                question: 'Traduza *My Mom is cooking* pro Português \n OBS: Não esqueça dos acentos',
                resp:  'Minha mãe está cozinhando',

                hasOptions: false,
                reqProgres:  0
            },
            { //fase 34
                question: '* Eu quero jogar futebol * em Inglês é?',
                resp:  'I want to play Soccer',

                hasOptions: true,
                op1: 'I want to play Video-games',
                op2: 'I want to play Soccer',
                op3: 'I want to play Basket',
                op4: 'I want to play computer',
                reqProgres:  0
            },
            { //fase 35
                question: 'Escreva em Inglês : *  Tenha uma boa noite, senhora Maria *',
                resp:  'Have a nice night, Mrs Maria',

                hasOptions: false,
                reqProgres:  10
            },
            { //fase 36
                question: '* Tenha uma boa noite * em Inglês é?',
                resp:  'Have a nice night',

                hasOptions: true,
                op1: 'Have a good evening',
                op2: 'Have a good day',
                op3: 'Have a good afternoon',
                op4: 'Have a nice night',
                reqProgres:  10
            },
            { //fase 37
                question: '* Eu quero comer chocolate * em Inglês é? ',
                resp:  'I want to eat chocolate',

                hasOptions: true,
                op1: 'I want to eat candy',
                op2: 'I want to eat rice',
                op3: 'I want to eat chocolate',
                op4: 'I want to eat beans',
                reqProgres:  10
            },
            { //fase 38
                question: '* Eu gosto de doce * em Inglês é?',
                resp:  'I like candy',

                hasOptions: true,
                op1: 'I like candy',
                op2: 'I like salt things',
                op3: 'I like water',
                op4: 'I like ice cream',
                reqProgres:  20
            },
            { //fase 39
                question: ' Traduza * Hoje é um dia quente * para o Inglês',
                resp:  'Today is a hot day',

                hasOptions: false,
                reqProgres:  20
            },
            { //fase 40
                question: ' * I like programming * em Português é?',
                resp:  'Eu gosto de programar',

                hasOptions: true,
                op1: 'Eu gosto de comer',
                op2: 'Eu gosto de programar',
                op3: 'Eu gosto de correr',
                op4: 'Eu gosto de assistir Tv',
                reqProgres:  20
            },
            { //fase 41
                question: ' * React native é minha linguagem de programação preferida * em Inglês é?',
                resp:  'React native is my favorite programming language',

                hasOptions: true,
                op1: 'I hate React native',
                op2: 'React native is the best programming language',
                op3: 'React native is the worse programming language',
                op4: 'React native is my favorite programming language',
                reqProgres:  30
            },
            { //fase 42
                question: ' * Whats your favorite band? * Em Português é?',
                resp:  'Qual sua banda favorita?',

                hasOptions: true,
                op1: 'Qual sua banda favorita?',
                op2: 'Qual sua música favorita?',
                op3: 'Qual sua comida favorita?',
                op4: 'Qual sua bebida favorita?',
                reqProgres:  30
            },
            { //fase 43
                question: ' * Qual é a sua comida favorita? * em Inglês é?',
                resp:  'Whats your favorite food',

                hasOptions: true,
                op1: 'Whats your favorite drink?',
                op2: 'Whats your favorite food?',
                op3: 'Whats your favorite game?',
                op4: 'Whats your favorite sport?',
                reqProgres:  30
            },
            { //fase 44
                question: ' * Notebook * em Português é?',
                resp:  'Caderno',

                hasOptions: true,
                op1: 'Computador',
                op2: 'Notebook',
                op3: 'Caderno',
                op4: 'Bloco de notas',
                reqProgres:  40
            },
            { //fase 45
                question: 'Escreva em Inglês: * Meu pai ama a minha mãe *',
                resp:  'My father loves my mother',

                hasOptions: false,
                reqProgres:  40
            },
            { //fase 46
                question: 'Escreva em Inglês: * Minha mãe é casada com o meu pai *',
                resp:  'My mother is married with my father',

                hasOptions: false,
                reqProgres:  40
            },
            { //fase 47
                question: ' * Guitar * em Inglês é?',
                resp:  'Violao',

                hasOptions: true,
                op1: 'Violao',
                op2: 'Guitarra',
                op3: 'Baixo',
                op4: 'Bateria',
                reqProgres:  50
            },
            { //fase 48
                question: 'Traduza para o Português : * I like to play guitar *',
                resp:  'Eu gosto de tocar violao',

                hasOptions: false,
                reqProgres:  50
            },
            { //fase 49
                question: ' * Eletric Guitar * em Inglês é?',
                resp:  'Guitarra',

                hasOptions: true,
                op1: 'Violão Elétrico',
                op2: 'Guitarra',
                op3: 'Baixo',
                op4: 'Piano',
                reqProgres:  50
            },
            { //fase 50
                question: 'Escreva em Português: * I have a very good keyboard *',
                resp:  'Eu tenho um teclado muito bom',

                hasOptions: false,
                reqProgres:  60
            },
            { //fase 51
                question: '* Eu gostaria de ter um computador gamer * em Inglês é?',
                resp:  'I would like to have a gaming computer',

                hasOptions: true,
                op1: 'I would like to have a gaming headset',
                op2: 'I would like to have a gaming Mouse',
                op3: 'I would like to have a gaming smartPhone',
                op4: 'I would like to have a gaming computer',
                reqProgres:  60
            },
            { //fase 52
                question: 'Escreva em Inglês: * Eu gosto de jogar jogos * ',
                resp:  'I like to play games',

                hasOptions: false,
                reqProgres:  60
            },
            { //fase 53
                question: 'Escreva em Inglês: * Eu preciso correr *',
                resp:  'I need to run',

                hasOptions: false,
                reqProgres:  70
            },
            { //fase 54
                question: 'Escreva em Inglês: * Eu preciso comer *',
                resp:  'I need to eat',

                hasOptions: false,
                reqProgres:  70
            },
            { //fase 55
                question: ' * Eu estudo desenvolvimento de sistemas * Em inglês é? *',
                resp:  'I study Development Systems',

                hasOptions: true,
                op1: 'I study Development Systems',
                op2: 'I study Systems',
                op3: 'Im a Developer',
                op4: 'I study how to program',
                reqProgres:  70
            },
            { //fase 56
                question: ' * Eu gosto de assistir videos * em Inglês é?',
                resp:  'I like to watch videos',

                hasOptions: true,
                op1: 'I like to watch TV',
                op2: 'I like to watch sports',
                op3: 'I like to watch videos',
                op4: 'I like to watch music shows',
                reqProgres:  80
            },
            { //fase 57
                question: ' * I want to buy a car * em Português é?',
                resp:  'Eu quero comprar um carro',

                hasOptions: true,
                op1: 'Eu quero comprar uma moto',
                op2: 'Eu quero comprar uma van',
                op3: 'Eu quero comprar um tank',
                op4: 'Eu quero comprar um carro',
                reqProgres:  80
            },
            { //fase 58
                question: '* I want to buy a headset * em Português é?',
                resp:  'Eu quero comprar um fone',

                hasOptions: true,
                op1: 'Eu quero comprar um fone',
                op2: 'Eu quero comprar um cachorro',
                op3: 'Eu quero comprar um mouse',
                op4: 'Eu quero comprar um computador',
                reqProgres:  80
            },
            { //fase 59
                question: ' * Minha fruta favorita é Morango *  em Inglês é?',
                resp:  'My favorite fruit is Strawberry',

                hasOptions: true,
                op1: 'My favorite fruit is Banana',
                op2: 'My favorite fruit is Strawberry',
                op3: 'My favorite fruit is Apple',
                op4: 'My favorite fruit is Grape',
                reqProgres:  90
            },
            { //fase 60
                question: '* Minha fruta favorita é Uva *  em Inglês é?',
                resp:  'My favorite fruit is Grape',

                hasOptions: true,
                op1: 'My favorite fruit is Grape',
                op2: 'My favorite fruit is Apple',
                op3: 'My favorite fruit is Pear',
                op4: 'My favorite fruit is Kiwi',
                reqProgres:  90
            },
            { //fase 61
                question: 'Escreva: * Morango * Em Inglês:',
                resp:  'Strawberry',

                hasOptions: false,
                reqProgres:  100
            },

        ]  
    }
    
    
    return (json[planet][props-1])
};

export default SourceQuestions