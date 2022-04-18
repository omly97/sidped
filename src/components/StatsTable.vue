<template>
    <v-card class="pa-3">
        <v-card-text class="text-h4">{{ keyIndicator }}</v-card-text>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Description</th>
                        <th class="text-left">Notation</th>
                        <th class="text-left">Valeur</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in stats" :key="i">
                        <td>{{ item.title }}</td>
                        <td>{{ item.notation }}</td>
                        <td>{{ item.value }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script>
export default {
    name: 'StatsTable',
    props: {
        keyIndicator: { type: String, required: true },
        stats: { type: Array, required: true }
    }
}
</script>
