import questoes from "./questionsData"
export default(req, res) => {
    const SelectedId = +req.query.id
    const Unique = questoes.filter(question => question.id === SelectedId)
    if(Unique.length === 1){
        const SelectedQuestion = Unique[0].ShuffleQuestion()
        const obj = SelectedQuestion.ResTo(0).toObject()
        res.status(200).json(SelectedQuestion.toObject())
    }else{
        res.status(204).send()
    }
}