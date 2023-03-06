import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
// import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue'
import PokemonInfo from '../views/PokemonInfo.vue'
// import MealsByLetter from '../views/MealsByLetter.vue'
// import MealsByName from '../views/MealsByName.vue'
// import MealDetails from '../views/MealDetails.vue'
// import Ingredients from '../views/Ingredients.vue'
// import MealsByArea from '../views/MealsByArea.vue'
// import MealsByCategory from '../views/MealsByCategory.vue'
// import Category from '../views/Category.vue'


const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: PokemonInfo,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
