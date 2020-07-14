<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css">
    <title>Projects</title>
</head>
<body>
    <div id="root" class="container">
        @include('projects.index')

        <div class="columns">
            <div class="column is-half">
                <form action="{{ route('projects.store') }}"
                      method="POST"
                      @submit.prevent="onSubmit"
                      @keydown="form.errors.clear($event.target.name)">
                    {{--
                    Event Modifiers like .prevent, .once etc.
                    $event refers to original DOM event that's fired
                    --}}
                    <div class="field">
                        <div class="control">
                            <label for="name" class="label">Project Name:</label>
                            <input id="name" name="name" class="input" type="text" placeholder="Project Name" v-model="form.name">
                            <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label for="description" class="label">Project Description:</label>
                            <input id="description" name="description" class="input" type="text" placeholder="Project Description" v-model="form.description">
                            <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
                        </div>
                    </div>

                    <div class="control">
                        <button class="button is-primary" :disabled="form.errors.any()">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="{{ asset('js/manifest.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/vendor.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</body>
</html>
