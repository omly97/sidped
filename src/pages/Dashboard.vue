<template>
    <v-container>
        <div>Dashboard</div>
        <div class="mb-10"></div>

        <!-- Facteur Humain -->
        <template>
            <h3 class="text-h4 mb-5">Facteur Humain</h3>
            <human-result></human-result>
        </template>

        <v-divider class="my-10"></v-divider>

        <!-- Facteur Financier -->
        <template>
            <h3 class="text-h4 mb-5">Facteur Finance</h3>

            <v-tabs v-model="tab">
                <v-tabs-slider></v-tabs-slider>
                <v-tab href="#tab-1">F1</v-tab>
                <v-tab href="#tab-2">F2</v-tab>
                <v-tab href="#tab-4">F4</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab" class="transparent">
                <v-tab-item value="tab-1">
                    <finance-result-year :financekey="'f1'"></finance-result-year>
                </v-tab-item>
                <v-tab-item value="tab-2">
                    <finance-result-year :financekey="'f2'"></finance-result-year>
                </v-tab-item>
                <v-tab-item value="tab-4">
                    <finance-result-year :financekey="'f4'"></finance-result-year>
                </v-tab-item>
            </v-tabs-items>
        </template>
    </v-container>
</template>

<script>
import HumanResult from '@/components/HumanResult.vue'
import FinanceResultYear from '@/components/FinanceResultYear.vue'

export default {
    name: 'PageDashboard',
    components: { HumanResult, FinanceResultYear },
    data() {
        return {
            tab: null,
        }
    }
}
</script>
