import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';

const Tooltip = ({ id, visible, onHintClose, dataTitle, children }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'top',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['bottom', 'right', 'left'],
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 15],
        },
      },
    ],

    //modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  // const mountInfoHintTitle = () => {
  //   // If a hinfoHintTitle was going to be unmounted, we unmount it now.
  //   if (ongoingTimeout) {
  //     this.flushUngoingTimeout();
  //   }
  //   this.hinfoHintTitleInstance = createPopper(
  //     this.target,
  //     this.hinfoHintTitleContent,
  //     {
  //       placement: 'top',
  //       scroll: false,
  //       resize: false,
  //       modifiers: [
  //         {
  //           name: 'flip',
  //           options: {
  //             fallbackPlacements: ['bottom', 'right', 'left'],
  //           },
  //         },
  //         {
  //           name: 'offset',
  //           options: {
  //             offset: [0, 15],
  //           },
  //         },
  //       ],
  //     }
  //   );
  // };
  //
  // const flushUngoingTimeout = () => {
  //   clearTimeout(ongoingTimeout);
  //   Reflect.deleteProperty(this, 'ongoingTimeout');
  //   unmountInfoHintTitle();
  // };

  // const renderTooltip = (id, visible, onHintClose, dataTitle) => {
  //   // const { translation } = {};//this.state;
  //
  //   return (
  //     <div
  //       // ref={(el) => (this.hinfoHintTitleContent = el)}
  //       data-show={visible}
  //       className="info-hint__title"
  //       id={id}
  //     >
  //       {dataTitle}
  //       <div
  //         /*ref={(el) => (this.arrowEl = el)}*/ className="arrow"
  //         data-popper-arrow
  //       />
  //       <div className="cta-container">
  //         <div
  //           className="cta-container__text"
  //           onClick={(e) => onHintClose(e)}
  //         ></div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      {children && children({ targetRef: referenceElement })}
      {/*<button type="button" ref={setReferenceElement}>*/}
      {/*  Reference element*/}
      {/*</button>*/}

      <div
        ref={popperElement}
        data-show={visible}
        className="info-hint__title"
        id={id}
      >
        {dataTitle}
        <div ref={setArrowElement} className="arrow" data-popper-arrow />
        <div className="cta-container">
          <div
            className="cta-container__text"
            onClick={(e) => onHintClose(e)}
          ></div>
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     {children && children({})}
  //     <button type="button" ref={setReferenceElement}>
  //       Reference element
  //     </button>
  //
  //     <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
  //       Popper element
  //       <div ref={setArrowElement} style={styles.arrow} />
  //     </div>
  //   </>
  // );

  // return (
  //   <>
  //     {children && children({})}
  //     {renderTooltip(id, visible, onHintClose, dataTitle)}
  //   </>
  // );
};

Tooltip.propTypes = {
  id: PropTypes.string,
  children: PropTypes.func,
  dataTitle: PropTypes.string.isRequired,
  onHintClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Tooltip;
