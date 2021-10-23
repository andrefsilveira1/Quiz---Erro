export default class AnswerModel{
    #value: string
    #certa: boolean
    #revelado: boolean
    
    constructor(value: string, certa: boolean, revelado = false){
        this.#value = value
        this.#certa = certa
        this.#revelado = revelado
    }
    static correct(value: string){
        return new AnswerModel(value,true)
    }
    static wrong(value: string){
        return new AnswerModel(value,false)
    }

    get value(){
        return this.#value
    }
    get certa(){
        return this.#certa
    }
    get revelado(){
        return this.#revelado
    }
    Show(){
        return new AnswerModel(this.#value, this.#certa, true)
    }
    static fromObject(obj: AnswerModel): AnswerModel {
        return new AnswerModel(obj.value, obj.certa, obj.revelado)
    }
    convert(){
        return{
            value: this.#value,
            certa: this.#certa,
            revelado: this.#revelado
        }
    }
}