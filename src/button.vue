<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('btn-click')">
        <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
        <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon';
    export default {
        name: '',
        components: {
            'g-icon': Icon,
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value){
                    return value !== 'left' && value !== 'right' ? false : true;
                }
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .g-button {
        display: inline-flex;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
            }
            > .content {
                order: 1;
            }
        }
        .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>