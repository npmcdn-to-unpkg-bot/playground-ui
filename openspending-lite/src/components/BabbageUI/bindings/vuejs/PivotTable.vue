<style>
    .pvtUi {
        color: #333
    }

    table.pvtTable {
        font-size: 8pt;
        text-align: left;
        border-collapse: collapse
    }

    table.pvtTable tr th {
        background-color: #e6EEEE;
        border: 1px solid #CDCDCD;
        font-size: 8pt;
        padding: 5px
    }

    table.pvtTable .pvtColLabel {
        text-align: center
    }

    table.pvtTable .pvtTotalLabel {
        text-align: right
    }

    table.pvtTable tr td {
        color: #3D3D3D;
        padding: 5px;
        background-color: #FFF;
        border: 1px solid #CDCDCD;
        vertical-align: top;
        text-align: right
    }

    .pvtFilterBox, .pvtVals {
        text-align: center
    }

    .pvtGrandTotal, .pvtTotal {
        font-weight: 700
    }

    .pvtAggregator {
        margin-bottom: 5px
    }

    .pvtAxisContainer, .pvtVals {
        border: 1px solid gray;
        background: #EEE;
        padding: 5px;
        min-width: 20px;
        min-height: 20px
    }

    .pvtAxisContainer li {
        padding: 8px 6px;
        list-style-type: none;
        cursor: move
    }

    .pvtAxisContainer li.pvtPlaceholder {
        -webkit-border-radius: 5px;
        padding: 3px 15px;
        border-radius: 5px;
        border: 1px dashed #aaa
    }

    .pvtAxisContainer li span.pvtAttr {
        -webkit-text-size-adjust: 100%;
        background: #F3F3F3;
        border: 1px solid #DEDEDE;
        padding: 2px 5px;
        white-space: nowrap;
        border-radius: 5px
    }

    .pvtTriangle {
        cursor: pointer;
        color: grey
    }

    .pvtHorizList li {
        display: inline
    }

    .pvtVertList {
        vertical-align: top
    }

    .pvtFilteredAttribute {
        font-style: italic
    }

    .pvtFilterBox {
        z-index: 100;
        width: 280px;
        border: 1px solid gray;
        background-color: #fff;
        position: absolute;
        padding: 20px
    }

    .pvtFilterBox h4 {
        margin: 0
    }

    .pvtFilterBox p {
        margin: 1em auto
    }

    .pvtFilterBox label {
        font-weight: 400
    }

    .pvtFilterBox input[type=checkbox] {
        margin-right: 5px
    }

    .pvtCheckContainer {
        text-align: left;
        overflow: scroll;
        width: 100%;
        max-height: 200px
    }

    .pvtCheckContainer p {
        margin: 5px
    }

    .pvtRendererArea {
        padding: 5px
    }

</style>

<template>


</template>

<script>


    export default {
        props: ['cube', 'endpoint'],
        components: {},
        data () {
            return {
                Pivot: {
                    cols: ['administrative_classification_admin1.admin1', 'other_exp_type.exp_type'],
                    rows: ['classification_economic_econ1_label.econ1_label', 'other_fin_source.fin_source'],
                    aggregates: 'adjusted.sum'
                }
            }
        },
        watch: {},
        ready () {

        },
        computed: {}

    }

</script>