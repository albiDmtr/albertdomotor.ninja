<script>
    import viewport from './useViewportAction'
    import {sectionEnter, sectionLeave} from "./store"
    import { onMount } from 'svelte';
    import * as twgl from 'twgl.js';
    import texture from '../../assets/3d/texture.jpg';
    import depth from '../../assets/3d/depth.jpg';
    import { linkedinUrl, githubUrl } from './data';
    import { scrollToElem } from './helpers';

    let canvasElem;

    const scaling = (sx, sy) => ([
        sx, 0, 0,
        0, sy, 0,
        0, 0, 1
    ]);

    onMount(() => {
        const gl = canvasElem.getContext("webgl");
        if (!gl) return;

        let originalImage = { width: 1, height: 1 };
        const originalTexture = twgl.createTexture(gl, {
            src: texture, crossOrigin: '',
        }, (err, texture, source) => {
            originalImage = source;
        });
        
        const mapTexture = twgl.createTexture(gl, {
            src: depth, crossOrigin: '',
        });
        
        // compile shaders, link program, lookup location
        const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);

        // calls gl.createBuffer, gl.bindBuffer, gl.bufferData for a quad
        const bufferInfo = twgl.primitives.createXYQuadBufferInfo(gl);

        const [screenMidX, screenMidY] = [window.innerWidth/2, window.innerHeight/2];
        const mouse = [0, 0];
        document.addEventListener('mousemove', (event) => {
            mouse[0] = ((event.clientX - screenMidX)/screenMidX) * -0.015;
            mouse[1] = ((event.clientY - screenMidY)/screenMidY) * -0.015;
        });
            
        document.addEventListener('touchmove', (event) => {
            mouse[0] = (event.touches[0].clientX / gl.canvas.clientWidth  * 2 - 1) * -0.02;
            mouse[1] = (event.touches[0].clientY / gl.canvas.clientHeight * 2 - 1) * -0.02;
        });
            
        document.addEventListener('touchend', (event) => {
            mouse[0] = 0;
            mouse[1] = 0;
        });
            
        var nMouse = [0, 0];
        var oMouse = [0, 0];
        
        const render = () => {
            twgl.resizeCanvasToDisplaySize(gl.canvas);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.useProgram(programInfo.program);

            // calls gl.bindBuffer, gl.enableVertexAttribArray, gl.vertexAttribPointer
            twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);

            const canvasAspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
            const imageAspect = originalImage.width / originalImage.height;
            const mat = scaling(imageAspect / canvasAspect, -1);
                
            nMouse[0] += (mouse[0] - nMouse[0]) * 0.05;
            nMouse[1] += (mouse[1] - nMouse[1]) * 0.05;
                    
            // calls gl.activeTexture, gl.bindTexture, gl.uniformXXX
            twgl.setUniforms(programInfo, {
                u_matrix: mat,
                u_originalImage: originalTexture,
                u_mapImage: mapTexture,
                u_mouse: nMouse
            });
                
            // calls gl.drawArrays or gl.drawElements
            twgl.drawBufferInfo(gl, bufferInfo);
            
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
    });
</script>
<svelte:head>
    <!-- vertex shader -->
    <script id="vs" type="f">
        attribute vec2 position;
        attribute vec2 texcoord;
    
        uniform mat3 u_matrix;
    
        varying vec2 v_texcoord;
    
        void main() {
             gl_Position = vec4(u_matrix * vec3(position, 1), 1);
             v_texcoord = texcoord;
        }
    </script>
    
    <!-- fragment shader -->
    <script id="fs" type="f">
        precision mediump float;
    
        uniform vec2 u_mouse;
    
        uniform sampler2D u_originalImage;
        uniform sampler2D u_mapImage;
    
        varying vec2 v_texcoord;
    
        void main() {
             vec4 depthDistortion = texture2D(u_mapImage, v_texcoord);
             float parallaxMult = depthDistortion.r;
    
             vec2 parallax = (u_mouse) * parallaxMult;
    
             vec4 original = texture2D(u_originalImage, (v_texcoord + parallax));
             gl_FragColor = original;
        }
    </script>
</svelte:head>
<div
    class="main-container"
    id="top"
    use:viewport
    on:enterViewport={() => {sectionEnter("");}}
    on:exitViewport={() => {sectionLeave("");}}>
    
    <div class="left-side">
        <h1>Albert Dömötör</h1>
        <div class="socials">
            <a class="linkedin" href="{linkedinUrl}" target="_blank">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 6.25C5.25 5.97386 5.02614 5.75 4.75 5.75C4.47386 5.75 4.25 5.97386 4.25 6.25H5.25ZM4.25 11.75C4.25 12.0261 4.47386 12.25 4.75 12.25C5.02614 12.25 5.25 12.0261 5.25 11.75H4.25ZM8.25 6.25C8.25 5.97386 8.02614 5.75 7.75 5.75C7.47386 5.75 7.25 5.97386 7.25 6.25H8.25ZM7.25 11.75C7.25 12.0261 7.47386 12.25 7.75 12.25C8.02614 12.25 8.25 12.0261 8.25 11.75H7.25ZM12.25 8.25L12.75 8.25026L12.75 8.25L12.25 8.25ZM11.7482 11.7479C11.748 12.024 11.9718 12.248 12.2479 12.2481C12.524 12.2483 12.748 12.0245 12.7482 11.7484L11.7482 11.7479ZM7.25 9.25C7.25 9.52614 7.47386 9.75 7.75 9.75C8.02614 9.75 8.25 9.52614 8.25 9.25L7.25 9.25ZM10.25 6.24814L10.2495 5.74814L10.2495 5.74814L10.25 6.24814ZM4.75 3.25C4.47386 3.25 4.25 3.47386 4.25 3.75C4.25 4.02614 4.47386 4.25 4.75 4.25V3.25ZM4.758 3.75H5.258C5.258 3.47386 5.03414 3.25 4.758 3.25V3.75ZM4.258 3.758C4.258 4.03414 4.48186 4.258 4.758 4.258C5.03414 4.258 5.258 4.03414 5.258 3.758H4.258ZM13.1875 0.75L13.1875 1.25L13.1875 0.75ZM3.8125 0.75V1.25V0.75ZM4.25 6.25V11.75H5.25V6.25H4.25ZM7.25 6.25V11.75H8.25V6.25H7.25ZM11.75 8.24974L11.7482 11.7479L12.7482 11.7484L12.75 8.25026L11.75 8.24974ZM8.25 9.25C8.25 8.5398 8.37123 7.907 8.66608 7.46454C8.93714 7.05777 9.39605 6.74894 10.2505 6.74814L10.2495 5.74814C9.10395 5.74921 8.31286 6.1913 7.83392 6.91C7.37877 7.593 7.25 8.4602 7.25 9.25L8.25 9.25ZM10.2505 6.74814C10.6628 6.74776 10.9387 6.84932 11.1288 6.97611C11.3221 7.10502 11.4573 7.28067 11.5527 7.47173C11.649 7.66474 11.6997 7.86388 11.7255 8.01901C11.7382 8.09539 11.7444 8.15795 11.7474 8.19947C11.7488 8.22014 11.7495 8.23534 11.7498 8.24412C11.7499 8.24851 11.75 8.25128 11.75 8.2523C11.75 8.25281 11.75 8.25289 11.75 8.25251C11.75 8.25232 11.75 8.25202 11.75 8.2516C11.75 8.25139 11.75 8.25115 11.75 8.25089C11.75 8.25075 11.75 8.25053 11.75 8.25046C11.75 8.25024 11.75 8.25 12.25 8.25C12.75 8.25 12.75 8.24975 12.75 8.24949C12.75 8.24939 12.75 8.24912 12.75 8.24893C12.75 8.24854 12.75 8.24812 12.75 8.24767C12.75 8.24677 12.75 8.24574 12.75 8.24459C12.75 8.24228 12.7499 8.23948 12.7499 8.2362C12.7498 8.22965 12.7496 8.22116 12.7492 8.21087C12.7486 8.19031 12.7473 8.16246 12.7448 8.12835C12.74 8.06029 12.7305 7.96633 12.712 7.85489C12.6753 7.63438 12.601 7.3327 12.4473 7.02502C12.2927 6.71539 12.0529 6.39045 11.6837 6.14418C11.3113 5.8958 10.8372 5.7476 10.2495 5.74814L10.2505 6.74814ZM4.75 4.25H4.758V3.25H4.75V4.25ZM4.258 3.75V3.758H5.258V3.75H4.258ZM13.1875 1.25C13.8008 1.25 14.389 1.49364 14.8227 1.92732L15.5298 1.22021C14.9086 0.598995 14.066 0.25 13.1875 0.25L13.1875 1.25ZM14.8227 1.92732C15.2564 2.36099 15.5 2.94919 15.5 3.5625H16.5C16.5 2.68397 16.151 1.84142 15.5298 1.22021L14.8227 1.92732ZM15.5 3.5625V12.9375H16.5V3.5625H15.5ZM15.5 12.9375C15.5 13.5508 15.2564 14.139 14.8227 14.5727L15.5298 15.2798C16.151 14.6586 16.5 13.816 16.5 12.9375H15.5ZM14.8227 14.5727C14.389 15.0064 13.8008 15.25 13.1875 15.25V16.25C14.066 16.25 14.9086 15.901 15.5298 15.2798L14.8227 14.5727ZM13.1875 15.25H3.8125V16.25H13.1875V15.25ZM3.8125 15.25C3.19919 15.25 2.61099 15.0064 2.17732 14.5727L1.47021 15.2798C2.09142 15.901 2.93397 16.25 3.8125 16.25V15.25ZM2.17732 14.5727C1.74364 14.139 1.5 13.5508 1.5 12.9375H0.5C0.5 13.816 0.848995 14.6586 1.47021 15.2798L2.17732 14.5727ZM3.8125 0.25C2.93397 0.25 2.09142 0.598995 1.47021 1.22021L2.17732 1.92732C2.61099 1.49364 3.19919 1.25 3.8125 1.25L3.8125 0.25ZM1.47021 1.22021C0.848995 1.84142 0.5 2.68397 0.5 3.5625H1.5C1.5 2.94919 1.74364 2.36099 2.17732 1.92732L1.47021 1.22021ZM3.8125 1.25H13.1875V0.25H3.8125V1.25ZM1.5 12.9375V3.5625H0.5V12.9375H1.5Z" fill="currentColor"/>
                </svg>                                                                           
                LinkedIn
            </a>
            <a class="github" href="{githubUrl}" target="_blank">
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.45 11C9.45 11 9.95 11.5 9.95 12.5V15.5M6 11C6 11 5.5 11.5 5.5 12.5V15.5M5 13.5C5 13.5 3.5 13.5 2.5 13C1.5 12.5 1 11.5 1 11.5M9.5 11C9.5 11 12 10.5 13 9.5C14 8.5 14.5 7 14 5.5C13.5 4 13 3.5 13 3.5V2C13 1.5 12.75 1 12.75 1C12.75 1 12.5 1 11.5 1.25C10.5 1.5 10 2 10 2C10 2 8.54311 1.7 7.5 1.7C6.45689 1.7 5.5 2 5.5 2M5.86051 11.005C5.86051 11.005 3.36051 10.505 2.36051 9.50498C1.36051 8.50498 0.86051 7.00498 1.36051 5.50498C1.86051 4.00498 2.36051 3.50498 2.36051 3.50498M2.35 3.5V2C2.35 1.5 2.6 1 2.6 1C2.6 1 2.85 1 3.85 1.25C4.85 1.5 5.35 2 5.35 2" stroke="currentColor" stroke-linecap="round"/>
                </svg>                    
                GitHub
            </a>
        </div>
    </div>
    <canvas id="me" bind:this={canvasElem}></canvas>
    <div class="right-side">
        <h2>Software Engineer, Digital Systems and Design student at Aalto University</h2>
        <button class="btn-more" on:click={() => scrollToElem("about")}>
            <span>More</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>              
        </button>
    </div>

</div>
<style>
    .left-side {
        width: 400px;
        flex-shrink: 0;
        text-align: right;
    }
    .left-side h1 {
        font-size: 40px;
        font-weight: 550;
    }
    .socials {
        display: flex;
        gap: 12px;
        margin-top: 6px;
        justify-content: right;
    }
    .socials a {
        color: var(--main-brand-color);
        border: solid 1px var(--main-brand-color);
        border-radius: var(--main-border-radius);
        font-size: 14px;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        gap: 6px;
        width: fit-content;
        text-decoration: none;
        text-transform: uppercase;
        font-family: 'Geist Mono', monospace;
        font-weight: 500;
        transition: .2s;
    }
    .socials a:hover {
        background-color: white;
        border: solid 1px white;
        color: black;
        opacity: .8;
    }

    .right-side {
        width: 400px;
        flex-shrink: 0;
    }
    .right-side h2 {
        text-transform: uppercase;
        font-family: 'Geist Mono', monospace;
        font-weight: 550;
        font-size: 20px;
    }
    .btn-more {
        color: var(--main-brand-color);
        background: none;
        border: solid 1px var(--main-brand-color);
        border-radius: var(--main-border-radius);
        font-size: 14px;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 12px;
        transition: .2s;
    }
    .btn-more:hover {
        background-color: white;
        border: solid 1px white;
        color: black;
        opacity: .8;
    }
    .btn-more span {
        text-transform: uppercase;
        font-family: 'Geist Mono', monospace;
        font-weight: 500;
    }
    .btn-more svg {
        width: 18px;
        height: 18px;
    }
    #me {
        height: 80vh;
        width: 80vh;
        margin-bottom: 15vh;
        background-color: red;
    }
    .main-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* rest */
    .main-container {
        height: 100vh;
        width: 100vw !important;
        overflow: hidden;
        overflow-anchor: none;
        z-index: 1;
    }

    @media (max-aspect-ratio: 1/1) {
        /*mobile*/
        
    }
</style>