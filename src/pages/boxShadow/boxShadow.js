import React from 'react'
import { useState } from 'react';
import './boxShadow.css'
import { MdContentCopy } from 'react-icons/md'
import { HiCheck } from 'react-icons/hi'

const BoxShadow = () => {

  const [hor, setHor] = useState(22);
  const [ver, setVer] = useState(33);
  const [blur, setBlur] = useState(12);
  const [spread, setSpread] = useState(3);
  const [color, setColor] = useState('#5a5a5a');
  const [icon, setIcon] = useState(<MdContentCopy size={25} color='black' />)

  console.log(hor, ver, blur, spread, color)

  const copyHandler = () => {
    navigator.clipboard.writeText(`${hor}px ${ver}px ${blur}px ${spread}px ${color}`)
    setIcon(<HiCheck size={25} color='black' />)
  }



  return (
    <div className='main'>
      <div className='box-title'>BOX SHADOW GENERATOR</div>
      <div className='box-shadow'>
        <div className='control'>
          <div className='form-group'>
            <p>Horizontaler Versatz - Horizontal offset<span>{hor}</span></p>
            <input type='range' className='slider'
              min='-200'
              max='200'
              value={hor}
              onChange={(e) => setHor(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <p>Vertikale Versatz - Vertical offset<span>{ver}</span></p>
            <input type='range' className='slider'
              min='-200'
              max='200'
              value={ver}
              onChange={(e) => setVer(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <p>Unschärfe - Blur<span>{blur}</span></p>
            <input type='range' className='slider'
              min='0'
              max='200'
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <p>Farbe Verbreitung - Color spread<span>{spread}</span></p>
            <input type='range' className='slider'
              min='-100'
              max='50'
              value={spread}
              onChange={(e) => setSpread(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <p>Farbe - Color</p>
            <input type='color' className='color'
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className='output'>
          <div className='box' style={{
            boxShadow: `${hor}px ${ver}px ${blur}px ${spread}px ${color}`
          }}>
            <p>box-shadow: {hor}px {ver}px {blur}px {spread}px {color}</p>
            <div id='icon' className='icon' onClick={copyHandler}>{icon}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxShadow