'use client'
import { Component } from 'react'
import { Crisp } from 'crisp-sdk-web'

// Define your props here
interface CrispChatProps {
  CRISP_WEBSITE_ID: string
}

class CrispChat extends Component<CrispChatProps> {
  componentDidMount() {
    const { CRISP_WEBSITE_ID } = this.props

    if (!CRISP_WEBSITE_ID) {
      throw new Error('Crisp ID is not defined')
    }
    Crisp.configure(CRISP_WEBSITE_ID)
  }

  render() {
    return null
  }
}

export default CrispChat
