import { Shuffle } from "../functions/arrays"
import AnswerModel from "./answer"

export default class questaoModel{
    #id: number
    #enunciado: string
    #respostas: AnswerModel[]
    #acerto: boolean
    #respondida: boolean

    constructor(id:number, enunciado: string, respostas:AnswerModel[], acerto = false){
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acerto = acerto
    }
    get id(){
        return this.#id
    }
    get enunciado(){
        return this.#enunciado
    }
    get respostas(){
        return this.#respostas
    }
    get acerto(){
        return this.#acerto
    }
    get NotRespondida(){
        return !this.#respondida
    }
    get respondida(){
        for(let resposta of this.#respostas){
            if(resposta.revelado)
            return true
        }
        return false
    }
    ResTo(index: number): questaoModel {
        const acertou = this.#respostas[index]?.certa
        const Respostas = this.#respostas.map((resp,i) => {
            const SelectedAnswer = index === i
            const MustBeShow = SelectedAnswer || resp.certa
            return MustBeShow ? resp.Show() : resp
        })
        return new questaoModel(this.id, this.enunciado, Respostas, acertou)
    }
    ShuffleQuestion(): questaoModel{
        let randomAnswer = Shuffle(this.#respostas)
        return new questaoModel(this.#id, this.#enunciado, randomAnswer, this.#acerto)
    }
    static fromObject(obj): questaoModel {
        const resps = obj.respostas.map(resp => AnswerModel.fromObject(resp))
        return new questaoModel(obj.id,obj.enunciado,resps,obj.acerto)
    }
    toObject(){
        return{
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(resp => resp.convert()),
            acerto: this.#acerto,
            respondida: this.respondida
        }
    }
}