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
    loaderUrl: "BuildFreny/freny-d-disabled.loader.js",
    dataUrl: "BuildFreny/freny-d-disabled.data",
    frameworkUrl: "BuildFreny/freny-d-disabled.framework.js",
    codeUrl: "BuildFreny/freny-d-disabled.wasm",

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
