import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  padding: 20px;
`
export const MainHeading = styled.h1`
  font-size: 28px;
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-weight: bold;
  margin-bottom: 8px;
  line-height: 1.3;
  margin-bottom: 18px;
`
export const NotesContainer = styled.form`
  min-width: 85%;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px #aab8c8;
  padding: 15px;
  flex-grow: 2;
  margin-top: 18px;
  height: 190px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  color: #475569;
  font-size: 14px;
  font-family: 'Roboto';
  padding: 12px 24px;
  border: 0px;
  margin-top: 14px;
  outline: none;
`
export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #d8d8d8;
  font-family: 'Roboto';
  font-size: 14px;
  border-radius: 5px;
  padding: 10px 15px;
  align-self: flex-end;
  margin-right: 20px;
  border: none;
  outline: none;
  font-weight: 500;
`
export const NotesCardContainer = styled.ul`
  margin-top: 25px;
  min-width: %;
  list-style-type: none;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 1;
`
