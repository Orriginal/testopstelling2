import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import MyWebComponent from './components/MyWebComponent/MyWebComponent.vue';
import AButton from "@/components/Button/AButton.vue";

const WrappedElement: any = wrap(Vue, MyWebComponent);
const AButtonWrapped: any = wrap(Vue, AButton);

window.customElements.define('my-web-component', WrappedElement);
window.customElements.define('a-button', AButtonWrapped);
