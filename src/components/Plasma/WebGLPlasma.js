import React from 'react'
import { Shaders, Node, GLSL } from 'gl-react'
import { Surface } from 'gl-react-dom'


const shaders = Shaders.create({
    helloGL: {
        // This is our first fragment shader in GLSL language (OpenGL Shading Language)
        // (GLSL code gets compiled and run on the GPU)
        frag: GLSL`
            #define AA 4.
            precision highp float;
            uniform vec2 resolution;
            uniform float time;

            #define CI vec3(1, 0.77, 0.22)
            #define CM vec3(0.)
            
            float metaball(vec2 p, float r)
            {
                return r / dot(p, p);
            }
            
            vec3 samplef(in vec2 uv)
            {
                float t0 = sin(time * 1.9) * .46;
                float t1 = sin(time * 2.4) * .29;
                float t2 = cos(time * 1.4) * .57;
            
                float r = metaball(uv + vec2(t1, t2), .63) *
                          metaball(uv - vec2(t0, t1), .67) *
                          metaball(uv + vec2(t1, t2), .59) ;
            
                vec3 c = r < .1 ? CM : CI;
            
                return c;
            }
            
            void main()
            {
                vec2 uv = (vec2(gl_FragCoord.x, gl_FragCoord.y) / resolution.xy * 2. - 1.) * vec2(resolution.x / resolution.y, 1) * 1.25;
            
                vec3 col = vec3(0);
            
            #ifdef AA
                // Antialiasing via supersampling
                float e = 1. / min(resolution.y, resolution.x);    
                for (float i = -AA; i < AA; ++i) {
                    for (float j = -AA; j < AA; ++j) {
                        col += samplef(uv + vec2(i, j) * (e/AA)) / (4.*AA*AA);
                    }
                }
            #else
                col += sample(uv);
            #endif /* AA */
                gl_FragColor = vec4(clamp(col, 0., 1.), clamp(col, 0., 1.).x < 0.8 ? .0 : clamp(col, 0., 1.).x);
            }
        
        `
    // the main() function is called FOR EACH PIXELS
    // the varying uv is a vec2 where x and y respectively varying from 0.0 to 1.0.
    // we set in output the pixel color using the vec4(r,g,b,a) format.
    // see GLSL_ES_Specification_1.0.17
    }
})

export default class WebGLPlasma extends React.Component {

    state = {
        tick: 1
    }

    componentDidMount() {
        this.startLoop()
    }

    startLoop = () => {
        console.log('hello')
        const loop = (time) => {
            requestAnimationFrame(loop)
            this.setState({
              tick: this.state.tick + 0.01
            })
        }
        requestAnimationFrame(loop)
    }


    render() {
        const data = {
            resolution: [600.0, 600.0],
            time: 1.0
        }

        return (
            <Surface width={400} height={400}>
                <Node shader={shaders.helloGL} uniforms={{ resolution: data.resolution, time: this.state.tick }}/>
            </Surface>
        )
    // Surface creates the canvas, an area of pixels where you can draw.
    // Node instanciates a "shader program" with the fragment shader defined above.
    }
}