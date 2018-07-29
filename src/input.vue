<template>
    <div class="wrapper" :class="{error}">
        <input :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event)"
               @input="$emit('input',$event)"
               @focus="$emit('focus',$event)"
               @blur="$emit('blur',$event)"
               :value="value"

        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'
    export default {
        components: {Icon},
        name: 'GuluInput',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }

        }

    }
</script>
<style lang="scss" scoped="">
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $font-size: 14px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $error-color: #f1453d;
    .wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: $font-size;
        > :not(:last-child) { margin-right: 0.5em; }
        > input {
            font-size: inherit; height: $height; border: 1px solid $border-color;
            border-radius: 4px; padding: 0 8px;
            &:hover { border-color: $border-color-hover; }
            &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }
            &[disabled] {
                border-color: #bbb; color: #aaa; cursor: not-allowed; }
        }
        &.error {
            > input {
                border-color: $error-color;
            }
        }
        .icon-error {
            fill: $error-color;
        }
        .errorMessage {
            color: $error-color;
        }
    }
</style>