import React, { Component } from 'react'
import Image from '../assets/RMMLogo.png'
import Image2 from '../assets/glass.jpg'

export default class Carousel extends Component {
    render() {
        return (
            <>
                <Carousel options={{ fullWidth: true }} images={[
                    {Image},
                    {Image2}
                    
                ]} />
            </>
        )
    }
}