class DAWProjectEntry {
    constructor(){
        this.projectName = 'unset';
        this.dawType = 'unset';
        this.dir = {};
        //this.fullPath = 'unset';
        //this.directoryCreated = 'unset';
        
        this.totalBytes = 0.0;
        this.totalFiles = 0;
        //this.files = []
        this.dawFiles = [];
        //this.subFolders = [];
        this.audioFiles = [];
        this.videoFiles = [];
        this.uncatFiles = []; // Uncategorized files
        
    }
}
module.exports = DAWProjectEntry