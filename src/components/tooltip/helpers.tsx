import * as React from 'react'

export const showTooltipOnClick = (children: React.ReactNode, showClick: boolean, setShowClick: React.Dispatch<React.SetStateAction<boolean>>) => {
  return React.Children.map(
    children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          onClick: () => {
            setShowClick(!showClick);
            if (child.props.onMouseClick) {
              child.props.onClick(event);
            }
          }
        })
      } else {
        return <span onClick={ () => setShowClick(!showClick)}> { child } </span>
      }
    }
  )
}

export const showTooltipOnHover = (children: React.ReactNode, setShowHover: React.Dispatch<React.SetStateAction<boolean>>) => {
  return React.Children.map(
    children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          onMouseEnter: () => {
            setShowHover(true)
            if (child.props.onMouseEnter) {
              child.props.onMouseEnter(event);
            }
          },
          onMouseLeave: () => {
            setShowHover(false)
            if (child.props.onMouseLeave) {
              child.props.onMouseLeave(event);
            }
          }
        })
      } else {
        return <span onMouseEnter={ () => setShowHover(true)} onMouseLeave={ () => setShowHover(false)} > { child } </span>
      }
    }
  )
}
