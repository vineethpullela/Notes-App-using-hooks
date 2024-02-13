import {useState} from 'react'

import {
  MainContainer,
  ContentContainer,
  MainHeading,
  NotesContainer,
  Input,
  AddButton,
  NotesCardContainer,
} from './styledComponents'
import NotesItem from '../NoteItem'

const Notes = () => {
  const [notesList, setNotesList] = useState([])

  return (
    <MainContainer>
      <ContentContainer>
        <MainHeading>Notes</MainHeading>
        <NotesContainer>
          <Input type="input" placeholder="Title" />
          <Input type="input" placeholder="Take a Note..." />
          <AddButton type="submit">Add</AddButton>
        </NotesContainer>
        <NotesCardContainer>
          <NotesItem />
          <NotesItem />
          <NotesItem />
          <NotesItem />
        </NotesCardContainer>
      </ContentContainer>
    </MainContainer>
  )
}

export default Notes
