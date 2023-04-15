import { TitleContainer } from "./styles"

export const Title = ({ children, name }) => {
  return (
    <TitleContainer>
      {children}
      <span>{name}</span>
    </TitleContainer>
  )
}