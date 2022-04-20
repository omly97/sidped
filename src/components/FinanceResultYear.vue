<template>
    <v-row justify="center" align="center">
        <!-- Loading data -->
        <template  v-if="isLoading">
            <v-col cols="12" xl="6" lg="6" md="6">
                <v-skeleton-loader type="table"></v-skeleton-loader>
            </v-col>

            <v-col cols="12" xl="6" lg="6" md="6">
                <v-skeleton-loader type="image"></v-skeleton-loader>
            </v-col>
        </template>

        <!-- Data loaded -->
        <template  v-if="!isLoading">
            <v-col cols="12" xl="6" lg="6" md="6">
                <v-card flat outlined color="transparent">
                    <v-simple-table class="transparent">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Annee</th>
                                    <th class="text-left">Score</th>
                                    <th class="text-left">Cible</th>
                                    <th class="text-left">Ecart</th>
                                </tr>
                            </thead>
                            <tbody class="font-weight-bold">
                                <tr v-for="(item, i) in tableDataComputed" :key="i">
                                    <td class="text-uppercase">{{ item.annee }}</td>
                                    <td :class="item.success ? 'green--text' : 'red--text'">{{ item.score }}</td>
                                    <td class="indigo--text">{{ item.cible }}</td>
                                    <td>{{ item.ecart }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>

            <v-col cols="12" xl="6" lg="6" md="6">
                <bar-chart 
                    :chart-data="chartDataComputed"
                    :chart-options="chartOptionsComputed"
                    :width="800"
                    :height="500"
                ></bar-chart>
            </v-col>
        </template>
    </v-row>
</template>

<script>
import BarChart from './charts/BarChart.vue';

export default {
  components: { BarChart },
    name: 'FinanceResultYear',
    props: {
        financekey: { type: String, required: true }
    },
    data() {
        return {
            data: [],
            isLoading: false,
        }
    },
    created() {
        this.fetchData()
    },
    computed: {
        tableDataComputed() {
            let dataArray = [];
            this.data.data.forEach(item => {
                dataArray.push({
                    annee: item['Année'],
                    score: item['score'],
                    cible: item['cible'],
                    ecart: item['ecart'],
                    success: item['success']
                })
            });
            return dataArray;
        },
        chartDataComputed() {
            let labels = [];
            let data = [];
            this.data.data.forEach(item => {
                labels.push(item['Année'])
                data.push(item['score'])
            });
            return  {
                labels: labels,
                datasets: [
                    {
                        label: 'Score',
                        backgroundColor: '#00D8FF',
                        data: data
                    }
                ]
            }
        },
        chartOptionsComputed() {
            return {
                responsive: true
            }
        }
    },
    methods: {
        fetchData() {
            this.isLoading = true;
            this.$axios.get(`/axe-finance/${this.financekey}`)
                .then(response => {
                    this.data = response;
                })
                .catch(error => {
                    console.error(error);
                    // this.$swal({ icon: 'error', title: 'Oops...', text: error.message, });
                })
                .finally(() => {
                    this.isLoading = false
                })
        },
    }
}
</script>
