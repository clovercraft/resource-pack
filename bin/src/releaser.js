const fs = require('fs')
const path = require('node:path')
const { Octokit } = require("@octokit/core")

class Releaser {

    constructor( filepath = '', token )
    {
        this.token = token
        this.octokit = new Octokit( { auth: token } )
        this.resource = path.resolve( filepath )
    }

    async create()
    {
        const newTag = await this.getNewReleaseName()
        const release = await this.api(
            'POST',
            '/repos/{owner}/{repo}/releases',
            {
                owner: 'clovercraft',
                repo: 'resource-pack',
                tag_name: newTag,
                target_commitish: 'production',
                name: newTag,
                draft: false,
                prerelease: false,
                generate_release_notes: false
            }
        )
        this.release = release
        return release
    }

    async upload()
    {
        let upload_url = this.release.upload_url
        let response = await this.api(
            'POST',
            upload_url,
            {
                name: 'ResourcePack.zip',
                data: fs.readFileSync( this.resource )
            }
        )
        return response
    }

    async setBody( string )
    {
        let release_url = this.release.url
        let response = await this.api(
            'PATCH',
            release_url, {
                body: string
            }
        )
        return response
    }

    async api( method, endpoint, options )
    {
        options.url = endpoint
        options.method = method
        options.headers = {
            authorization: `token ${this.token}`
        }
        let response = await this.octokit.request( options )
        
        if( response.status >= 300 ) {
            console.error( response )
            throw new Error( 'API request failed.')
        }
        
        return response.data
    }

    async getNewReleaseName()
    {
        const releases = await this.api(
            'GET',
            '/repos/{owner}/{repo}/releases', {
                owner: 'clovercraft',
                repo: 'resource-pack'
            }
        )
        if( releases.length === 0 ) {
            return 'v1.0'
        }

        let version = releases[ releases.length - 1 ]
            .tag_name
            .replace('v','')
            .split('.')
        
        version[ version.length -1 ] = parseInt(version[ version.length -1 ] ) + 1
        return `v${version.join('.')}`
    }
}

module.exports = {
    MCPackReleaser: Releaser
}