import AnswerModel from "../../model/answer"
import questaoModel from "../../model/question"

const questoes: questaoModel[] = [
    new questaoModel(306, 'Em que ano o Brasil se tornou Pentacampeão de Futebol?',[
        AnswerModel.wrong('1970'),
        AnswerModel.wrong('1958'),
        AnswerModel.wrong('1982'),
        AnswerModel.wrong('1994'),
        AnswerModel.correct('2002'),
    ]),
    new questaoModel(307, 'Qual é a cidade brasileira conhecida como "cidade do sol"?',[
        AnswerModel.wrong('Rio de Janeiro'),
        AnswerModel.wrong('Fortaleza'),
        AnswerModel.wrong('São Paulo'),
        AnswerModel.wrong('Foz do Iguaçu'),
        AnswerModel.correct('Natal')
    ]),
    new questaoModel(308, 'Quem foi o primeiro homem a pisar na Lua?',[
        AnswerModel.wrong('Yuri Gagarin'),
        AnswerModel.wrong('Buzz Aldrin'),
        AnswerModel.wrong('Elon Musk'),
        AnswerModel.wrong('Jeff Bezos'),
        AnswerModel.correct('Neil Armstrong')
    ]),
    new questaoModel(309, 'Qual o maior piloto brasileiro de Fórmula 1 ?',[
        AnswerModel.wrong('Fittipaldi'),
        AnswerModel.wrong('Lewis Hamilton'),
        AnswerModel.wrong('Pietro Fittipaldi'),
        AnswerModel.wrong('Bruno Senna'),
        AnswerModel.correct('Ayrton Senna')
    ])

]
export default questoes