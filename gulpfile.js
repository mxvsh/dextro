const gulp = require("gulp");
const fs = require("fs");
const run = require("gulp-run");
const package = require("./packages/core/package.json");

gulp.task("dist", (cb) => {
  gulp.src("packages/web/build/**").pipe(gulp.dest("dist/web"));
  gulp.src("packages/core/src/**").pipe(gulp.dest("dist/"));

  package["name"] = "dextro";

  fs.writeFileSync("dist/package.json", JSON.stringify(package, null, 2));

  cb();
});
