import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import styled from 'styled-components'

const DivStyle = styled.div`
  width: 60%;
  height: 100%;
  min-width: 600px;
  margin-right: 10px;
  margin-left: 10px;
`

const unityContext = new UnityContext({
    loaderUrl: "../build/freny-runner-b.loader.js",
    dataUrl: "../build/freny-runner-b.data",
    frameworkUrl: "../build/freny-runner-b.framework.js",
    codeUrl: "../build/freny-runner-b.wasm",

});

export function GameCanva() {
    return (
        <DivStyle>
            <div id="game-container">
                <Unity unityContext={unityContext}/>
            </div>
        </DivStyle>
    )
}
