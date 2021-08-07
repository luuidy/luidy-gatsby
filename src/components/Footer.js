import React from 'react'
import {FiTwitter} from 'react-icons/fi'
import {FaInstagram, FaFacebookF} from 'react-icons/fa'

import '../styles/components/footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="line"/>
            <div className="social">
                <FaFacebookF className="social__icon"/>
                <FiTwitter className="social__icon"/>
                <FaInstagram className="social__icon"/>
            </div>
            <div className="line"/>
        </footer>
    )
}

export default Footer
