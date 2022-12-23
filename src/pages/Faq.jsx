import React from 'react'
import Header from '../components/Header'

import { tokens } from '../theme'
import { useTheme, Box } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ExpandMoreIcon } from '../data/icons'

function FaqPanel({ question, answer, expanded }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Accordion
      className="mt-6"
      defaultExpanded={expanded}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ color: colors.greenAccent[400] }}
      >
        <h3>{question}</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p>{answer}</p>
      </AccordionDetails>
    </Accordion>
  )
}

export default function Faq() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <div className="m-6 h-full flex flex-col">
      <Header
        title="FAQ"
        subtitle="Frequently Asked Questions"
      />

      <FaqPanel
        expanded={true}
        question="An important question"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />

      <FaqPanel
        expanded={true}
        question="A more important question"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />

      <FaqPanel
        expanded={true}
        question="A somewhat important question"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />

      <FaqPanel
        expanded={true}
        question="Yet another important question"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
    </div>
  )
}
