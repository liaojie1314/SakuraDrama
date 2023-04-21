<template>
    <div class="mascot">
        <div class="ear">
        </div>
        <div class="body">
            <a href="" class="ran-gif">
                <img src="../assets/img/xx.gif" style="opacity: 1;" alt="">
            </a>

        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='less'>
.mascot {
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 100;
    width: 110px;
    transform: scale(.91);
    height: 200px;
    cursor: pointer;
    transition: transform .6s;
    transform-origin: left bottom;

    .ear {
        height: 26px;
        z-index: 1001;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAA0CAMAAADWk6ZcAAAAt1BMVEX///8VFRX9/f0dHR3v7+/19fXFxcWSkpJCQkI+Pj46OjoqKiolJSUgICAbGxvo6Ojl5eXU1NS9vb24uLizs7Ovr6+BgYFwcHBgYGBbW1tISEgYGBjY2NjQ0NDJycmrq6ukpKSEhIR8fHx5eXllZWVTU1NPT081NTUvLy/6+vr5+fny8vLq6urh4eHa2trBwcG1tbWPj4+Ojo6Hh4d1dXVsbGxMTEzr6+vc3NzKysqdnZ2ampqYmJiReY9kAAACR0lEQVRo3u3XiW6yQBAA4JldEAFRQFHEG6TerWfv93+uPyZ/E9PKlMMsNtnvATbM7OzMAJIkSZIkSZIkSZIk/TlLe7j1hgrcgDL0tkN7CXdCdbxdJ9aNeNdnUBDr72JDjzs7z1GhdGrfO/iGhWdm520BhSzeOiaeWYZ/8PqlxsfWrjY1OH6x/Eqh6JYV38Iv3Jhq7ppBOZjdCoMaXuLdCitwYKXL8VItCFt2KeEpbqTX8Rt+6kNu/RPHb+p65CogGnvVAo4/mdoKclppJv7EA+2VgVDMieZ41fMT5PT0jFfNI0dsdI1JDa+z2mvIZd228LrapAFC0Fk+qzZz5Zk1q4hIVIM4IwOT1KNceW5EdUxijECk0QwT6S0GmbGWjolmYoMjagjrYSPHxYV1JCodRBp0MVl1C5ltq5isOwCRlDaRaB6+QEYvISdKoa2ASIx6dBi4kJEbIPXkGAjl+JjMmmRMtTKxMJnvgFjqnvqchwpkUnmgUrVXQSi6X2Jtr2bLVA3vplee2Z0e2d9u1nt7HRtEY+8mJjM/lpDa8oM86p2BcMMYCdNHSO1xioR4CMLRow5n49T5ZuMZ3s+Q+88zqJdytCEl+0i9XsODMtDVVG1m6rt0fYunalQD5xMl7QDn1FDRVCiFGyA5yDMNcHqTE69x7NE5L37/vWMDysHGcyy8Ejo+EuZjBiUZdFN+GJ2g+/mTu7Q6cHJv2sCvNuQWxw8rKE1LR4LeuuEJ4m1OSOBt5fc1hyPhtIHyLD5NehoUmwPm5wKK+AfzHCrIg0ondgAAAABJRU5ErkJggg==)
    }

    .body {
        position: relative;
        height: 174px;
        background-image: url(../assets/img/body2.png);
    }

    .body,
    .ear {
        width: 110px;
        background-repeat: no-repeat;
        -background-repeat-x: no-repeat;
        -background-repeat-y: no-repeat;
        background-size: cover;
    }

    .ran-gif {
        position: absolute;
        width: 75px;
        height: 42px;
        left: 18px;
        top: 19px;
        text-align: center;
        border-radius: 8px;
        overflow: hidden;
        background-color: #000;
    }
}
</style>