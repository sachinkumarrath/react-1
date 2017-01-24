module.exports = function(grunt){
  grunt.initConfig({
    webpack :{
      entry : "./src/index.js",
      output : {
        filename : "./build/build.js"
      }
    }
  });
  grunt.loadNpmTasks("grunt-webpack");
  grunt.registerTask('hello',function(){
    console.log('running hello grunt');
  });
  grunt.registerTask('sample',function(){
    console.log('running sample task');
  });
  grunt.registerTask('default',['webpack']);
};
