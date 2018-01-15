import jsdom from 'jsdom'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'

// Creates jsdom versions of the document and window objects normally provided by the web browser
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView

// Put them on the global object so React can access it
global.document = doc
global.window = win

// Take all properties of the jsdom window and put them on the global object
Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key]
    }
})

chai.use(chaiImmutable)
