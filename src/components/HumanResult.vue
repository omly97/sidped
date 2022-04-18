<template>
    <v-row>
        <!-- Loading data -->
        <template  v-if="isLoading">
            <v-col cols="12" xl="3" lg="4" md="4">
                <v-skeleton-loader type="card" height="200"></v-skeleton-loader>
            </v-col>
        </template>

        <!-- Data loaded -->
        <template  v-if="!isLoading">
            <v-col cols="12" xl="3" lg="5" md="5">
                <v-card flat outlined>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Indicateur</th>
                                    <th class="text-left">Score</th>
                                    <th class="text-left">Cible</th>
                                    <th class="text-left">Ecart</th>
                                </tr>
                            </thead>
                            <tbody class="font-weight-bold">
                                <tr v-for="(item, i) in resultsComputed" :key="i">
                                    <td class="text-uppercase">{{ item.key }}</td>
                                    <td :class="item.success ? 'green--text' : 'red--text'">{{ item.score }}</td>
                                    <td class="indigo--text">{{ item.cible }}</td>
                                    <td>{{ item.ecart }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
        </template>
    </v-row>
</template>

<script>
export default {
    name: 'HumanResults',
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
        resultsComputed() {
            let dataArray = [];
            this.data.forEach(item => {
                let results = item.data.results
                results['key'] = item.key
                dataArray.push(results)
            });
            return dataArray;
        }
    },
    methods: {
        fetchData() {
            this.isLoading = true;
            this.$axios.get('/axe-humain')
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
