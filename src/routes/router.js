import { createRouter, createWebHistory } from "vue-router";
import DashboardComponent from '../components/DashboardComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'
import AdminComponent from '../components/AdminComponent.vue'
import ModuleComponent from '../components/ModuleComponent.vue'
import NoteComponent from '../components/NoteComponent.vue'
import IncomeExpenseComponent from '../components/IncomeExpenseComponent.vue'
import IncomeDetailComponent from '../components/IncomeDetailComponent.vue'
import ExpenseDetailComponent from '../components/ExpenseDetailComponent.vue'
import PlanComponent from '../components/PlanComponent.vue'
import PlanSuccessComponent from '../components/PlanSuccessComponent.vue'
import PlanNotSuccessComponent from '../components/PlanNotSuccessComponent.vue'
import SchoolTableComponent from '../components/SchoolTableComponent.vue'
import DailyComponent from '../components/DailyComponent.vue'



const routes = [
    {
        path: '/login',
        name: 'LoginComponent',
        component: LoginComponent
    },
    {
        path: '/dashboard',
        name: "DashboardComponent",
        component: DashboardComponent,
        meta: { requireAuth: true}
    },
    {
        path: '/admin',
        name: "AdminComponent",
        component: AdminComponent,
        meta: { requireAuth: true}
    },
    {
        path: '/modules',
        name: "ModuleComponent",
        component: ModuleComponent,
        meta: { requireAuth: true}
    },
    {
        path: '/notes',
        name: "NoteComponent",
        component: NoteComponent,
        meta: { requireAuth: true}
    },
    {
        path: '/income_expense',
        name: "IncomeExpenseComponent",
        component: IncomeExpenseComponent,
        meta: { requireAuth: true}
    },
    {
        path: '/income_details',
        name: "IncomeDetailComponent",
        component: IncomeDetailComponent,
        meta: { requireAuth: true}
    },
    {
        path: '/expense_details',
        name: "ExpenseDetailComponent",
        component: ExpenseDetailComponent,
        meta: { requireAuth: true}
    },
    {
        path: '/plan',
        name: "PlanComponent",
        component: PlanComponent,
        meta: { requireAuth: true}
    },
    {
        path: '/plan-success',
        name: "PlanSuccessComponent",
        component: PlanSuccessComponent,
        meta: { requireAuth: true}
    },
    {
        path: '/plan-not-success',
        name: "PlanNotSuccessComponent",
        component: PlanNotSuccessComponent,
        meta: { requireAuth: true}
    },
    {
        path: '/school-table',
        name: "SchoolTableComponent",
        component: SchoolTableComponent,
        meta: { requireAuth: true}
    },
    {
        path: '/dailies',
        name: "DailyComponent",
        component: DailyComponent,
        meta: { requireAuth: true}
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated =  !!localStorage.getItem('token');

    if (to.matched.some(record => record.meta.requireAuth)){
        if(!isAuthenticated){
            next('/login');
        }else{
            next();
        }
    }else{
        next();
    }
});

export default router;