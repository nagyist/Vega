import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  display: block;
  color: var(--color-text);
  box-sizing: border-box;
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  border: 1px solid var(--color-border);
  background-color: var(--color-input-background);
  border-radius: 8px;
  height: 16px;
  padding-left: 8px;
  caret-color: red;
  max-width: 256px;

  resize: none;
  height: 42px;

  :focus {
    outline: none;
    border-radius: 8px;
    background-color: var(--color-input-background-focus);
  }

  font-family: "Ricty Diminished";
`;
