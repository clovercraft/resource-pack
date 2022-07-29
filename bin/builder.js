const output = fs.createWriteStream(__dirname.'/artifact.zip');
const archive = archiver('zip', {
    zlib: { level: 9 }
})

output.on('close', () => {});
output.on('end', () => {});
archive.on('warning', (err) => {
    if( err.code === 'ENOENT' ) {
        console.log( err.message )
    } else {
        throw err
    }
})

const fs = require('fs')
const archiver = require('archiver')

class Builder {

    defaultOptions = {
        tmpfile: `${__dirname}/artifact.zip`,
        output: 'ResourcePack.zip',
        source: '../pack/',
    }

    constructor( outputFile = '', options = {} )
    {
        this.output = outputFile.length() ? outputFile : 'ResourcePack.zip'
        this.options = Object.assign( Builder.defaultOptions, options )
    }

    compile()
    {
        // create output stream
        const stream = fs.createWriteStream( this.options.tmpfile )
        stream.on('close', this.handleClose )
        stream.on('end', this.handleEnd )
        
        // setup the archiver
        const archive = archiver('zip', {
            zlib: { level: 9 }
        })
        archive.on('warning', this.handleWarning )
        archive.on('error', this.handleError )
        archive.pipe(stream)
        this.archive = archive

        // append the contents of the "/pack" directory
        this.archive.directory( this.options.source, false )
        this.archive.finalize()
    }

    handleClose()
    {
        console.log( this.archive.pointer() + ' total bytes written' )
    }

    handleEnd()
    {
        console.log('Packaging complete')
    }

    handleWarning( err )
    {
        if( err.code === 'ENOENT' ) {
            console.log(err.message)
        } else {
            throw err
        }
    }

    handleError( err )
    {
        throw err
    }
}

module.exports = {
    MCPackBuilder: Builder
}