import React from 'react';

const SourceQuestions = (props) => {

    const json = [
        {
            question:'Como falar oque se fala falando oque nao falou, falando que falou',
            resp: 'adad',
            hasOptions: false
        } ,
        {
            question:'Oque tem sem ter tido é igual ter algo que ninguem nunca teve',
            resp: 'ad12312ad',
            hasOptions: false
        },
        {
            question:'Oque tem sem ter tido é igual ter algo que ninguem nunca teve',
            resp: 'ad12312ad',
            hasOptions: true,
            op1:'dasldnaskjda',
            op2:"dalsdhnaklsd"
        }   
    ]
    return(json[props])};

export default SourceQuestions