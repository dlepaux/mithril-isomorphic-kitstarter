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