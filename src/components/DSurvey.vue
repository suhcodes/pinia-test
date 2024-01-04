<template>
  <SurveyComponent :model="survey" />
</template>

<script setup>
import 'survey-core/defaultV2.min.css'
import theme from '@/plugins/surveyjs/theme.json'
import { Model } from 'survey-core'

const surveyJson = {
  showQuestionNumbers: 'off',
  checkErrorsMode: 'onValueChanged',
  questionErrorLocation: 'bottom',
  elements: [
    {
      name: 'Name',
      title: 'Enter your name:',
      type: 'text',
      isRequired: true
    },
    {
      name: 'Email',
      title: 'Enter your email:',
      type: 'text',
      isRequired: true,
      validators: [{ type: 'email' }]
    }
  ]
}

const survey = new Model(surveyJson)
const submitAlert = (sender) => {
  const results = JSON.stringify(sender.data)
  alert(results)
}
survey.applyTheme(theme)
survey.onComplete.add(submitAlert)
</script>
