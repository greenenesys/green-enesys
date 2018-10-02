import React from 'react'
import * as PIXI from 'pixi.js'

function ThresholdFilter() {
    PIXI.Filter.call(this,
        null,
        [
            'precision mediump float;',
            'varying vec2 vTextureCoord;',
            'uniform sampler2D uSampler;',
            'uniform float threshold;',
            'void main(void)',
            '{',
            '    vec4 color = texture2D(uSampler, vTextureCoord);',
            '    vec3 mcolor = vec3(255.0/255.0, 73.0/255.0, 92.0/255.0);',
            '    if (color.a > 40) {',
            '       gl_FragColor = vec4(mcolor, 1.0);',
            '    } else {',
            '       gl_FragColor = vec4(vec3(0.0), 0.0);',
            '    }',
            '}'
        ].join('\n'),
        {
            threshold: { type: '1f', value: 0.5 }
        }
    )
}

ThresholdFilter.prototype = Object.create(PIXI.Filter.prototype)
ThresholdFilter.prototype.constructor = ThresholdFilter
Object.defineProperties(ThresholdFilter.prototype, {
    threshold: {
        get: function () {
            return this.uniforms.threshold.value;
        },
        set: function (value) {
            this.uniforms.threshold.value = value;
        }
    }
})

let renderer = new PIXI.Application(100, 120, {
    antialias: true,
    transparent: true,
    resolution: 2,
    powerPreference: "high-performance"
})
renderer.renderer = PIXI.WebGLRenderer
renderer.autoResize = true
document.body.appendChild(renderer.view)

let stage = new PIXI.Container()

let blurFilter = new PIXI.filters.BlurFilter()
blurFilter.blur = 10
blurFilter.autoFit = true

let particleCon = new PIXI.particles.ParticleContainer(500, {
    scale: true,
    position: true,
    rotation: false,
    uvs: false,
    alpha: false
})
stage.addChild(particleCon)

let thresholdFilter = new ThresholdFilter()
stage.filters = [blurFilter, thresholdFilter]
stage.filterArea = renderer.screen

const graphics = new PIXI.Graphics()
graphics.beginFill('0xFF3300')
graphics.drawCircle(40, 40,30)
graphics.drawCircle(40, 80,30)

export default class PixiPlasma extends React.Component {
    state = {}

    componentDidMount() {
        this.renderer = renderer
        this.wrapper.appendChild(this.renderer.view)
        this.renderer.stage.filters = [blurFilter, thresholdFilter]
        this.renderer.stage.addChild(graphics)
    }


    render () {
        return (
            <div ref={el => this.wrapper = el}>
                Hello
            </div>
        )
    }
}