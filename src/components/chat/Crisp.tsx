'use client'
import { Component } from 'react'

import { Crisp } from 'crisp-sdk-web'

class CrispChat extends Component {
  componentDidMount() {
    if (!process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID) {
      throw new Error('Crisp ID is not defined')
    }
    Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID)
  }

  render() {
    return null
  }
}
export default CrispChat
