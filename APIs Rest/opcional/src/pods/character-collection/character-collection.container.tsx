import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { linkRoutes } from '#core/router'
import { useCharacterCollection } from './character-collection.hook'
import { CharacterCollectionComponent } from './character-collection.component'

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection()
  const navigate = useNavigate()

  React.useEffect(() => {
    loadCharacterCollection()
  }, [])

  const handleShowCharacter = (id: string) => {
    navigate(linkRoutes.showCharacter(id))
  }

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onShow={handleShowCharacter}
    />
  )
}
