/**
 * Returns a position of given DOM element.
 *
 * @param {Object} el - DOM element.
 * @return {Object}
 */
export function position(el) {
    if (el === null) return { left: 0}

    const pos = el.getBoundingClientRect()
    const { pageYOffset, pageXOffset } = window
    const { scrollTop, clientTop, scrollLeft, clientLeft } = document.documentElement
    const winTop = (pageYOffset || scrollTop) - clientTop
    const winLeft = (pageXOffset || scrollLeft) - clientLeft

    return {
        top: pos.top + winTop,
        left: pos.left + winLeft,
        right: pos.right + winLeft,
        bottom: pos.bottom + winTop,
        width: pos.width,
        height: pos.height,
    }
}

/**
 * Returns the dimension of the given DOM element.
 *
 * @param {Object} el - DOM element.
 * @return {Object}
 */
export function dimension(el) {
    const rect = el.getBoundingClientRect()
    return { width: rect.width, height: rect.height }
}


/**
 * Checks if the given DOM element is a DOM node.
 *
 * @param {Object} el - DOM element.
 * @return {Boolean}
 */
export function isDOM (el) {
    return (!el || typeof el !== 'object')
        ? false
        : (typeof window === 'object' && typeof window.Node === 'object')
            ? (el instanceof window.Node)
            : (typeof el.nodeType === 'number') &&
            (typeof el.nodeName === 'string')
}