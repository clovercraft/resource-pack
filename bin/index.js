const { MCPackBuilder } = require('./builder')

const builder = new MCPackBuilder( '../build/ResourcePack.zip')
builder.compile()