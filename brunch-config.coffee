exports.config =
  paths:
    public: './public'
    watched: ['app']

  files:
    stylesheets:
      joinTo:
        '/css/master.css': /^(bower_components[\/\\]normalize.css|app)/
      order:
        before: [
          'bower_components/normalize.css/*'
        ]

  modules:
    wrapper: false
    definition: false

  conventions:
    # we don't want javascripts in asset folders to be copied like the one in
    # the bootstrap assets folder
    assets: /assets[\\/](?!javascripts)/

  plugins:
    cleancss:
      keepSpecialComments: 0
      removeEmpty: true
    sass:
      debug: 'comments'
      allowCache: true
    cssnano:
      # Optimize z-index levels
      index: true
      # Autoprefix CSS3 properties
      autoprefixer: {add:true}
    browserify:
      # A string of extensions that will be used in Brunch and for browserify.
      # Default: js json coffee ts jsx hbs jade.
      extensions: """
      js coffee
      """

      bundles:
        'js/index.js':
          # Passed to browserify.
          entry: 'app/js/client/index.js'

          # Anymatch, as used in Brunch.
          matcher: /^app[\/\\]js/

          # Direct access to the browserify bundler to do anything you need.
          onBrowserifyLoad: (bundler) -> console.log 'onWatchifyLoad'

          # Any files watched by browserify won't be in brunch's regular
          # pipeline. If you do anything before your javascripts are compiled,
          # now's the time.
          onBeforeBundle: (bundler) -> console.log 'onBeforeBundle'

          # Any files watched by browserify won't be in brunch's regular
          # pipeline. If you do anything after your javascripts are compiled,
          # now's the time.
          onAfterBundle: (error, bundleContents) -> console.log 'onAfterBundle'

          # Any options to pass to `browserify`.
          # `debug` will be set to `!production` if not already defined.
          # `extensions` will be set to a proper list of
          # `plugins.browserify.extensions`
          instanceOptions: {}