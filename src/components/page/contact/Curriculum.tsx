import React from 'react'
import CurriculumLink from './CurriculumLink'

interface CurriculumProps {
  lang: 'en' | 'pt'
}

const Curriculum = ({ lang }: CurriculumProps) => {
  if (lang === 'en') {
    return (
      <CurriculumLink
        name="English Resume"
        href="https://drive.google.com/file/d/1vcZX5LxOHDkelsbvBp3eeDzx5Ljrb7DS/view?usp=drive_link"
      />
    )
  }
  return (
    <CurriculumLink
      name="Portuguese Resume"
      href="https://drive.google.com/file/d/1JJ209MnxHEW_1jPS9ME3Z0LIQ0SknsYY/view?usp=drive_link"
    />
  )
}

export default Curriculum
