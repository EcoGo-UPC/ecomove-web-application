import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import './style.css'

import App from './App.vue'
import router from './public/router/router'
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';

import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   
import Row from 'primevue/row';  

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import "primevue/resources/themes/lara-light-cyan/theme.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.directive('ripple', Ripple);
app.directive ('styleclass', StyleClass);

app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('InputText', InputText);
app.component('Card', Card);
app.component('DataTable', DataTable);
app.component('Column', Column); 
app.component('ColumnGroup', ColumnGroup); 
app.component('Row', Row);

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBuSs79c8S31axdcv3ACxaz635_EsnT2-I',
    libraries: "visualization"
  },
});


app.mount('#app');