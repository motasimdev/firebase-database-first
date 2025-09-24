import React from 'react'

const Image = ({className, src, alt, ...rest}) => {
  return (
    <img className={`${className}`} src={src} alt={alt} {...rest}/>
  )
}

export default Image