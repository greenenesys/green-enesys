import { position, isDOM } from '../../lib/util'

/**
 * Calculates a position of the tooltip.
 *
 * @param {Object} tooltip - DOM element that contains a content.
 * @param {Object} target - DOM element, element id or position object.
 * @return {Object} contains 'top', 'left', and extra keys.
 */
export function getPosition(tooltip, target) {
    const gap = 12

    if (!isDOM(tooltip) || !isDOM(target)) return { left: 0, top: 0 }

    const posTarget = position(target)
    const posTooltip = position(tooltip)

    let align = 'right'
    let offset = { top: posTarget.top + posTarget.height / 2 - posTooltip.height / 2 }

    if (posTarget.left + posTarget.width / 2 >= window.innerWidth / 2) {
        align = 'left'
    }

    switch(align) {
        case 'right':
            offset.left = posTarget.left + posTarget.width + gap
            break
        case 'left':
            offset.left = posTarget.left - posTooltip.width - gap
            break
    }

    return offset
}