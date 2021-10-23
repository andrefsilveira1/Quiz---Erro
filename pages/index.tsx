import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import Quiz from '../components/Quiz'
import AnswerModel from '../model/answer'
import questaoModel from '../model/question'

const questaox = new questaoModel(1, 'testando o enunciado',[
  AnswerModel.wrong('teste1'),
  AnswerModel.wrong('teste2'),
  AnswerModel.wrong('teste3'),
  AnswerModel.wrong('teste4'),
  AnswerModel.correct('teste5'),
])
const BASE_URL = "http://localhost:3000/api"

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [quest, setquest] = useState<questaoModel>(questaox)

  async function LoadIdQuestions(){
    const resp = await fetch(`${BASE_URL}/questionario`)
    const ids = await resp.json
    console.log(ids)
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function LoadQuestions(idQuestion:number){
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`)
    const json = await resp.json
    const newQuestion = questaoModel.fromObject(json)
    setquest(newQuestion)
    console.log(questaoModel.fromObject(json))
  
    //setIds(ids)
  }
  useEffect(() => {
    LoadIdQuestions()
  }, [])
  useEffect(() =>{
    idsDasQuestoes.length > 0 && LoadQuestions(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  const questionRef = useRef<questaoModel>()
  useEffect(()=> {
    questionRef.current = quest
  }, [quest])

  function onResponse(index: number){
    setquest(quest.ResTo(index))
    console.log(index)
  }
  function TimerEnd(){
    if(questaox.NotRespondida){
      setquest(questionRef.current.ResTo(-1))
    }
  }
  function response(){

  }
  function next(){

  }
  return (
    <Quiz
        question={quest}
        last={true}
        response={response}
        next={next}
      ></Quiz>
  )
}
