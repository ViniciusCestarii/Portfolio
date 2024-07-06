'use client'
import { Box, Button, Theme, useMediaQuery } from '@mui/material'
import TechnologyItem from './TechnologyItem'
import { DictionaryProps } from '@/dictionaries/getDictionary'
import { useState } from 'react'

const TechnologiesList = ({ dict }: DictionaryProps) => {
  const [showMore, setShowMore] = useState(false)

  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const { technologyItens } = dict.section.knowledge

  const technologiesToShow = showMore
    ? technologyItens
    : technologyItens.slice(0, isSm ? 4 : 12)

  return (
    <>
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-around' },
          flexWrap: 'wrap',
          position: 'relative',
          gap: { xs: '1.5rem', sm: '2rem' },
        }}
      >
        {technologiesToShow.map((technology) => (
          <TechnologyItem key={technology.title} {...technology} />
        ))}
      </Box>
      <Button
        variant="outlined"
        onClick={() => setShowMore(true)}
        sx={{
          display: showMore ? 'none' : 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 'fit-content',
        }}
      >
        {dict.section.knowledge.showMore}
      </Button>
    </>
  )
}

export default TechnologiesList
