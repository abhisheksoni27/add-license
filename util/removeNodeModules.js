const removeNodeModules = (files)=>{
    return files.filter((file) => {
        if (file.indexOf('node_modules') === -1) {
            return true;
        }
        return false;
    });
}

module.exports = removeNodeModules;