<style>

    /*
     * Main content
     */

    .main {
        padding: 20px;
    }

    @media (min-width: 768px) {
        .main {
            padding-right: 40px;
            padding-left: 40px;
        }
    }

    .main .page-header {
        margin-top: 0;
    }

    /*
     * Placeholder dashboard ideas
     */

    .placeholders {
        margin-bottom: 30px;
        text-align: center;
    }

    .placeholders h4 {
        margin-bottom: 0;
    }

    .placeholder {
        margin-bottom: 20px;
    }

    .placeholder img {
        display: inline-block;
        border-radius: 40%;
    }


</style>

<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1 class="page-header">Dashboard</h1>

        <div class="row placeholders">
            <template v-if=parentMsg>
                <div class="col-xs-6 col-sm-3 placeholder">
                    <img src="https://s.gravatar.com/avatar/d1019c5bf2380301b05984902ee25886?s=40"
                         width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
                    <h4>Label</h4>
                    <span class="text-muted">Something else</span>
                </div>
                <div class="col-xs-6 col-sm-3 placeholder">
                    <img src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50"
                         width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
                    <h4>Label</h4>
                    <span class="text-muted">Something else</span>
                </div>
                <div class="col-xs-6 col-sm-3 placeholder">
                    <img src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                         width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
                    <h4>Label</h4>
                    <span class="text-muted">Something else</span>
                </div>
                <div class="col-xs-6 col-sm-3 placeholder">
                    <img src="https://s.gravatar.com/avatar/d1019c5bf2380301b05984902ee25886?s=2048"
                         width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
                    <h4>Label</h4>
                    <span class="text-muted">Something else</span>
                </div>
            </template>
            <template v-else>
                <div class="col-xs-6 col-sm-3 placeholder">
                    <img src="https://s.gravatar.com/avatar/d1019c5bf2380301b05984902ee25886?s=40"
                         width="40" height="40" class="img-responsive" alt="Generic placeholder thumbnail">
                    <h4>Label</h4>
                    <span class="text-muted">Something else</span>
                </div>
            </template>
        </div>

        <h2 class="sub-header">Section title</h2>
        <div class="table-responsive">
            <div>
                <input v-model="parentMsg" :value="myMessage" /><br/>
            </div>
            <div>
                <mapvisualization :my-message=parentMsg></mapvisualization>
                <!--
                    <div>
                        <ecResults></ecResults>
                        <mapitResults></mapitResults>
                    </div>
                -->
            </div>
            <div>
                Lat: <input v-model="mylat"> Lng: <input v-model="mylng">
            </div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1,001</td>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>
                        <div class="showtheway">
                            <a href="https://showtheway.io/to/2.9,3.5">Magic</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1,002</td>
                    <td>amet</td>
                    <td>consectetur</td>
                    <td>adipiscing</td>
                    <td>
                        <widgetshowtheway :mylat=mylat :mylng=mylng></widgetshowtheway>
                    </td>
                </tr>
                <tr>
                    <td>1,003</td>
                    <td>Integer</td>
                    <td>nec</td>
                    <td>odio</td>
                    <td>Praesent</td>
                </tr>
                <tr>
                    <td>1,003</td>
                    <td>libero</td>
                    <td>Sed</td>
                    <td>cursus</td>
                    <td>ante</td>
                </tr>
                <tr>
                    <td>1,004</td>
                    <td>dapibus</td>
                    <td>diam</td>
                    <td>Sed</td>
                    <td>nisi</td>
                </tr>
                <tr>
                    <td>1,005</td>
                    <td>Nulla</td>
                    <td>quis</td>
                    <td>sem</td>
                    <td>at</td>
                </tr>
                <tr>
                    <td>1,006</td>
                    <td>nibh</td>
                    <td>elementum</td>
                    <td>imperdiet</td>
                    <td>Duis</td>
                </tr>
                <tr>
                    <td>1,007</td>
                    <td>sagittis</td>
                    <td>                        <widgetshowtheway :mylat=mylat :mylng=mylng></widgetshowtheway>
                    </td>
                    <td>Praesent</td>
                    <td>mauris</td>
                </tr>
                <tr>
                    <td>1,008</td>
                    <td>Fusce</td>
                    <td>nec</td>
                    <td>tellus</td>
                    <td>sed</td>
                </tr>
                <tr>
                    <td>1,009</td>
                    <td>augue</td>
                    <td>semper</td>
                    <td>porta</td>
                    <td>Mauris</td>
                </tr>
                <tr>
                    <td>1,010</td>
                    <td>massa</td>
                    <td>Vestibulum</td>
                    <td>lacinia</td>
                    <td>arcu</td>
                </tr>
                <tr>
                    <td>1,011</td>
                    <td>eget</td>
                    <td>nulla</td>
                    <td>Class</td>
                    <td>aptent</td>
                </tr>
                <tr>
                    <td>1,012</td>
                    <td>taciti</td>
                    <td>sociosqu</td>
                    <td>ad</td>
                    <td>litora</td>
                </tr>
                <tr>
                    <td>1,013</td>
                    <td>torquent</td>
                    <td>per</td>
                    <td>conubia</td>
                    <td>nostra</td>
                </tr>
                <tr>
                    <td>1,014</td>
                    <td>per</td>
                    <td>inceptos</td>
                    <td>himenaeos</td>
                    <td>Curabitur</td>
                </tr>
                <tr>
                    <td>1,015</td>
                    <td>sodales</td>
                    <td>ligula</td>
                    <td>in</td>
                    <td>libero</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    import mapvisualization from './mapVisualization.vue';
    import widgetshowtheway from './widgetShowTheWay.vue';

    // Try out date picker
    // https://github.com/Bubblings/vue-date-picker

    // Try out Form generation from Popolo
    // https://github.com/dgerber/vue-formidable

    // Try out tag editor
    // https://github.com/hnakamur/vue.tag-editor.js

    export default {
        props: ['myMessage'],
        components: {
            mapvisualization,
            widgetshowtheway
        },
        data () {
            return {
                parentMsg: "",
                mylat: "",
                mylng: ""
            }

        }
    }

</script>