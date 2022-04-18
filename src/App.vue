<template>
    <v-app>
        <!-- Toolbar -->
        <v-app-bar app dark>
            <v-toolbar-title>Doctorat</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn
                    text
                    v-for="item in menuItems"
                    :key="item.routeName"
                    :to="{ name: item.routeName }"
                >
                    <v-icon left dark>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>

                <switch-theme></switch-theme>
            </v-toolbar-items>
        </v-app-bar>

        <!-- Main -->
        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>

        <!-- Footer -->
        <v-footer padless dark>
            <v-card class="flex" flat tile>
                <v-card-text class="py-2 white--text text-center">
                    {{ new Date().getFullYear() }} — <strong>omly97</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
import SwitchTheme from './components/SwitchTheme.vue'

export default {
    name: 'App',
    components: { SwitchTheme },
    data() {
        return {
            menuItems: [
                { title: 'Dashboard', routeName: 'dashboard', icon: 'mdi-web' },
                { title: 'A propos', routeName: 'about', icon: 'mdi-information-outline' }
            ]
        }
    }
}
</script>
