import React from "react"
import { Icon } from "@chakra-ui/react"

const CustomMenuIcon = props => {
  return (
    <Icon {...props}>
      <path
        fill="currentColor"
        d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
      />
    </Icon>
  )
}

export default CustomMenuIcon
