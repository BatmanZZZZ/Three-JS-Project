import { proxy } from "valtio";
import {} from "./"

const state = proxy({
    intro :true,
    color :'#EFBD48',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:"./three.js",
    fullDecal:"./three.js",
});

export default state;