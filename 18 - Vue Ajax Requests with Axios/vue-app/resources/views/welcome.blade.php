<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <body>
        <div id="root">
            <ul>
                <li v-for="skill in skills">@{{ skill }}</li>
                {{-- Tell blade compiler to ignore this and let vue handle this variable --}}
            </ul>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script type="text/javascript" src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
