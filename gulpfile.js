const { src, dest, watch } = require("gulp") //Cargamos el módulo de gulp
const sass = require('gulp-sass')(require('sass'))//Cargamos el plugin de gulp sass

//Compilar sass con una tarea de gulp
function css(done) {
    src("src/scss/**/*/.scss")//Identificar todos los cambios en todos los archivos
    .pipe(sass())//Compilar los archivos sass
    .pipe(dest("build/css"));//Almacenar el código sass en un archivo css
    done();
}


//Watch que escucha por todos los cambios
function dev(done){
    watch("src/scss/**/*/.scss", css)//Escuchar por todos los cambios realizados en todos los archivos
    done();
}
    

//LLamado de tareas
exports.css = css;
exports.dev = dev