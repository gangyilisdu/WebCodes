import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            user: null,
            selectedItem: null,
            pythonEditorContent: null,
        };
    },

    mutations: {
        SET_CURRENT_USER(state, user) {
            state.user = user;
        },
        SET_SELECTED_ITEM(state, item) {
            state.selectedItem = item;
        },
        SET_PYTHON_EDIT(state, pythonEditorContent) {
            state.pythonEditorContent = pythonEditorContent;
        }
    },

    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post('http://47.102.116.125:8080/login', credentials);
                if (response.status === 200) {
                    commit('SET_CURRENT_USER',credentials);
                    return true;
                }
            } catch (error) {
                console.error('登录请求失败', error);
                return false;
            }
            return false;
        },
        selectSideBarItem({ commit }, item) {
            commit('SET_SELECTED_ITEM', item);
        },
        updateEditorContent({ commit }, editorContent) {
            commit('SET_PYTHON_EDIT', editorContent);
        }
    },

    getters: {
        isLoggedIn(state) {
            return !!state.user;
        },
        getUser(state) {
            return state.user;
        },
        getSelectedItem: (state) => state.selectedItem,
        getPythonEditorContent(state) {
            return state.pythonEditorContent;
        },
    },
});

export default store;