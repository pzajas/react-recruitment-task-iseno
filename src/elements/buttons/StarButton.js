import styled from "styled-components"
import { StarFill } from "@styled-icons/bootstrap/StarFill"

const StyledStarButton = styled(StarFill)`
  height: 1rem;
`

const StarButton = ({ className }) => {
  return <StyledStarButton className={className} />
}

export default StarButton
