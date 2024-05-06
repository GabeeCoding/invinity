import * as fs from "fs"
import * as path from "path"

// Function to remove directory recursively
function removeDirectory(directory) {
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach((file, index) => {
      const filePath = `${directory}/${file}`;
      if (fs.lstatSync(filePath).isDirectory()) {
        // Recursive call for directories
        removeDirectory(filePath);
      } else {
        // Delete file
        fs.unlinkSync(filePath);
      }
    });
    // Remove the directory itself
    fs.rmdirSync(directory);
  }
}

// Function to copy files recursively
function copyDirectory(source, destination) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  // Get all files and directories within the source directory
  const files = fs.readdirSync(source);

  // Loop through each file/directory
  files.forEach(file => {
    const srcPath = path.join(source, file);
    const destPath = path.join(destination, file);

    // Check if current item is a directory
    if (fs.statSync(srcPath).isDirectory()) {
      // Recursively copy subdirectories
      copyDirectory(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

console.log("building...")
let start = performance.now()

removeDirectory("dist")
copyDirectory("public", "dist")

let result = await Bun.build({
	target: "browser",
	outdir: "dist",
	entrypoints: ["./src/index.tsx"],
})

let end = performance.now()

console.log(`build done in ${end - start} ms`)

if (!result.success) {
	console.error("Build failed");
	for (const message of result.logs) {
		console.error(message);
	}
}
