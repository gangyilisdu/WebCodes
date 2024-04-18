// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '@/components/RegisterPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import MainLayout from "@/components/MainLayout.vue";
import GContent from "@/components/GenshinImpact/GContent.vue";
import SContent from "@/components/StarRail/SContent.vue";
import ZContent from "@/components/ZenlessZoneZero/ZContent.vue";
import GRecordsAnalysis from "@/components/GenshinImpact/GRecordsAnalysis.vue";
import SRecordsAnalysis from "@/components/StarRail/SRecordsAnalysis.vue";
import ZRecordsAnalysis from "@/components/ZenlessZoneZero/ZRecordsAnalysis.vue";
import GRecordsPrediction from "@/components/GenshinImpact/GRecordsPrediction.vue";


const routes = [
    { path: '/', redirect: '/MainLayout' },

    { path: '/RegisterPage', component: RegisterPage, name: 'RegisterPage' },
    { path: '/LoginPage', component: LoginPage, name: 'LoginPage' },
    {
        path: '/MainLayout',
        component: MainLayout,
        children: [
            { path: '/GContent', component: GContent, children: [
                { path: '/GContent/GRecordsAnalysis', component: GRecordsAnalysis, name: 'GRecordsAnalysis' },
                { path: '/GContent/GRecordsPrediction', component: GRecordsPrediction, name: 'GRecordsPrediction' },
                ] },
            { path: '/SContent', component: SContent, children: [
                { path: '/SContent/SRecordsAnalysis', component: SRecordsAnalysis, name: 'SRecordsAnalysis' },
                ] },
            { path: '/ZContent', component: ZContent, children: [
                { path: '/ZContent/ZRecordsAnalysis', component: ZRecordsAnalysis, name: 'ZRecordsAnalysis' },
                ] },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
