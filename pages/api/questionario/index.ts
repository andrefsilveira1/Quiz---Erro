import questoes from "../questionsData"
import { Shuffle } from "../../../functions/arrays"
export default (req, res) =>{
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(Shuffle(ids))
}